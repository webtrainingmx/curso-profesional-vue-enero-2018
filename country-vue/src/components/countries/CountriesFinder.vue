<template>
  <div class="b-countries-finder">
    <h1 class="b-title">Let's find an amazing country</h1>
    <form @submit.prevent="getCountries" class="well">
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

    <div class="b-country" v-for="(country, key) in countries">
      {{ country }}
    </div>

  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'app-countries-finder',
  data () {
    return {
      countryName: '',
      countries: {},
      currentDate: new Date()
    }
  },
  methods: {
    getCountries: function () {
      let url = 'http://127.0.0.1:8000/countries/search'
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
  margin: 60px 0 80px 0;
}

.b-countries-finder {
  max-width: 640px;
  margin: 0 auto 0 auto;
  min-height: 400px;

}

/* Element UI */
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
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
