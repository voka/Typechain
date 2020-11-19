"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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



 */
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
console.log(Block.calculateBlockHash(0, "122343215413541", 12341, "Hello"));
const genesisBlock = new Block(0, "122343215413541", "", "Hello", 12341);
let blockchain = [genesisBlock];
console.log(blockchain);
const getBlockchain = () => blockchain; //블록체인을 배열로 반환함
const getLatestBlock = () => blockchain[blockchain.length - 1]; //블록체인 길이 알기 위함
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimestamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    return newBlock;
};
// console.log(createNewBlock("hello"), createNewBlock("bye bye"));
const isBlockValid = { candidateBlock }; // candidat, prevois 블럭을 불러올 함수
//# sourceMappingURL=index.js.map