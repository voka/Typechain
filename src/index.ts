/* interface Human{
    name: string;
    age : number;
    gender: string;
}

//class는 C++과 비슷해 보임.

class Human{
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    
}


const Lynn = new Human("Lynn", 19, "femail");


    
// const sayHi = (name:string, age:number, gender:string) : void => {
//     console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
// }

// sayHi(name, age, gender);//만약 위에서 지정한 타입과 다를경우
//이 파일은 컴파일 되지 않는다,-> 프로그래머의 실수를 줄여주는 엄청난 도구!이다.
// 함수 사용시 => void라고 나오는데 이때 void는 함수의 리턴값을 의미한다.

//sayHi(name, age);  왼쪽은 예상하는 인자가 3갠데 2개만 넣었으므로
//컴파일 조차 하지 못하게 한다.( ?가 없는 상황에서만)

//sayHi(name, age);
//gender? 이므로 이 인자는 선택적인 거라고 알 수 있다.

const sayHi = (person: Human): string => {
    return (`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
};

console.log(sayHi(Lynn));



export{}; */

import { time } from "console";

class Block{
    public index :number;
    public hash :string;
    public previousHash :string;
    public data : string;
    public timestamp :number;
    constructor(
        index :number,
        hash : string,
        previousHash:string,
        data:string,
        timestamp : number
    ){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;

    }
}

const genesisBlock:Block = new Block(0,"122343215413541","","Hello",12341);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain)
