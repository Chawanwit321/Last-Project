<template>
  <div class="about">
    <h1>เลือกหัวข้อข่าวที่ต้องการอ่าน</h1>
    <nav>
    <RouterLink to="/city">การเมือง</RouterLink>
    <RouterLink to="/world">รอบโลก</RouterLink>
    <RouterLink to="/seta">เศรษฐกิจ</RouterLink>
    <RouterLink to="/bun">บันเทิง</RouterLink>
    <RouterLink to="/sport">กีฬา</RouterLink>
    
    </nav>
  </div>
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../plugins/firebaseInit";
export default{
    mounted() {
    this.checkLogin();
    },
    methods:{
        checkLogin() {
      // const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log(uid);
          // ...แสดง user:email,uid ในหน้าจอ
          this.email = user.email;
          this.uid = user.uid;
        } else {
          // User is signed out
          // ...กรณีlogin ไม่ได้ให้เปลี่ยนไปหน้า login
          alert("Please Login First");
          this.$router.push("/login");
        }
      });
        },
    },

};
</script>