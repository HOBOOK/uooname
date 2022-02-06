<template>
  <v-app>
    <v-app-bar
      fixed
      app
      color="white"
      dense
      elevation="0"
      style="border-bottom:1px solid #eee !important;"
    > 
      <v-container class="py-0 px-2">
        <v-row align="center" no-gutters style="height:48px;">
          <div @click="$router.push('/')" style="cursor:pointer;" class="d-flex align-center">
            <uooNameLogo @click="$router.push('/')" style="cursor:pointer;"/>
          </div>
          <v-spacer />
          <v-btn
            icon
            @click.stop="rightDrawer = !rightDrawer"
            class="mobile-inline"
            small
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </v-app-bar>
    
    <v-main>
      <v-container style="min-height:calc(100vh - 48px);">
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer
      app
      absolute
      color="transparent"
    >
      <v-container>
        <v-row class="my-2"  align="center" no-gutters>
          <ul>
            <li><v-icon>mdi-facebook</v-icon></li>
            <li><v-icon>mdi-facebook</v-icon></li>
            <li><v-icon>mdi-facebook</v-icon></li>
          </ul>
        </v-row>
        <v-row class="my-2 text-caption" style="opacity:0.5" align="center">
          Copyright © 박경호 {{ new Date().getFullYear() }}. All rights reserved.
        </v-row>
      </v-container>
    </v-footer>

    <v-navigation-drawer
      v-model="rightDrawer"
      :right="true"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      rightDrawer: false,
      title: 'Uoo name'
    }
  },
  mounted() {
  }
}
</script>
