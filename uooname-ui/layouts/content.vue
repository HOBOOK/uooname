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
      <v-container v-if="loading" style="min-height:calc(100vh - 48px);">
        <v-row no-gutters align="center" justify="center" style="height:100%;">
          <v-progress-circular indeterminate color="primary" :size="32" width="4"/>
          <span class="ml-4">이름 검색 중...</span>
        </v-row>
      </v-container>
      <v-container v-else style="min-height:calc(100vh - 48px);">
        <v-row no-gutters class="mt-16">
          <v-col class="mx-2 mb-4 px-2 col-md-auto col-12">
            <v-card class="rounded-lg" elevation="0" width="240" outlined
              style="position:sticky !important; top:60px;"
            >
              <v-navigation-drawer 
                permanent
                color="transparent"
                class="content-layout-nav"
              >
                <v-list 
                  nav
                  dense
                  color="transparent"
                  elevation="0"
                  class="rounded-lg ma-0 pa-0"
                >
                  <v-list-item-group
                    v-model="selectedMenu"
                  >
                    <v-list-item
                      :ripple="false"
                      class="my-0 py-2 px-6"
                      @click="$router.push('/names/' + $route.params.name)"
                    >
                      <div :class="selectedMenu === 0 ? 'active' :''" class="content-layout-nav-selector"></div>
                      <v-icon small left>mdi-smart-card-outline</v-icon>
                      <v-list-item-title class="ml-2">이름 정보</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      :ripple="false"
                      class="my-0 py-2 px-6"
                      @click="$router.push('/names/' + $route.params.name + '/comment')"
                    >
                      <div :class="selectedMenu === 1 ? 'active' :''" class="content-layout-nav-selector"></div>
                      <v-icon small left>mdi-comment-outline</v-icon>
                      <v-list-item-title class="ml-2">코멘트</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      :ripple="false"
                      class="my-0 py-2 px-6"
                      @click="$router.push('/names/' + $route.params.name + '/analysis')"
                    >
                      <div :class="selectedMenu === 2 ? 'active' :''" class="content-layout-nav-selector"></div>
                      <v-icon small left>mdi-chart-bell-curve</v-icon>
                      <v-list-item-title class="ml-2">분석</v-list-item-title>
                    </v-list-item>

                  </v-list-item-group>
                </v-list>
              </v-navigation-drawer>
            </v-card>
          </v-col>
          <v-col class="mx-2 px-2">
              <v-card class="rounded-lg" outlined
                style="position:sticky !important; top:60px; z-index:10;"
                v-if="$route.params.name"
              >
                <v-card-title v-text="$route.params.name"></v-card-title>
              </v-card>
            <Nuxt class="mt-4"/>
          </v-col>
        </v-row>
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

   

    
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      selectedMenu:0,
      rightDrawer: false,
      title: 'Uoo name'
    }
  },
  created() {
    this.loading = true
  },
  mounted() {
    this.loading = true
    setTimeout(()=>{
      this.loading = false
    }, 500)
  }
}
</script>

<style lang="scss">
.content-layout-nav{
  .content-layout-nav-selector{
    position:absolute; 
    left:0; 
    width:4px; 
    height:calc(100% - 2px); 
    background-color:transparent;
    opacity: 0.7;
    border-radius: 4px;
    transition: 0.1s all ease-in-out;
    &.active{
      background-color:#6347e2;
    }
  }
  .v-navigation-drawer__border {
    display: none !important;
  }
  .v-item--active{
    &::before{
      background-color: rgba(128,128,128,0.5) !important;
    }
  }
}
</style>
