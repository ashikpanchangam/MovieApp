<style lang="scss">
@import "./src/scss/variables";
@import "./src/scss/media-queries";
.home{
  &__header{
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    position: relative;
    background-color: $c-dark;
    @include tablet-min{
      height: 384px;
    }
  .movies__list{
    .movies__item:last-child{
      display: none;
      @include desktop-min{
        display: block;
      }
    }
  }
}
}
</style>

<template>
  <section class="home">
    <movies-list v-for="item in listTypes" v-if="item.isCategory" :type="'component'" :mode="'collection'" :category="item.query" :shortList="true"></movies-list>
  </section>
</template>

<script>
import constants from '../constants.js'
import MoviesList from './MoviesList.vue'

export default {
  components: { MoviesList },
  data(){
    return {
      listTypes: constants.listTypes
    }
  },
  created(){
    document.title = 'Movie App';
    constants.backTitle = document.title;
  }
}
</script>