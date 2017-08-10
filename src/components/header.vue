<template>
  <div class="app-head">
      <div class="app-head-inner">
        <router-link :to="{path: '/'}">
          <img class="logo" src="../assets/logo.png">
        </router-link>
        <div class="head-nav">
          <ul class="nav-list">
            <li> {{ username }}</li>
            <li v-if="username!== ''" class="nav-pile">|</li>
 <!--            <li v-if="username!== ''" @click="quit">退出</li>
            <li v-if="username=== ''" @click="logClick">登录</li>
            <li class="nav-pile">|</li>
            <li v-if="username=== ''" @click="regClick">注册</li>
            <li v-if="username=== ''" class="nav-pile">|</li>
            <li @click="aboutClick">关于</li> -->
          </ul>
        </div>  
      </div>
    </div>
</template>

<script>
export default {
  // props: {
  //   isShowAboutDialog: {
  //     type: Boolean
  //   }
  // },
  data() {
    return {
      username:''
      // isShowAboutDialogA: this.isShowAboutDialog
    }
  },
  methods: {
    // aboutClick () {
    //   this.isShowAboutDialogA = true,
    //   this.$emit('showDialog',this.isShowAboutDialogA)
    //   //console.log(this.isShowAboutDialogA);
    // },
  }
}
</script>

<style lang="scss">
  body{
    background: #f6f6f6;
  }
  .app-head {
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
    .app-head-inner {
      width: 1200px;
      margin: 0 auto;
      a {
        float: left;
        .logo {
          width: 50px;
          margin-top: 20px;
        }
      }
      .head-nav {
        float: right;
        .nav-list {
          overflow: hidden;
          li {
            cursor: pointer;
            float: left;
            .nav-pile {
              padding: 0 10px;
            }
          }
        }
      }
    }
  }
</style>
