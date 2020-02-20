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

export default {
  getInfoByID,
}


