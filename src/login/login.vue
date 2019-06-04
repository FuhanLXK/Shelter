<template>
  <div class="login">
    <div class="login_box_div">
    	<h2>Shelter--你的网络背包</h2>
    	<p>发文章，发视频，“快”视频，一切你能想象的东西，尽数在这。欢迎来到Shelter(避难所)</p>
    	<div class="login_reinges_box">
    		<div>登陆</div>
    		<div>注册</div>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
}
</script>

<style>
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
