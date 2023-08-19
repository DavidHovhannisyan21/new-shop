<template>
  <v-app-bar app color="#385348" dark>
    <v-btn icon>
        <v-icon>mdi-maginfy</v-icon>
    </v-btn>
    <v-divider vertical class="ml-1 mr-3"></v-divider>
    <v-btn icon>
        <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-toolbat-title>
        <span class="caption">Select</span><br>Category
    </v-toolbat-title>
    <v-divider vertical class="ml-5"></v-divider>
    <div style="position:absolute; margin-left:auto; margin-right: auto; left:0; right: 0; text-align: center;">
        <h4>Virtual Shop for testing</h4>
    </div>
    <v-spacer></v-spacer>
    <v-divider vertical class=""></v-divider>
    <v-btn icon class="mx-1">
      <v-icon>mdi-account-outline</v-icon>
    </v-btn>
    <v-divider vertical class=""></v-divider>
    <v-btn icon class="mx-1">
      <v-icon>mdi-heart-outline</v-icon>
    </v-btn>
    <v-divider vertical class=""></v-divider>
    <v-btn icon class="mx-1">
          <v-icon>mdi-cart-outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
    name:'Nav-bar',
}
</script>

<style>
.v-toolbat__title{
    font-size:1rem !important
}
.v-badge__badge{
    font-size: 10px !important;
    height: 18px !important;
    min-width: 18px !important;
}
</style>