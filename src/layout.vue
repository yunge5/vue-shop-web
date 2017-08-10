<template>
  <div>
    <div class="app-head">
      <div class="app-head-inner">
        <router-link :to="{path: '/'}">
          <img class="logo" src="./assets/logo.png">
        </router-link>
        <div class="head-nav">
          <ul class="nav-list">
            <li> {{ username }}</li>
            <li v-if="username!== ''" class="nav-pile">|</li>
<!--            <li v-if="username!== ''" @click="quit">退出</li> -->
          <li v-if="username=== ''" @click="logClick">登录</li>
          <li class="nav-pile">|</li>
          <li v-if="username=== ''" @click="regClick">注册</li>
          <li v-if="username=== ''" class="nav-pile">|</li>
          <li @click="aboutClick">关于</li>
        </ul>
      </div>  
    </div>
  </div>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <app-footer></app-footer>
    <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">关于我们</my-dialog>
    <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <log-form @has-log="onSuccessLog"></log-form>
    </my-dialog>
    <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <reg-form></reg-form>
    </my-dialog>
  </div>
</template>
<script>
  import AppFooter from './components/footer'
  import MyDialog from './components/base/dialog'
  import LogForm from './components/logForm'
  import RegForm from './components/regForm'
  export default {
    data() {
      return {
        username: '',
        isShowAboutDialog: false,
        isShowLogDialog: false,
        isShowRegDialog: false
      }
    },
    components: {
      AppFooter,MyDialog,LogForm,RegForm
    },
    methods: {
      aboutClick () {
        this.isShowAboutDialog = true
      },
      logClick () {
        this.isShowLogDialog = true
      },
      regClick () {
        this.isShowRegDialog = true
      },
      closeDialog(attr) {
        this[attr] = false
      },
      onSuccessLog(data) {
        //console.log(data.username)
        this.closeDialog ('isShowLogDialog')
        this.username = data.username
      }
    }
  }
</script>
<style>
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family: 'MircoSoft YaHei', Helvetica, Arial, sans-serif;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
  background: #f0f2f5;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
.app-head {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-head-inner img {
  width: 50px;
  margin-top: 20px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
</style>