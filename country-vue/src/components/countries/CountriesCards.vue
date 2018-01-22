<template>
  <div class="b-countries" v-if="countries">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6"
              v-for="(country) in countries" :key="country.cca2">
        <el-card>
          <div class="b-country">
            <div class="b-contry__flag-container">

              <div class="b-country__flag">
                <span class="flag" :class="country.cca2 | createFlagCSSClass"></span>

              </div>
            </div>

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
</template>
<script>
export default {
  name: 'app-countries-cards',
  props: ['countries'],
  data () {
    return {}
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
</style>
