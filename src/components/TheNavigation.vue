<script lang="ts" setup></script>

<template lang="pug">
nav( id="main-nav" class="flex flex-column px-2 py-4 bg-primary shadow-2 z-1" )
  ul( class="list-none p-0" )
    li
      RouterLink( to="/" )
        PButton( class="p-button-text" ) Home
    li
      RouterLink( :to="{name:'calendar'}" )
        PButton( class="p-button-text" ) Calendar
</template>

<style lang="scss">
@import "primeflex/primeflex.scss";
#main-nav {
  height: 100vh;
  width: 7rem;
  a {
    text-decoration: none;
    display: inline-block;
    width: 100%;
    button {
      color: white;
    }
    &.router-link-exact-active {
      button {
        @include styleclass("text-yellow-400");
      }
    }
  }
}
</style>
