<template>
  <footer class="b-footer">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div id="logo" class="b-logo col-xs-2">
            <a href="https://webtraining.zone" target="_blank">
              <img src="/static/img/wt-white.png" alt="webtraining logo"
                   class="img-responsive">
            </a>

          </div>
          <div class="col-xs-8">
            <nav class="b-main-navigation">
              <div class="b-main-footer__container">
                <p class="b-main-footer__text">Creado con mucho entusiasmo por
                  Webtraning.Zone</p>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data () {
    return {}
  }
}
</script>
<style>
.b-footer {
  background: #18bc9c;
  min-height: 200px;
}

.b-logo {
  float: left;
  margin: 10px 0 0 -10px;
  padding: 5px 0 0 8px;
  font-size: 26px;
}

.b-main-footer__container {
  min-width: 190px;
  vertical-align: middle;
}

.b-main-footer__text {
  font-size: 16px;
  letter-spacing: 1px;
  color: #fff;
  margin: 25px 0;
}
</style>
