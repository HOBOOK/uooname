<template>
  <v-row no-gutters v-if="keywordInfo !== null">
    <v-col cols="12">
      <v-card outlined height="400" class="mb-4 rounded-lg">
        <v-card-title>
          <v-row no-gutters align="center">
            {{$t('keyword_info')}}
            <v-spacer/>
            <span class="grey--text text-caption"> 22.03.21 updated </span>
          </v-row>
        </v-card-title>
        <v-card-text>
          {{keywordInfo.name}}
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
      keywordInfo:null
    }
  },
  mounted(){
    this.keywordInfo = this.$store.state.keywordInfo
  },
  methods:{
  }
  
}
</script>