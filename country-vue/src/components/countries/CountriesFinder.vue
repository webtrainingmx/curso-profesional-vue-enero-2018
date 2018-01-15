<template>
  <div class="b-countries-finder">
    <h1 class="b-title">Let's find an amazing country</h1>
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

    <div class="b-countries" v-if="countries">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6"
                v-for="(country) in countries" :key="country.cca2">
          <el-card>
            <div class="b-country">
              <div class="b-country__flag" v-html="country.flag.sprite"></div>
              <!--<div class="b-country__flag" v-html="country.flag.svg"></div>-->
              <div style="padding: 0px;">
                <span>{{ country.name.common }}</span>
                <div class="bottom clearfix">

                  <el-button type="text" class="button">See details</el-button>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
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
      countries: null,
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
