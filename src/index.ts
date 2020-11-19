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
import * as CryptoJS from "crypto-js";
import { time } from "console";

class Block{
    public index :number;
    public hash :string;
    public previousHash :string;
    public data : string;
    public timestamp :number;

    static calculateBlockHash = (
        index:number, 
        previousHash:string, 
        timestamp:number, 
        data:string
    ) : string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

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
console.log(Block.calculateBlockHash(0,"122343215413541",12341,"Hello"));

const genesisBlock:Block = new Block(0,"122343215413541","","Hello",12341);

let blockchain: Block[] = [genesisBlock];

console.log(blockchain)

const getBlockchain = () : Block[] => blockchain;//블록체인을 배열로 반환함

const getLatestBlock = () : Block => blockchain[blockchain.length - 1];//블록체인 길이 알기 위함

const getNewTimeStamp = () : number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data:string) : Block => {
    const previousBlock : Block = getLatestBlock();
    const newIndex : number = previousBlock.index + 1;
    const newTimestamp : number = getNewTimeStamp();
    const newHash : string = Block.calculateBlockHash(
        newIndex,
        previousBlock.hash,
        newTimestamp,
        data
    );
    const newBlock : Block = new Block(
        newIndex,
        newHash,
        previousBlock.hash,
        data,
        newTimestamp
    );
    return newBlock;
};
// console.log(createNewBlock("hello"), createNewBlock("bye bye"));

const isBlockValid = {candidateBlock}; // candidat, prevois 블럭을 불러올 함수
//블록의 구조 판단용

//!! 블로체인의 기반은 블록들이 자신의 이 바로 블록으로 





export{};