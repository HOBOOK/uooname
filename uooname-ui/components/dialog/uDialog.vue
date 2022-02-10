<template>
  <v-dialog
    v-model="dialog"
    :persistent="persistent"
    scrollable
    :max-width="maxWidth"
    :width="width"
    :fullscreen="fullscreen"
    overlay-opacity="0.5"
    transition="slide-y-reverse-transition"
    class="u-dialog-container"
    
  >
    <template
      v-slot:activator="{on, attrs}"
    >
      <slot name="button">
      </slot>
      
    </template>
    <v-card class="u-dialog">
      <v-card-title justify="center" align="center">
        <v-spacer/>
        {{title}}
        <v-spacer/>
        <v-avatar size="28" class="u-dialog-close" v-if="persistent">
          <v-icon class="font-weight-bold" @click="clickNo" style="font-size:16px;">mdi-close</v-icon>
        </v-avatar>
      </v-card-title>
      <v-card-text color="white" flat :style="'height:' + height +'px !important; padding:' + padding + ';overflow-y:' + overflow + ';background:' + background" style="min-height:120px;">
        <slot name="content">
        </slot>
      </v-card-text>
      <v-card-actions v-if="!$slots.actionButton">
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          @click="clickYes"
          rounded
          small
          outlined
          :ripple="false"
        >
          <span>{{clickYesBtn}}</span>
        </v-btn>
        <v-btn
          text
          rounded
          small
          :ripple="false"
          @click="clickNo"
        >
          <span>닫기</span>
        </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-spacer/>
        <slot name="actionButton"> </slot>
      </v-card-actions>
      
      
    </v-card>
  </v-dialog>
</template>

<script>

  export default {
    name: 'uDialog',
    props: {
      alert:{
        type:Boolean,
        default:false
      },
      persistent:{
        type:Boolean,
        default:false
      },
      borderBottom:{
        type:Number
      },
      borderRadius:{
        type:Number
      },
      color:{
        type:String
      },
      colorHeader:{
        type:String
      },
      confirm:{
        type:Boolean,
        default:true
      },
      fullscreen:{
        type:Boolean,
        default:false
      },
      disabled:{
        type: Boolean,
        default: false
      },
      icon:{
        type: String,
        default: ''
      },
      title:{
        type: String,
        default: '새창'
      },
      width:{
        type: Number,
        default: 500
      },
      height:{
        type: Number,
        default: 120
      },
      maxWidth:{
        type: Number,
        default: 720
      },
      padding:{
        type:Number
      },
      overflow:{
        type:String,
        default:'auto'
      },
      background:{
        type:String
      },
      backgroundHeader:{
        type:String
      },
      clickYesBtn:{
        type:String,
        default:'확인'
      }
    },
    data: () => ({
      dialog: false,
      format:'YYYY-MM-DD'
    }),
    watch:{
      dialog() {
        if(this.dialog)
          this.init()
      }
    },
    computed: {
    },
    methods:{
      init(){
      },
      open() {
        this.dialog = true
      },
      close(){
        this.dialog = false
      },
      clickYes(){
        //this.dialog = false
        this.$emit('click-yes')
        this.close()
      },
      select (index) {
        this.selectedIndex = index
      },
      clickNo(){
        this.$emit('click-no')
        this.close()
      }
    },
  }
</script>
<style lang="scss">
  .theme--dark{
    .u-dialog{
      border:1px solid #2a2a2a !important;
    }
  }
  .theme--light{
    .u-dialog{
      border:1px solid #ccc !important;
    }
  }
  .u-dialog{
    overflow-x:hidden;
    border-radius: 10px !important;
    .v-card__title{
      padding:6px 12px !important;
      font-size:14px !important;
    }
  }

  .u-dialog-close{
    transition: all 0.2s ease-in-out;
    opacity: 0.7;
    position: absolute;
    right:12px;
    &:hover{
      transform:scale(1.1) !important;
      opacity: 1.0;
        .theme--dark{
          background-color:#18191B !important;
        }
        .theme--light{
          background-color:#ccc !important;
        }
        font-weight: bold !important;
      }
  }
</style>