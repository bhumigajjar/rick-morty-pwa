<template>
    <div class="hero-body">
      <div class="container">
          <h1 class="title"> Locations List </h1>
          <div v-for="item in location.results" :key="item.id" class="location-data"> 
          <router-link
            title="List of characters"
            :key="$route.fullPath"
            class="location-name column"
            :to="{ path: `/location/${item.id}` }">
            <h4 class="subtitle">{{item.name}}</h4>
         </router-link>
        </div>
        <Pagination
          :page="page"
          :info="info"
          @fetchItems="fetchItems"
          @updatePage="updatePage"/> 
      </div>        
              
    </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Home',
  components: { Pagination },
  data() {
    return {
      items: [],
      url: 'https://rickandmortyapi.com/api',
      page: 1,
      info:{},
      location: {},
      residents_data: [],
    };
  },
  created() {
    this.fetchItems();
  },
  methods: {
    seen() {return false},
    fetchItems()
    {
      fetch(this.url+'/location/?page=' + this.page)
        .then(res => res.json())
        .then((res) => {
          this.location = res;
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
div.location-data{
  display: inline-block;
  border: 1px solid;
  margin: 10px;
  border-radius: 5px;
  &:hover{
    background-color: #363636;
    h4.subtitle{
      color:#fff;
    }
  }  
}
</style>
