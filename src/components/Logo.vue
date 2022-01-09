<template>
  <RouterLink
    to="/"
    class="logo">
    <span>OMDbAPI</span>.COM
  </RouterLink>
</template>

<style lang="scss" scoped>
@import "~/scss/main";
.logo {
  font-family: "Oswald", sans-serif;
  font-size: 30px;
  color: $black;
  text-decoration: none;
  &:hover {
    color: $black;
  }
  span {
    color: white;
  }
}
</style>