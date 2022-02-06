<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-card outlined height="400" class="pa-4 mb-4 rounded-lg">
        {{name}}

      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card outlined height="400" class="pa-4 mb-4 rounded-lg">
        {{name}}

      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  layout: 'content',
  head () {
    return {
      title: '이름',
      meta: [{ 
        hid: 'og-title', 
        property: 'og:title', 
        content: '이름' 
      }]
    }
  },
  data () {
    return {
      name:''
    }
  },
  mounted(){
    console.log(this.$route.params.name)
    this.name = this.$route.params.name
  },
  methods:{
  }
  
}
</script>