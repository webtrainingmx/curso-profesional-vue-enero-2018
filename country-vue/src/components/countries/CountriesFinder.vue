<template>
  <div class="b-countries-finder">
    <h1 class="b-title">Let's find an amazing country</h1>
    <div class="b-countries-finder__map">
      <img src="/static/img/wt-world.png" alt="World Map" width="593"
           class="img-responsive">
    </div>
    <form @submit.prevent="getCountries" class="well b-countries-finder__form">
      <div class="form-group">
        <label for="countryName">Country name</label>
        <input type="text" class="form-control" id="countryName"
               placeholder="Country name" v-model="countryName"
               required>
      </div>
      <button type="submit" class="btn btn-primary"
              :disabled="countryName.length < 2">Search
      </button>
    </form>
    <app-countries-cards :countries="countries"></app-countries-cards>
  </div>
</template>
<script>
import axios from 'axios'
import CountriesCards from './CountriesCards'

export default {
  name: 'app-countries-finder',
  components: {
    'app-countries-cards': CountriesCards
  },
  data () {
    return {
      countryName: '',
      countries: null
    }
  },
  methods: {
    getCountries: function () {
      let serverAPI = 'http://countries-finder-api.webtraining.fun'
      let url = `${serverAPI}/countries/search`
      let serviceURL = `${url}/${this.countryName}`

      axios.get(serviceURL).then((response) => {
        this.countries = response.data
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
