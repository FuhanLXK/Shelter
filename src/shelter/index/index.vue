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
            <div>
                <div class="video_div">
                    <!-- <Video :styleVideo="styleCssBalet" /> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Video from 'video-template-shanavideo'
import Header from '@/components/header'



export default {
  name: 'Home',
  data(){
      return{
          styleCssBalet:{
            /* link为所有的链接 */
            link:{
              videoUrl:'http://www.huafuo.net/static/github/videoscript.mp4', //视频链接
              playStyle:{
                 play:'http://www.huafuo.net/static/github/bofang.png',
                 playWidth:
                 `
                    width:30px;
                    margin:0px 10px;
                    position: relative;
                    top:2px;
                 `
              }
            }
          }
      }
  },
  components:{
      Header,
      Video
  }
}
</script>

<style scoped>
    .video_div{
        width: 600px;
        height: 300px;
        margin-top: 20px;
    }
    p{
        color:#666;
        margin: 0px;
    }
    .home_box_div{
        width: 100%;
        display: flex;
        margin-top: 0rem;
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
        border-radius: 3px;
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

