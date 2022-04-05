<template>
  <v-row justify="center" class="main-container">
    <div 
      class="main-title"
    >
      <div class="main-title-content">
        <v-row no-gutters justify="center" align="center" class="my-2 py-2">
            <v-col cols="12" align="center" class="my-2">
                <h1>{{$t('index_title')}}</h1>
            </v-col>
            <v-col cols="12" align="center">
                <p style="opacity:0.8;">{{$t('index_subtitle')}}</p>
            </v-col>
        </v-row>
        <v-row no-gutters justify="center" align="center" class="my-4">
          <v-text-field
              rounded
              v-model="keyword"
              append-icon="mdi-magnify"
              :label="$t('index_search_label')"
              hide-details
              solo
              flat
              color="primary"
              style="max-width:600px; box-shadow:none !important;"
              @click:append="$common.search($router,keyword, () => {keyword = ''})"
              @keydown.enter.prevent="$common.search($router,keyword, () => {keyword = ''})"
          />
        </v-row>
      </div>
    </div>
    <div class="main-content">
      <v-row no-gutters>
        <v-col>
          <v-card elevation="0" color="#f8f8f9" outlined min-width="320" height="320" class="pa-2 ma-2">
            <v-card-title>실시간 코멘트</v-card-title>
            <v-card-text>
              dd
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md="auto">
          <v-card elevation="0" color="#f8f8f9" outlined min-width="320" height="320" class="pa-2 ma-2">
            <v-card-title>실시간 검색 이름</v-card-title>
            <v-card-text>
              dd
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row no-gutters class="adverties-banner my-16" align="center" justify="center">
        <v-card width="720" height="160" color="#f8f8f9" elevation="0">
          advertiesment
        </v-card>
      </v-row>
    </div>
  </v-row>
</template>
<script>
export default {
  head () {
    return {
      title: '메인',
      meta: [{ 
        hid: 'og-title', 
        property: 'og:title', 
        content: '메인' 
      }]
    }
  },
  data () {
    return {
      loading:true,
      keyword:''
    }
  },
  methods:{
  }
  
}
</script>