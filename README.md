### 通用的方法库

1. 根据身份证号获取相关信息（生日、性别、年龄）
```js
import { getInfoByID } from 'mytheart'
getInfoByID('4111211997xxxxxx11');
// { 
//   birth: "1997-xx-xx"
//   sex: "男"
//   age: xx
// }
```