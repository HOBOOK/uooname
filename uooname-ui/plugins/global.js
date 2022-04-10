import Vue from 'vue'
import langDictionary from '../static/lang-dictionary.json'

// 공통(페이지 관련)
const common = {
  search(router, keyword, callback) {
    console.log(keyword)
    if(!keyword || keyword === '') return
    router.push('/search/' + keyword)
    if(callback && typeof callback === 'function') {
      callback()
    }
  },
  
}

// 시간 관련 함수
const time = {
    getTimeFromNow(date) {
        const now = new Date();
        now.setHours(now.getHours() - 9);
        const today = now
        const timeValue = new Date(date);

        const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
        if (betweenTime < 1) return '방금전';
        if (betweenTime < 60) {
            return `${betweenTime}분전`;
        }

        const betweenTimeHour = Math.floor(betweenTime / 60);
        if (betweenTimeHour < 24) {
            return `${betweenTimeHour}시간전`;
        }

        const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
        if (betweenTimeDay < 365) {
            return `${betweenTimeDay}일전`;
        }

        return `${Math.floor(betweenTimeDay / 365)}년전`;
    },

    getElapsedTimeFromSecond(second){
      let min = Math.floor(second/60);
      let hour = Math.floor(min/60);
      let sec = second%60;
      min = min%60;

      let th = hour;
      let tm = min;
      let ts = sec;

      if(th<10){
        th = "0" + hour;
      }
      if(tm < 10){
        tm = "0" + min;
      }
      if(ts < 10){
        ts = "0" + sec;
      }

      return  th + ":" + tm + ":" + ts
    },
    dateToFormatKorean (date) {
      if(typeof date !== 'string') {
        return date[0] + '년 ' + date[1] + '월 ' + date[2] +'일'
      } else {
        let dateString = date.substring(0,10)
        return dateString.substring(0,4) + '년 ' + dateString.substring(5,7) + '월 ' + dateString.substring(8) +'일'
      }
      
    },
    dateTimeToFormatKorean (date) {
      if(typeof date !== 'string') {
        date = this.convertDateArrayToString(date)
      }
      var week = ['일', '월', '화', '수', '목', '금', '토'];
      var dayOfWeek = week[new Date(date).getDay()];
      return date.substring(0,4) + '년 ' + date.substring(5,7) + '월 ' + date.substring(8,10) +'일 ' + dayOfWeek + '요일 ' + date.substring(11,19)
    },
    dateShotToFormatKorean (date) {
      if(typeof date !== 'string') {
        return date[0] + '.' + date[1] + '.' + date[2]
      } else {
        let dateString = date.substring(0,10)
        return dateString.substring(0,4) + '.' + dateString.substring(5,7) + '.' + dateString.substring(8)
      }
    },
    simpleFormat(date){
      let data = new Date(date)
      return data.toLocaleDateString();
    },
    convertDateArrayToString(dateArray) {
      try{
        let date = dateArray[0] + "-" + this.addTimeBlank(dateArray[1]) + "-" + this.addTimeBlank(dateArray[2]) + "T" + this.addTimeBlank(dateArray[3])+":" + this.addTimeBlank(dateArray[4]) + ":" + this.addTimeBlank(dateArray[5])
        this.addTimeBlank(dateArray[3])
        return date
      }catch{
        return new Date().toLocaleTimeString()
      }
    },
    addTimeBlank(time) {
      return time.toString().length === 1 ? '0' + time : time.toString()
    }
}

// 유틸 함수
const utils = {
  // 소수점2자리까지의 바이트 단위로 변환시키는 함수
  convertByteToString(bytes, decimals = 2) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  },

  btoa(content) {
    return window.btoa(content)
  },

  // 클립보드 저장 함수
  copy(val) {
    if(val) {
      const t = document.createElement("textarea");
      document.body.appendChild(t);
      t.value = val;
      t.select();
      document.execCommand('copy');
      document.body.removeChild(t);
    }
  },
}

// 전역 변수
const properties = {
  getImageCdnUrl(key, w, h, q) {
    let url = 'https://d2q9yzkd471o7j.cloudfront.net/' + key + '?w=' + w + '&h=' + h + '&q=' + q 
    return url
  }
}

// 필터 함수
const regular = {
  basic(data){
    let reg=/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
    return reg.test(data)
  },
  blankPatten(data){
    let blank_patten = /[\s]/g;
    return blank_patten.test(data)
  },
  passwordPatten(data){
    //영문,숫자,특수문자(!@$%^&* 만 허용) 9 이상
    let reg= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{9,}$/g
    return reg.test(data)
  },
  emailPatten(data){
    let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return reg.test(data)
  },
  name(data){
    let reg =  /^[ㄱ-ㅎ가-힣a-zA-Z]+$/
    return reg.test(data)
  },
  number(data){
    let reg = /^[0-9]/
    return reg.test(data)
  }
}
  
// 언어 함수
const lang = {
  
  getString(key){
    let la = navigator.language || navigator.userLanguage
    if(la.indexOf('en')!==-1) {
      return  langDictionary['en'][key]
    } else {
      return  langDictionary['ko'][key]
    }
  }
}



Vue.prototype.$common = common;
Vue.prototype.$time = time;
Vue.prototype.$utils = utils;
Vue.prototype.$regular = regular;
Vue.prototype.$lang = lang;

export default ({app}, inject) => {
  inject('common', common);
  inject('time', time);
  inject('utils', utils);
  inject('regular', regular);
  inject('lang', lang);
}
