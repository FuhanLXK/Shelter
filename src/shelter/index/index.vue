<template>
    <div>
        <Header />
        <div class="home_box_div">
            <div class="home_left_box">
                <ul>
                    <li>
                        <div>
                            <div class="icon_div_box"></div>
                        </div>
                        <div>
                            <p>webpack4.0x详细入门，细嚼慢咽带你步入打包流程</p>
                            <span>2019-8-12</span><span>BiliBili_拌爱</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="icon_div_box"></div>
                        </div>
                        <div>
                            <p>webpack4.0x详细入门，细嚼慢咽带你步入打包流程</p>
                            <span>2019-8-12</span><span>BiliBili_拌爱</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="icon_div_box"></div>
                        </div>
                        <div>
                            <p>webpack4.0x详细入门，细嚼慢咽带你步入打包流程</p>
                            <span>2019-8-12</span><span>BiliBili_拌爱</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="icon_div_box"></div>
                        </div>
                        <div>
                            <p>webpack4.0x详细入门，细嚼慢咽带你步入打包流程</p>
                            <span>2019-8-12</span><span>BiliBili_拌爱</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="icon_div_box"></div>
                        </div>
                        <div>
                            <p>webpack4.0x详细入门，细嚼慢咽带你步入打包流程</p>
                            <span>2019-8-12</span><span>BiliBili_拌爱</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="icon_div_box"></div>
                        </div>
                        <div>
                            <p>webpack4.0x详细入门，细嚼慢咽带你步入打包流程</p>
                            <span>2019-8-12</span><span>BiliBili_拌爱</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>

import Header from '@/components/header'

export default {
  name: 'Home',
  data(){
      return{
          
      }
  },
  components:{
      Header
  }
}
</script>

<style scoped>
    p{
        margin: 0px;
    }
    .home_box_div{
        width: 100%;
        display: flex;
        margin-top: 2rem;
        text-align: left;
    }
    .home_left_box{
        width: 35rem;
        /* border:1px solid red; */
        height: 99.5rem;
        padding: 1.5rem;
    }
    .home_left_box>ul{
        width: 100%;
        margin: 0px;
        padding: 0px;
    }
    .home_left_box>ul>li{
        display: flex;
        background-color:#FFF;
        padding: 0.5rem;
        font-size: 14px;
        border-radius: 5px;
        margin-bottom: 1rem;
        cursor: pointer;
    }
    .icon_div_box{
        height: 4rem;
        width: 1rem !important;
        width: 0.5rem;
        background-color: #007fff;
        border-radius: 3px;
        margin-right: 1rem;
    }
    .home_left_box>ul>li>div>p{
        margin-bottom: 0.5rem;
    }
    .home_left_box>ul>li>div>span {
        color:#666;
    }
</style>

