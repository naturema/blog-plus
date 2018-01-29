<template>
    <div class="container">
        <div class="header_title">
            <h2>. Gatinul</h2>
            <p class="title_extra">
                <Icon type="social-github" @click.native="github"></Icon>
                <Icon type="social-twitter" @click.native="twitter"></Icon>            
            </p>
        </div>
        <div class="left_title">{{left_title}}</div>
        <div class="left_visit"><Icon type="eye"></Icon> <span>{{visit}}</span></div>
        <Timeline class="timeline">
            <TimelineItem color="gray">
                <p class="time">2017年</p>
                <p class="content">人生苦短，及时行乐 .</p>
            </TimelineItem>
            <TimelineItem color="gray">  
                <p class="time">{{year}}年</p>
                <p class="content">以梦为马，不负青春 .</p>
            </TimelineItem>
            <TimelineItem color="red">
                <p class="time">More</p>
                <p class="content">不负时光，不负前程 .</p>
            </TimelineItem>
        </Timeline>
        <div class="foot_bd" @click="gotoMain">进入博客 >></div>
    </div>
</template>
<script>
    import {mapState,mapGetters} from 'vuex'
    import moment from 'moment';
    export default {
        data() {
            return {
                left_title:'我的博客',
                year:moment().year()
            }
        },
        computed:mapGetters({
            visit:'visit'
        }),
        created(){
            this.$store.dispatch('getVisits');
        },
        methods:{
            github:function(){
                this.$Spin.show(); // 全局加载中
                location.href = 'https://github.com/gatinul'
            },
            twitter(){
                this.$Spin.show();
                location.href =  'https://twitter.com/gatinul'
            },
            gotoMain(){
                this.$router.push('/main');
            }
        },
    }
</script>
<style scoped>
    .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
    }
    .container{
        height: 100vh;
        background: no-repeat url('/public/images/book.png');
        background-size: 100% 100%;
        opacity: 0.9;
        position: relative;
    }
    .header_title{
        position: absolute;
        left: 42vw;
        top:10vh;
        /* font-style: italic; */
    }
    .header_title h2{
        font-size: 48px;
        font-weight: 800;
    }
    .header_title .title_extra {
        font-size: 24px;
        text-align: center;
    }
    .title_extra i {
        margin-left: 3px;
        cursor: pointer;
    }
    .left_title{
        position: absolute;
        top: 49vh;
        left: 40vw;
        transform:rotate(-12deg);
        -ms-transform:rotate(-12deg); 	/* IE 9 */
        -moz-transform:rotate(-12deg); 	/* Firefox */
        -webkit-transform:rotate(-12deg); /* Safari 和 Chrome */
        -o-transform:rotate(-12deg); 
        width: 10px;
        font-size: 22px;
    }
    .left_visit{
        position: absolute;
        top: 71vh;
        left: 68vw;
        transform:rotate(-12deg);
        -ms-transform:rotate(-12deg); 	/* IE 9 */
        -moz-transform:rotate(-12deg); 	/* Firefox */
        -webkit-transform:rotate(-12deg); /* Safari 和 Chrome */
        -o-transform:rotate(-12deg); 
        font-size: 16px;
    }
    .timeline{
        position: absolute;
        top:41vh;
        left:53vw;
        transform:rotate(-13.5deg);
        -ms-transform:rotate(-13.5deg); 	/* IE 9 */
        -moz-transform:rotate(-13.5deg); 	/* Firefox */
        -webkit-transform:rotate(-13.5deg); /* Safari 和 Chrome */
        -o-transform:rotate(-13.5deg); 	
    }
    .ivu-timeline-item{
        padding: 0 0 28px 0;
    }
    .foot_bd{
        position: absolute;
        bottom: 5vh;
        right: 5vw;
        font-size: 18px;
        font-weight: 500;
        font-style: italic;
        cursor: pointer;
        color: #555;
    }
</style>