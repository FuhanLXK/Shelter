<template>
  <div class="login">
    <div class="login_box_div">
      <h2>Shelter--你的网络背包</h2>
      <p>发文章，发视频，“快”视频，一切你能想象的东西，尽数在这。欢迎来到Shelter(避难所)</p>
      <div class="login_reinges_box">
        <div>登陆</div>
        <div>注册</div>
      </div>
      <div class="login_box_user">
        <div class="login_user_account">
          <label>账号：</label><input v-model="username" type="" name="">
        </div>
        <div class="login_user_account">
          <label>密码：</label><input v-model="password" type="password" name="">
        </div>
        <button @click="loginEventSubmit()" class="login_submit_button">登陆</button>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: 'login',
  data(){
    return{
      username:null,
      password:null
    }
  },
  methods:{
    loginEventSubmit(){

      function sendAppAxios(){
        return new Promise(function(resolve, reject) {
          setTimeout(function () {
             resolve('隔了三秒返回回来')
          },3000)
        })
      }

      sendAppAxios().then((data) => {
        console.log(data)
      })

      // function sendAxiosEvent(){
      //   return new Promise(function (resolve, reject) {
      //     request(url, param, resolve, reject);
      //   })
      // }

      // sendAxiosEvent('http://localhost:3030/api/user/login','').then(function(data){
      //     console.log('成功', data)
      // }, function(err){
      //     console.log('失败', err)
      // })
      let data = qs.stringify({username: this.username , password: this.password})
       this.$http.post('http://localhost:3030/api/user/login', data).then((res) => {
          console.log(res);
       }).catch((err) => {
          alert(err);
       });
    }
  }
}
</script>

<style>
.login_submit_button:hover{
  background:red;
}
.login_submit_button{
  transition:background 0.5s;
  width:5rem;
  height:5rem;
  border:0px;
  color:#fff;
  border-radius:10rem;
  cursor:pointer;
  display:flex;
  margin:0 auto;
  justify-content:center;
  align-items:center;
  font-size:1.2rem;
  margin-top:2rem;
  background-color:#ccc;
}
.login_user_account{
  padding:1.5rem;
}
.login_user_account>label{
  font-size:1.3rem;
}
.login_user_account>input{
  border:0px;
  border-bottom:1px solid #999;
}
.login_box_user{
  width:35rem;
  margin:0 auto;
  margin-top:2rem;
}
.login_reinges_box>div{
	font-size:1.3rem;
	padding:0 2rem;
	cursor:pointer;
}
.login_reinges_box{
	width:30rem;
	display:flex;
	justify-content:center;
	margin:0 auto;
	margin-top:2rem;
}
.login_box_div{
	width:50rem;
	height:40rem;
	background-color:#fff;
	margin:0 auto;
	z-index:9;
	margin-top:40rem;
	padding:1rem 0;
}
.login{
  display:flex;
  justify-content:center;
  align-items:Center;
}
.login::before{
	width:100%;
  height:120rem;
  min-width:1400px;
	background:url(../assets/img/login.jpeg);
  z-index:-1;
  background-size:cover;
  filter:blur(10px);
  content:'';
  position:absolute;
  top:0;
  left:0;
}
</style>
