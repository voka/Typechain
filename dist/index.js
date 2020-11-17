"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "OJS", age = 24, gender = "male";
// const sayHi = (name:string, age:number, gender:string) : void => {
//     console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
// }
// sayHi(name, age, gender);
//sayHi(name, age);  왼쪽은 예상하는 인자가 3갠데 2개만 넣었으므로
//컴파일 조차 하지 못하게 한다.( ?가 없는 상황에서만)
//sayHi(name, age);
//gender? 이므로 이 인자는 선택적인 거라고 알 수 있다.
const sayHi = (name, age, gender) => {
    return (`Hello ${name}, you are ${age}, you are a ${gender}`);
};
sayHi(name, age, gender); //만약 위에서 지정한 타입과 다를경우
//# sourceMappingURL=index.js.map