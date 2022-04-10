<template>
  <v-row no-gutters v-if="nameInfo !== null">
    <v-col cols="12">
      <v-card outlined height="400" class="mb-4 rounded-lg">
        <v-card-title>분석</v-card-title>
        <v-card-text>
          {{name}}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  layout: 'content',
  data () {
    return {
      nameInfo:null
    }
  },
  mounted(){
    this.nameInfo = this.$store.state.nameInfo
  },
  methods:{
  }
  
}
</script>