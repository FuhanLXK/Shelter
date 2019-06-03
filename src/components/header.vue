<template>
  <div class="hello">
    <!-- <img src="@/assets/img/background.jpg" alt=""> -->
    <div class="header">
        <div>
            <div class="icon_box_div">
                <img src="../assets/icon/test.png" alt="">
            </div>
            <input class="input_search_box" type="text" placeholder="搜索相关资讯及事物，Shelter立马呈现给你">
        </div>
        <div>
            <div class="icon_box_redian">
                <img src="../assets/icon/redian.png" alt="">
                <span>近期热点</span>
            </div>
            <div class="icon_box_redian">
                <img src="../assets/icon/APP.png" alt="">
                <span><router-link to="/home" >下载Shelter App</router-link></span>
            </div>
            <div class="icon_box_redian">
                <img src="../assets/icon/APP.png" alt="">
                <span><router-link to="/login" >登陆</router-link></span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  margin: 0;
  padding: 0;
}
.header{
  background-color: #FFF;
  height: 4.5rem;
  display: flex;
  justify-content: space-between;
}
.header>div{
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon_box_div{
  width: 8rem;
}
.icon_box_div>img{
  width: 40%;
}
.input_search_box{
  width: 68rem;
  height: 2.5rem;
  border:1px solid #e6edf4;
  background-color: #f1f5fa;
  padding-left: 1rem;
}
.icon_box_redian{
  cursor: pointer;
  color:#666;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  margin-right: 2rem;
}
.icon_box_redian>img{
  width: 1.5rem;
  position: relative;
  top:0.24rem;
  margin-right: 0.5rem;
}
</style>
