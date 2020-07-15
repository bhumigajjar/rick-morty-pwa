<template>
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <div class="py-5 my-3 text-center">
        <h1 class="title has-text-danger">Oops!</h1>
        <h2 class="subtitle has-text-danger">404 not found</h2>
        <p class="subtitle">But here you found  
        </p>
        <div class="card">
          <div class="card-content">
            <strong>
              <router-link :to="{ path: `/character/${character.id}` }">
              {{character.name}}
              </router-link>
            </strong>
          </div> 
          <div class="card-image">
            <figure class="image">
              <img :src="character.image" :alt="character.name"/>
            </figure>
          </div>       
        </div>
        <div class="mt-2 mb-2">
          <router-link :to="{ name: 'home' }" class="button">
            Return Back to Home
          </router-link>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Error404',
  data() {
    return {
      url: 'https://rickandmortyapi.com/api/character/',
      character: {},
      min: 1,
      max: 494,
    };
  },
  created() {
    this.fetchCharacterRandom();
  },
  methods: {
    fetchCharacterRandom() {
      const id = Math.floor(Math.random() * (this.max - this.min)) + this.min;
      fetch(this.url + id)
        .then(res => res.json())
        .then((res) => { this.character = res; })
        // eslint-disable-next-line
        .catch(err => console.log(err));
    },
  },
};
</script>
