import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import CountriesFinder from '@/components/countries/CountriesFinder'
import CountriesHome from '@/components/countries/CountriesHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CountriesFinder',
      component: CountriesFinder
    },
    {
      path: '/countries',
      name: 'CountriesHome',
      component: CountriesHome
    }
  ]
})
