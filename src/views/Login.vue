<template>
  <div>
    <h1>เข้าสู่ระบบ</h1>
    <p>Email : <input v-model="email" type="email" required /></p>
    <p>Password : <input v-model="password" type="password" required /></p>
    <button @click="login()">Login</button>
    <button @click="logout()">Logout</button><br>
    <p style="color:#999999">หากยังไม่ได้สมัครให้สมัครที่<RouterLink to="/register"> register</RouterLink></p>
  </div>
</template>

<script>
import { signInWithEmailAndPassword, signOut , } from "firebase/auth";
import { auth } from "../plugins/firebaseInit";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      //   const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User=" + user);
          // ...
          this.$router.replace("/news");
          //   this.$router.push("/about");
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
        });
    },
    logout() {
      // const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.$router.replace("/");
        })
        .catch((error) => {
          // An error happened
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>