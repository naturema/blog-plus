<template>
  <div class="page_container">
    <mu-icon-button to="/" tooltip="返回首页" tooltipPosition="top-center" class="page_to_home" touch icon="home"/>
    <h2>{{article.blog_title}}</h2>
    <mu-sub-header class="page_header">
      {{update_time}}
      <span v-if="!liked" @click.once="likeBlog" class="page_blog_like"><mu-icon size="20" value="favorite border" />{{article.likes}}</span>
      <span v-if="liked" class="page_blog_yet_like"><mu-icon size="20" value="favorite" />{{article.likes}}</span>
    </mu-sub-header>
    <blockquote class="warn_blockquote" v-if="!isValid">本文已半年没有更新，请读者注意博文时效性~</blockquote>
    <mu-content-block class="page_content" v-html="main_content">
    </mu-content-block>
  </div>
</template>
<script>
import {mapState,mapGetters} from 'vuex';

export default {
  data(){
    return {
      id: this.$route.params.id,
      liked: false
    }
  },
  computed:mapGetters({
    article:'pageView',
    main_content:'pageContent',
    isValid: 'pageValid',
    update_time: 'pageDate'
  }),
  created() {
    this.$store.dispatch('getBlogById',{
      id: this.$route.params.id
    });
  },
  destroyed(){
    this.$store.dispatch('clearPageView')
  },
  methods:{
    likeBlog(){
      this.$store.dispatch('likeBlog',{
        id: this.$route.params.id
      }).then(()=>{
        this.$store.dispatch('getBlogById',{
          id: this.$route.params.id
        });
        this.liked = true;
      })
    }
  }
}
</script>
<style scoped>
.page_container{
  position: relative;
  -webkit-overflow-scrolling: touch;
}
.page_header{
  padding-left: 0px!important;
}
.page_content{
  padding: 8px 0px!important;
}
.page_blog_like,.page_blog_yet_like{
  float: right;
}
.page_blog_like i,.page_blog_yet_like i{
  width: 25px;
}
.page_to_home{
  position: fixed;
  bottom: 3rem;
  right: 1.5rem;
  border-radius: 50%;
  background: #e9e9e9;
  opacity: 0.35;
}
</style>

<style>
.page_blog_like{
  cursor: pointer;
}
.page_blog_yet_like{
  color: #e4393c;
}
.warn_blockquote{
  color: #555;
  border-left: 5px solid #e4393c!important;
  margin: .2rem .5rem;
}
h1,h2,h3,h4,h5,h6{
  margin-top: 0;
  margin-bottom: .5rem!important;
  color: rgba(0,0,0,.85)!important;
  font-weight: 500!important;
}
blockquote {
  /* color:#4fc08d; */
  color:#998;
  font-style: italic;
  /* border-left: 1px dashed #999; */
  border-left: 5px solid #4fc08d;
  padding-left:15px!important;
  font-size:16px!important;
  margin: 0px!important;
  margin-bottom:1rem!important;
  
}
blockquote p:before {
  content: '"'; 
}
blockquote p:after {
  content: '"'; 
}
blockquote li {
  margin-top: 10px;
}
pre {
  line-height: 1.7em;
  overflow: auto;
  padding: 6px 10px;
  background-color: aliceblue;
}

pre > code {
  border: 0;
  display: inline;
  max-width: initial;
  padding: 0;
  margin: 0;
  overflow: initial;
  line-height: inherit;
  font-size: 1em;
  white-space: pre;
  background: 0 0;
}

hr {
  text-align: left;
  color: #999;
  height: 2px!important;
  padding: 0!important;
  margin: 16px 0!important;
  background-color: #E6E6E6;
  border: 0 none;
}

code{
  color: #4fc08d;
}
pre code{
  color:#333;
}

table {
  *border-collapse: collapse; /* IE7 and lower */
  border-spacing: 0;
  width: 100%;
}
table {
  border: solid #ccc 1px;
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  /*-webkit-box-shadow: 0 1px 1px #ccc;
  -moz-box-shadow: 0 1px 1px #ccc;
  box-shadow: 0 1px 1px #ccc;   */
}
table tr:hover {
  background: #fbf8e9;
  -o-transition: all 0.1s ease-in-out;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -ms-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
}
table td, .table th {
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}

table th {
  background-color: #dce9f9;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#ebf3fc), to(#dce9f9));
  background-image: -webkit-linear-gradient(top, #ebf3fc, #dce9f9);
  background-image:    -moz-linear-gradient(top, #ebf3fc, #dce9f9);
  background-image:     -ms-linear-gradient(top, #ebf3fc, #dce9f9);
  background-image:      -o-linear-gradient(top, #ebf3fc, #dce9f9);
  background-image:         linear-gradient(top, #ebf3fc, #dce9f9);
  /*-webkit-box-shadow: 0 1px 0 rgba(255,255,255,.8) inset;
  -moz-box-shadow:0 1px 0 rgba(255,255,255,.8) inset;
  box-shadow: 0 1px 0 rgba(255,255,255,.8) inset;*/
  border-top: none;
  text-shadow: 0 1px 0 rgba(255,255,255,.5);
  padding: 5px;
}

table td:first-child, table th:first-child {
  border-left: none;
}

table th:first-child {
  -moz-border-radius: 6px 0 0 0;
  -webkit-border-radius: 6px 0 0 0;
  border-radius: 6px 0 0 0;
}
table th:last-child {
  -moz-border-radius: 0 6px 0 0;
  -webkit-border-radius: 0 6px 0 0;
  border-radius: 0 6px 0 0;
}
table th:only-child{
  -moz-border-radius: 6px 6px 0 0;
  -webkit-border-radius: 6px 6px 0 0;
  border-radius: 6px 6px 0 0;
}
table tr:last-child td:first-child {
  -moz-border-radius: 0 0 0 6px;
  -webkit-border-radius: 0 0 0 6px;
  border-radius: 0 0 0 6px;
}
table tr:last-child td:last-child {
  -moz-border-radius: 0 0 6px 0;
  -webkit-border-radius: 0 0 6px 0;
  border-radius: 0 0 6px 0;
}
/*
github.com style (c) Vasily Polovnyov <vast@whiteants.net>
*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: #333;
  background: #fff;
}

.hljs-comment,
.hljs-quote {
  color: #998;
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-subst {
  color: #333;
  font-weight: bold;
}

.hljs-number,
.hljs-literal,
.hljs-variable,
.hljs-template-variable,
.hljs-tag .hljs-attr {
  color: #008080;
}

.hljs-string,
.hljs-doctag {
  color: #d14;
}

.hljs-title,
.hljs-section,
.hljs-selector-id {
  color: #900;
  font-weight: bold;
}

.hljs-subst {
  font-weight: normal;
}

.hljs-type,
.hljs-class .hljs-title {
  color: #458;
  font-weight: bold;
}

.hljs-tag,
.hljs-name,
.hljs-attribute {
  color: #000080;
  font-weight: normal;
}

.hljs-regexp,
.hljs-link {
  color: #009926;
}

.hljs-symbol,
.hljs-bullet {
  color: #990073;
}

.hljs-built_in,
.hljs-builtin-name {
  color: #0086b3;
}

.hljs-meta {
  color: #999;
  font-weight: bold;
}

.hljs-deletion {
  background: #fdd;
}

.hljs-addition {
  background: #dfd;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}
</style>


