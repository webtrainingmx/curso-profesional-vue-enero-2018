<template>
  <div id="app">
    <app-header></app-header>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <router-view/>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/common/Header'
import Footer from './components/common/Footer'

export default {
  name: 'App',
  components: {'app-header': Header, 'app-footer': Footer}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
