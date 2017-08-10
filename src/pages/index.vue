<template>
  <div id="app">
    <div class="index-wrap">
      <div class="index-left">
        <div class="index-left-block">
          <h2>全部产品</h2>
          <template v-for="product in productList">
            <h3>{{product.title}}</h3>
            <ul>
              <li v-for="item in product.list">
                <a :href="item.url">{{item.name}}</a>
                <span v-if="item.hot" class="hot-tag">HOT</span>
              </li>
            </ul>
            <div v-if="!product.last" class="hr"></div>
          </template>
        </div>
        <div class="index-left-block lastest-news">
          <h2>最新消息</h2>
          <ul>
            <li v-for="item in newsList">
              <a :href="item.url" class="new-item">{{ item.title }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="index-right">
        <slide-show :slides="slides" :runtime="slidesSpeed"></slide-show>
        <div class="index-board-list">
          <div class="index-board-item" v-for="(item,index) in boardList" :class="[{'line-last': index%2 !== 0},'index-board-'+item.id]">
            <div class="index-board-item-inner">
              <h2>{{item.title}}</h2>
              <p>{{item.description}}</p>
              <div class="index-board-button">
                <router-link class="button" :to="detail/count">立即购买</router-link>
             </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import SlideShow from '../components/slideShow'

export default {
  //name: 'app',
  components: {
    SlideShow
  },
  created: function() {
    this.$axios.get('./mock/db.json')
    .then((response) => {
      // success
      this.newsList = response.data.getNewsList;
      //console.log(this.newsList);
    })
    .catch((error) => {
      //error
      console.log(error);
    })
  },
  data () {
    return {
      slidesSpeed: 2000,
      slides: [
        {
          src: require('../assets/slideShow/pic1.jpg'),
          title: 'xxx1',
          href: 'detail/count'
        },
        {
          src: require('../assets/slideShow/pic2.jpg'),
          title: 'xxx2',
          href: 'detail/forecast'
        },
        {
          src: require('../assets/slideShow/pic3.jpg'),
          title: 'xxx3',
          href: 'detail/analysis'
        },
        {
          src: require('../assets/slideShow/pic4.jpg'),
          title: 'xxx4',
          href: 'detail/publish'
        }
      ],
      productList: {
        pc: {
            title: 'PC产品',
            list: [
            {
              name: '数据统计',
              url: 'detail/count',
              hot: true
            },
            {
              name: '数据预测',
              url: 'detail/forecast'
            },
            {
              name: '流量分析',
              url: 'detail/analysis'
            },
            {
              name: '广告发布',
              url: 'detail/publish'
            }
          ]
        },
        app: {
          last: false,
          title: '应用产品',
            list: [
            {
              name: '91助手',
              url: 'http://weixin.com'
            },
            {
              name: '产品助手',
              url: 'http://twitter.com',
              hot: true
            },
            {
              name: '智能地图',
              url: 'http://maps.com'
            },
            {
              name: '团队语音',
              url: 'http://phone.com'
            }
          ]
        }
      },
      newsList: [],
      boardList: [
        {
          title: '开放产品',
          description: '开放产品是一款开放产品',
          id: 'car',
          toKey: 'analysis'
        },
        {
          title: '品牌营销',
          description: '品牌营销帮助你的产品更好地找到定位',
          id: 'earth',          
          toKey: 'count'
        },
        {
          title: '使命必达',
          description: '使命必达快速迭代永远保持最前端的速度',
          id: 'loud',
          toKey: 'forecast'
        },
        {
          title: '勇攀高峰',
          description: '帮你勇闯高峰，到达事业的顶峰',
          id: 'hill',
          toKey: 'publish'
        }
      ]
    }
  },
  methods: {
  
  }
}
</script>

<style scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
  border-top: 1px solid #ccc;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-car .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.index-board-button .button{
  width: 80px;
  height:28px;
  line-height: 28px;
  text-align: center;
  background: #3fac84;
  color: #fff;
  display: block;
  font-size: 14px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
