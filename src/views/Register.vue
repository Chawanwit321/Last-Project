<template>
  <div>
    <h1>สมัครข้อมูล</h1>
    <p>วัน/เดือน/ปีเกิด<input type="date" v-model="date"></p>
    <p>ชื่อ<input type="text" v-model="fname" /></p>
    <p>นามสกุล<input type="text" v-model="lname" /></p>
    <p>เพศ
      <input type="radio" name="gender" value="male" v-model="male"> ชาย
      <input type="radio" name="gender" value="famale" v-model="male"> หญิง</p>
    <p>หมายเลขโทรศัพท์<input type="text" v-model="phone" /></p>
    <p>Email : <input v-model="email" type="email" required /></p>
    <p>Password : <input v-model="password" type="password" required /></p>
    <p></p>
    <button @click="login();addData()">Submit</button>

  </div>
</template>

<script>
import { db } from "../plugins/firebaseInit";
import { collection, addDoc ,getDocs } from "firebase/firestore";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../plugins/firebaseInit";

export default {
  data() {
    return {
      dbData: [],
      male: "",
      fname: "",
      lname: "",
      date: "",
      phone: "",
      email: "",
      password: "",
    };
  },
  methods: {
   login() {
      //const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User=" + user);
          this.$router.replace("/login");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);

          // ..
        });
      /*.then(() => {
          alert("Checkpassword");
          // Sign-out successful.
        });*/
    },
    checklogin() {
      //const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log(uid);
          // ...แสดงผลuser:Email,uidในหน้าจอ
          this.uid = user.uid;
          this.emails = user.emails;
        } else {
          // User is signed out
          // ...กรณีไม่ได้login ให้เปลี่ยนไปหน้าlogin ก่อน
          alert("Plses Login");
          this.$router.push("/login");
        }
      });
    },
    async addData() {
      try {
        const docRef = await addDoc(collection(db, "Chawanwit"), {
          email: this.email,
          password: this.password,
          male: this.male,
          fname: this.fname,
          lname: this.lname,
          date: this.date,
          phone: this.phone,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      alert("Savedata");
    },
    async readData() {
      const querySnapshot = await getDocs(collection(db, "Chawanwit"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.table.push({ id: doc.id, data: doc.data() });
      });
    },
  },
};
</script>

<style>
</style>