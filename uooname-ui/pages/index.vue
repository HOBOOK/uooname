<template>
  <v-row justify="center" class="main-container">
    <div 
      class="main-title"
    >
      <div class="main-title-content">
        <v-row no-gutters justify="center" align="center" class="my-2py-2">
            <v-col cols="12" align="center" class="my-2">
                <h1>내 이름의 누군가에 대한 궁금증</h1>
            </v-col>
            <v-col cols="12" align="center">
                <p style="opacity:0.8;">내 이름을 검색해보세요.</p>
            </v-col>
        </v-row>
        <v-row no-gutters justify="center" align="center" class="my-4">
          <v-text-field
              v-model="keyword"
              append-icon="mdi-magnify"
              label="이름을 검색해보세요."
              hide-details
              solo
              style="max-width:600px; box-shadow:none;"
              @click:append="search"
          />
        </v-row>
      </div>
    </div>
    <div class="main-content">
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
    search() {
      console.log(this.keyword)
      this.$router.push('/names/' + this.keyword)
    },
  }
  
}
</script>