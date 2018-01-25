<template>
  <div class="b-country-detail">
    <h1 class="b-title">Information about {{ $route.params.countryName }}</h1>
    <div class="b-country-number" v-for="(country,index) in currentCountry"
         :key="index">

      <!--<div class="b-country-attribute" v-for="(value, key) in countryNumber"-->
      <!--:key="key">-->
      <!--<strong>{{ key }}</strong> {{value}}-->
      <!--</div>-->

      <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading">Data about country</div>

        <!-- Table -->
        <table class="table">
          <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">Common Name</th>
            <td>{{country.name.common}}</td>
          </tr>
          <tr>
            <th scope="row">Official Name</th>
            <td>{{country.name.official}}</td>
          </tr>
          <tr>
            <th scope="row">Currency</th>
            <td>{{country.currency}}</td>
          </tr>
          <tr>
            <th scope="row">Calling Code</th>
            <td>{{country.callingCode}}</td>
          </tr>

          </tbody>
        </table>
      </div>

    </div>

  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'app-country-detail',
  data () {
    return {
      currentCountry: null
    }
  },
  methods: {
    getCountries: function () {
      let serverAPI = 'http://countries-finder-api.webtraining.fun'
      let url = `${serverAPI}/countries/search`
      let serviceURL = `${url}/${this.$route.params.countryName}`

      axios.get(serviceURL).then((response) => {
        this.currentCountry = response.data
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

.b-countries-finder {
  min-height: 600px;
  /*background: url("/static/img/wt-world.png") no-repeat scroll 0 0 transparent;*/
}

.b-countries-finder__map {
  text-align: center;
}

.b-countries-finder__map img {
  margin: 0 auto 20px auto;
}

.b-countries-finder__form {
  max-width: 640px;
  margin: 0 auto 80px auto;
  /*min-height: 400px;*/
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
  min-height: 110px;
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
