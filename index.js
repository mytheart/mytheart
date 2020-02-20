// 1、根据身份证获取信息
export function getInfoByID(idNum) {
  const result = {}
  //获取出生日期
  result.birth = idNum.substring(6, 10) + "-" + idNum.substring(10, 12) + "-" + idNum.substring(12, 14);

  //获取性别
  result.sex = parseInt(idNum.substr(16, 1)) % 2 === 1 ? '男' : '女'

  //获取年龄
  const myDate = new Date();
  const month = myDate.getMonth() + 1;
  const day = myDate.getDate();
  let age = myDate.getFullYear() - idNum.substring(6, 10) - 1;
  if (idNum.substring(10, 12) < month || idNum.substring(10, 12) === month && idNum.substring(12, 14) <= day) {
    age++;
  }
  result.age = age;
  return result;
}

// 2.防抖
export function debounce(handle, delay) {
  var timer = null;
  return function () {
      var _self = this,
          _args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
          handle.apply(_self, _args)
      }, delay)
  }
}

// 3.节流
export function throttle(handler, wait) {
  var lastTime = 0;
  return function (e) {
      var nowTime = new Date().getTime();
      if (nowTime - lastTime > wait) {
          handler.apply(this, arguments);
          lastTime = nowTime;
      }
  }
}

// 35.cookie管理
export const cookie = {
  set: function (name, value, time) {
      document.cookie = name + '=' + value + '; max-age=' + time;
      return this;
  },
  remove: function (name) {
      return this.setCookie(name, '', -1);
  },
  get: function (name, callback) {
      var allCookieArr = document.cookie.split('; ');
      for (var i = 0; i < allCookieArr.length; i++) {
          var itemCookieArr = allCookieArr[i].split('=');
          if (itemCookieArr[0] === name) {
              return itemCookieArr[1]
          }
      }
      return undefined;
  }
}

export default {
  getInfoByID,
  debounce,
  throttle,
  cookie,
}


