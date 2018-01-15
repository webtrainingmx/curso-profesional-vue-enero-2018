<template>
  <div class="b-countries-finder">
    <h1 class="b-title">Let's find an amazing country</h1>
    <form @submit.prevent="createTask" class="well">
      <div class="form-group">
        <label for="countryName">Country name</label>
        <input type="text" class="form-control" id="countryName"
               placeholder="Country name" v-model="countryName"
               required>
      </div>
      <button type="submit" class="btn btn-primary"
              :disabled="countryName.length < 3">Search
      </button>
    </form>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'app-countries-finder',
  data () {
    return {
      countryName: '',
      countries: []
    }
  },
  methods: {
    getCountries: function () {
      axios.get('http://127.0.0.1:8000/countries').then((response) => {
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
</style>
