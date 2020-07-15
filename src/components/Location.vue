<template>
<div class="hero-body">
  <div class="container ">
    <h2 class="title has-text-centered">Find out Characters here!</h2>
    <div class="column has-text-right">
      <a class="button" @click="$router.go(-1)">Go Back</a>
    </div>
    <div class="columns is-multiline has-text-left">
     <div class="column has-air is-4-widescreen is-4-tablet all-char-data" v-for="resident in residents" :key="resident.id">
          <div class="columns">
          <div class="column is-5 img-data">
            <img v-bind:src="resident.image" class="char_img" alt="character-img"/>
          </div>
          <div class="column card-info">
              <strong><router-link :to="{ path: `/character/${resident.id}` }" class="name">
                      <span class="is-light">{{ resident.name }}</span>
              </router-link>
              </strong>
              <span class="status">
                  <span class="status__icon_dead" v-if="resident.status === 'Dead'"></span>
                  <span class="status__icon_alive" v-if="resident.status === 'Alive'"></span>
                <p>{{ resident.status }} - {{ resident.species }}</p>
              </span>
          </div>    
          </div>      
      </div>      
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'location',
  data() {
    return {
      url: 'https://rickandmortyapi.com/api',
      id: window.location.pathname,
      location: {},
      residents: [],
    };
  },
  created() {
    this.fetchLocation();
  },
  methods: {
    fetchLocation() {
      
      fetch(this.url + this.id)
        .then(res => res.json())
        .then((res) => {
          this.location = res;
          res.residents.forEach((element) => {
            const extractCharacter = /\/\bcharacter\b\/\d+$/.exec(element);
            this.fetchResident(extractCharacter);
          });
        })
        // eslint-disable-next-line
        .catch(err => console.log(err));
    },
    fetchResident(characterPath) {
      fetch(this.url + characterPath)
        .then(res => res.json())
        .then(res => this.residents.push(res),)
        // eslint-disable-next-line
        .catch(err => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
.all-char-data{
  .columns{
    background-color: #fff;
    margin: 2px;
    border-radius: 5px;
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    @media (max-width: 800px){
        .img-data{
          text-align: center;
          img{
            width: 100%;
          }
        }
    }
    .card-info{
      .status{
        display: flex;
        align-items: center;
        .status__icon_alive{
          height: 0.5rem;
          width: 0.5rem;
          margin-right: 0.375rem;
          background: rgb(85, 204, 68);
          border-radius: 50%;
        }
        .status__icon_dead{
          height: 0.5rem;
          width: 0.5rem;
          margin-right: 0.375rem;
          background: rgb(214, 61, 46);
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
