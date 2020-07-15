<template>
<div class="hero is-dark">
  <div class="hero-foot">
    <div class="container">
      <div class="column footer-data">
         <p>
         PWA-Vue project by <a href="https://github.com/bhumigajjar">Bgajjar</a> - <a href="https://rickandmortyapi.com/">Used API - Rick And Morty</a>
        </p>
          <p>
            
          </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'bottomfooter',
};
</script>
<style lang="scss" scoped>
.footer-data{
  p{
    font-size: 15px;
    color: #fff;
    strong{
      color: #fff;
    }
    a{
      color: #fff;
      text-decoration: underline;
    }
  }
}
</style>
