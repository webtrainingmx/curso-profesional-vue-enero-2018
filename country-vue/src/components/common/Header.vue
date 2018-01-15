<template>
  <nav class="navbar navbar-inverse">
    <div class="container">

      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Brand</a>
      </div>

      <div class="collapse navbar-collapse" id="navbar-collapse-main">

        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">Countries</a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>
<script>
export default {
  name: 'app-header',
  data () {
    return {}
  }
}
</script>
<style>
.navbar {
  border-radius: 0;
}
</style>
