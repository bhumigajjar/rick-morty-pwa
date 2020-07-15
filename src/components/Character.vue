<template>
<div class="hero-body">
  <div class="container">
    <h1 class="title"> Card of Character</h1>
    <div class="column has-text-right">
      <a class="button" @click="$router.go(-1)">Go Back</a>
    </div>
    <div class="columns spacific-data">
      <div class="column is-8">
          <div class="box" :id="character.id">
              <div class="media">
                <div class="media-left">
                  <figure class="image">
                    <img :src="character.image" class="img-fluid" alt="avatar">
                  </figure>
                </div>
                <div class="media-content has-text-left">
                  <div class="content">
                    <p><strong>Name : {{ character.name }}</strong></p>
                    <p><strong>ID : </strong>{{ character.id }}</p>
                    <p><strong>Status :</strong> {{ character.status }}</p>
                    <p><strong>Gender :</strong> {{ character.gender }}</p>
                    <p><strong>Species :</strong> {{ character.species }}</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: 'character',
  data() {
    return {
      url: 'https://rickandmortyapi.com/api',
      id: window.location.pathname,
      character: {},
      originId: 1,
    };
  },
  created() {
    this.fetchCharacter();
  },
  methods: {
    fetchCharacter() {
      fetch(this.url + this.id)
        .then(res => res.json())
        .then((res) => {
          this.character = res;
          this.originId = /\d+$/.exec(res.origin.url);
        })
        .catch(err => console.log(err));
    },
  },
};
</script>
<style lang="scss" scoped>
@media (max-width:767px){
  .spacific-data{
    .box{
      .media,.media-left,.media-content{
        display: block;
        width: 100%;
      }
      .media-content{
        text-align: center!important;
      }
    }
  }
}
</style>