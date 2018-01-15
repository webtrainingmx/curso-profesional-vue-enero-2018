<template>
  <div class="b-countries-finder">
    <h1 class="b-title">Country List</h1>
    <app-countries-cards :countries="countries"></app-countries-cards>
  </div>
</template>
<script>
import axios from 'axios'
import CountriesCards from './CountriesCards'

export default {
  name: 'app-countries-home',
  components: {
    'app-countries-cards': CountriesCards
  },
  data () {
    return {
      countries: null
    }
  },
  methods: {
    getCountries: function () {
      let url = 'http://127.0.0.1:8000/countries'
      let serviceURL = `${url}`

      axios.get(serviceURL).then((response) => {
        this.countries = response.data
        console.log('Countries loaded!')
      }, (error) => {
        console.log(error)
      })
    }
  },
  mounted () {
    this.getCountries()
  }

}
</script>
<style>
.b-title {
  text-align: center;
  margin: 60px 0 50px 0;
}

.b-countries {
  margin: 0 0 40px 0;
}

.b-country__flag svg {
  width: 200px;
  height: auto;
}

/* Element UI */
.el-card {
  margin-bottom: 20px;
}

.el-card__body {
  padding: 10px 20px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
