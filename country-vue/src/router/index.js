import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import CountriesFinder from '@/components/countries/CountriesFinder'
import CountriesHome from '@/components/countries/CountriesHome'
import CountryDetail from '@/components/countries/CountryDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'CountriesFinder',
      component: CountriesFinder
    },
    {
      path: '/countries',
      name: 'CountriesHome',
      component: CountriesHome,
      children: []
    }, {
      path: '/countries/detail/:countryName',
      name: 'CountryDetail',
      component: CountryDetail
    }
  ]
})
