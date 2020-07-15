<template>
  <div class="hero-body">
      <div class="container">
        <h1 class="title"> All the Characters</h1>
        <div class="column has-text-right">
          <a class="button" @click="$router.go(-1)">Go Back</a>
        </div>
            <div class="columns is-multiline has-text-left">
              <div class="column has-air is-4-widescreen is-4-tablet all-char-data" v-for="item of items" :key="item.id">
                    <div class="columns">
                    <div class="column is-5 img-data">
                      <img v-bind:src="item.image" class="char_img" alt="character-img"/>
                    </div>
                    <div class="column card-info">
                        <strong><router-link :to="{ path: `/character/${item.id}` }" class="name">
                                <span class="is-light">{{ item.name }}</span>
                        </router-link>
                        </strong>
                        <span class="status">
                            <span class="status__icon_dead" v-if="item.status === 'Dead'"></span>
                            <span class="status__icon_alive" v-if="item.status === 'Alive'"></span>
                          <p>{{ item.status }} - {{ item.species }}</p>
                        </span>
                        <p>{{ item.gender }}</p>
                        <p>{{ item.species }}</p>
                    </div>    
                    </div>      
                </div>      
              </div>
  </div>
    <Pagination
      :page="page"
      :info="info"
      @fetchItems="fetchItems"
      @updatePage="updatePage"/>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'characters',
  components: { Pagination },
  data() {
    return {
      items: [],
      url: 'https://rickandmortyapi.com/api/character/?page=',
      page: 1,
      info: {},
    };
  },
  created() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      fetch(this.url + this.page)
        .then(res => res.json())
        .then((res) => {
          this.items = res.results;
          this.info = res.info;
        })
        // eslint-disable-next-line
        .catch(err => console.log(err));
    },
    updatePage(value) {
      this.page = value;
    },
  },
};
</script>

<style lang="scss" scoped>
  .all-char-data .columns{
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
</style>>
