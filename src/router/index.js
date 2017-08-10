import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import DetailPage from '@/pages/detail'
import CountPage from '@/pages/detail/count'
import ForeCastPage from '@/pages/detail/forecast'
import AnalysisPage from '@/pages/detail/analysis'
import PublishPage from '@/pages/detail/publish'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      //name: 'home',
      component: IndexPage
    },
    {
      path: '/detail',
      //name: 'detail',
      redirect: 'detail/count',
      component: DetailPage,
      children:[
      	{
      	  path: 'count',
	      component: CountPage,
      	},
      	{
      	  path: 'forecast',
	      component: ForeCastPage,
      	},
      	{
      	  path: 'analysis',
	      component: AnalysisPage,
      	},
      	{
      	  path: 'publish',
	      component: PublishPage,
      	}
      ]
    }
  ]
})
