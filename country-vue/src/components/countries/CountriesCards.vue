<template>
  <div class="b-countries" v-if="countries">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6"
              v-for="(country) in countries" :key="country.cca2">
        <el-card>
          <div class="b-country">
            <div class="b-country__flag-container">
              <div class="b-country__flag">
                <span class="flag"
                      :class="country.cca2 | createFlagCSSClass"></span>
              </div>
            </div>
            <div class="b-country__text-container">
              <span>{{ country.name.common }}</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button"
                           @click="openDetails(country)">See
                  details
                </el-button>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'app-countries-cards',
  props: ['countries'],
  data () {
    return {}
  },
  methods: {
    openDetails (country) {
      console.log('Router navigate', country.name.common)
      this.$router.push({
        name: 'CountryDetail',
        params: {countryName: country.name.common}
      })
    }
  },
  filters: {
    createFlagCSSClass (value) {
      if (!value) return ''
      return 'flag-' + value.toLowerCase()
    }
  }
}
</script>
<style>
.b-country__flag-container {
  display: inline-block;
  float: left;
  margin-right: 10px;
}

.b-country__flag {
  margin-top: -10px;
}

.b-country__text-container {
  margin-top: 10px;
}
</style>
