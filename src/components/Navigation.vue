<style lang="scss">
@import "./src/scss/variables";
@import "./src/scss/media-queries";
.nav{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: $c-white;
  display: flex;
  z-index: 10;
  @include tablet-min{
    display: block;
    width: 95px;
    height: 100vh;
  }
  &__list{
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
    width: 100%;
    position: fixed;
    left: 0;
    top: 50px;
    background: rgba($c-white, 0.98);
    border-top: 1px solid $c-light;
    @include mobile-only{
      font-size: 0;
      opacity: 0;
      visibility: hidden;
      height: calc(100vh - 50px);
      transition: all 0.5s ease;
      text-align: left;
      &--active{
        opacity: 1;
        visibility: visible;
      }
    }
    @include tablet-min{
      display: flex;
      background: transparent;
      position: relative;
      display: block;
      width: 100%;
      border-top: 0;
      top: 0;
    }
  }
  &__item{
    @include mobile-only{
      display: inline-block;
      text-align: center;
      width: 50%;
      border-bottom: 1px solid $c-light;
      &:nth-child(odd){
        border-right: 1px solid $c-light;
      }
    }
    @include tablet-min{
      width: 100%;
      border-bottom: 1px solid $c-light;
      &--profile{
        position: fixed;
        right: 0;
        top: 0;
        width: 75px;
        height: 75px;
        border-bottom: 0;
        border-left: 1px solid $c-light;
      }
    }
  }
  &__link{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    font-size: 7px;
    font-weight: 300;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: rgba($c-dark, 0.7);
    transition: color 0.5s ease, background 0.5s ease;
    position: relative;
    cursor: pointer;
    @include mobile-only{
      font-size: 10px;
      padding: 20px 0;
    }
    @include tablet-min{
      width: 95px;
      height: 95px;
      font-size: 11px;
      &--profile{
        width: 75px;
        height: 75px;
        background: $c-white;
      }
    }
    &-icon{
      width: 20px;
      height: 20px;
      margin-bottom: 3px;
      fill: rgba($c-dark, 0.7);
      transition: fill 0.5s ease;
      @include tablet-min{
        width: 20px;
        height: 20px;
        margin-bottom: 5px;
      }
    }
    &-title{
      display: block;
      width: 100%;
    }
    &:hover{
      color: $c-dark;
    }
    &:hover &-icon{
      fill: $c-dark;
    }
    &.is-active{
      color: $c-dark;
      background: #efefef;
    }
    &.is-active &-icon{
      fill: $c-dark;
    }
  }
}
</style>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item" v-for="item in listTypes" v-if="item.isCategory">
        <router-link class="nav__link" :to="{name: 'home-category', params: {category: item.query}}">
          <div class="nav__link-wrap">
            <svg class="nav__link-icon">
              <use :xlink:href="'#icon_' + item.query"></use>
            </svg>
            <span class="nav__link-title" style="color:#01d277"><strong>{{ item.shortTitle }}</strong></span>
          </div>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import constants from '../constants.js'

export default {
  data(){
    return {
      listTypes: constants.listTypes,
    }
  }
}
</script>