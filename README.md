# Typechain
11.16
Learning Typescript by making a Blockchain with it

처음에 yarn 설치하려고 하는데 무슨 관리자 권한으로 power shell 실행시켜서 세팅해야 하는데 그걸 몰라서 겁나 헤맸다.

그래서 관리자 권한으로 cmd에 들어가서 npm chocolatey install 하고

choco install yarn을 했다. 설치는 다 됐는데 이제 또 문제는 yarn이 터미널에서 실행이 안됐다.

찾아보니까 관리자권한으로 cmd에 들어간 후 

1. powershell 입력
2. Set-Executionpolocy Remotesigned입력
-> 위의 것은 PowerShell의 실행 정책인데, 
기본은 Restrited(개별 명령 허용, 스크립트실행 제한)다
그래서 RemoteSigned(스크립트 실행 허용, 서명됐지만 악의적인 스크립트 실행 가능)를 쓰는것이다.

그밖에도 AllSigned(스크립트 O, 인터넷 이외의 소스에서 가져온, 서명 안된 스크립트를 실행할 위험이 있음)
Unrestricted(서명되지 않은 스크립트 실행가능)
Bypass(아무것도 차단되지 않고 경고 메시지 또한 없음.)
Undefined -> 현재 범위 실행정책 X ,
만약 모든 범위에 정책X - > Restricted 정책 실행

그리고 난뒤 작업할 폴더에 가서
1. 터미널에 yarn init 입력
2. package.json만들어지고, tsconfig.json을 만들어 
타입스크립트 -> 자바스크립트 컴파일 관련 설정
3. index.ts tsc로 실행 
나는 3번 과정도 비주얼 코드 터미널 창에서 에러가 자꾸 떠서 혹시 몰라서 윈도우 창에서 하니까 바로 되서... 시간낭비...

4. yarn start명령어로 컴파일을 하기 위해
package.json에 
"scripts": {
    "start" : "node index.js",
    "prestart" : "tsc"
}
입력

Node.js는 TypeScript를 이해하지 못하기 때문에 
ts파일을 js파일로 변환 후 node.js로 실행시키는 것 

11.17 
Type언어 -> 쓸 변수의 종류와 데이터를 설정해줘야함.
ex . string, array of num, boolean 등등
이런 이유로 typescript로 개발을 할 시,
섬세함과 더불어 어떤 행동이 일어날 지 알 수 있게 된다.

+ const name 과 같은 변수를 지정할 땐 어딘가에 
export{};를 적어줘야 한다. -> 이 파일이 모듈이라는 걸
알려주기 위함이다.

쓰려는 함수에 커서를 가져가면 어떤 타입의 인자를 받는지,
어떤 타입의 값을 반환하는지 다 알 수 있다.

yarn add tsc-watch --dev 패키지 다운 받음
그 후, src -> 소스파일을 모을 폴더, dist ->

package.json에서 scripts안을 아래와 같이 바꿔줌
"start" : "tsc-watch --onSuccess \" node dist/index.js\" "
tsconfig.json에서 
CompilerOptions 에서
"outDir": "dist",를 추가해 준다.
"include" : ["src/**/*"], (//src파일안에 있는 모든 파일을 컴파일 한다.) 로 바꾼다.

1. $ tsc-watch -onSuccess " node dist/index.js"
Cannot find module 'typescript/bin/tsc'
error Command failed with exit code 9. 와 같은 에러 나시는 분들은
npm i -D @types/node typescript ts-node 로 해결하시면 됩니다

2. tsc-watch 오류 
npm install -g typescript
npm link typescript
    
    
tsc-watch를 켜둔다음 계속 파일을 수정하면
파일이 저장될 때 마다 파일이 바꼈는지 확인하면서 
오류가 발생했는지를 지속적으로 알려준다.!!

11.18
interface -> Object를 인자로 넘겨줄때 그 안의 데이터 타입을 알려주는 기능
-> but interface는 자바스크립트로 컴파일 되지 않는다!!
그래서 interface를 JS에 넣고 싶을때 주로 쓰는 것이 Class이다.
Class는 typescript에서 대단한 기능을 한다.
-> 코드를 컨트롤 할 수 있게 해준다.

JS에서는 class 선언시 각 데이터들이 어떤 타입을 가지고 있는지, 어떤 권한을 가지고 있는지 선언할 필요 X
TS에서는 class 선언시 데이터 타입, Permission을 선언해야한다.

but TS에서 선언한 클래스의 Permission은 JS에서 신경 X

private 변수 선언시 , Human class 밖에서 호출하면 Error 발생 -> 변수, 속성 보호등이 가능하다.

Start BlockChain

TS는 우리가 하지 않으면 좋은, 더 빨리 갈 수 있는 길을 제시해 준다. 특히 오류를 찾을 때는 컴파일 자체가 되지않고, 그 이유가 console창에 떠서 확인 가능하다.

11.19

creating a block par two! 

Hash -> 모든 속성을 수학적으로 하나의 문자열로 결합한것 (아주 길다.)


(Hash is the string, that all attribute is combined mathematically. he is very very long )

터미널에 yarn add crypto-js  입력 후 import
TS는 import하는 과정이 조금 다르다. 
아래와 같이 import한다.
import * as CryptoJS from "crypto-js";

신기하게도 TS는 Class안에 static method를 만드는데,
이 method는 클래스가 생성되지 않았어도 실행할 수 있는 것이다.
이건 그냥 자바스크립트 이론이다.
->그냥 클래스 안에서 항상 사용할 수 있는 method라고 이해하면 된다.

static이라고 선언하지 않은 함수는 class밖에서 사용할 수 없고, static이라고 선언시 클래스 선언 하지 않아도 얼마든지 인자만 넣어준다면 사용할 수 있다.

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

이런 식으로 만들게 되는데, 출력해보니까 이건 보안이 철저할 수 밖에 없는게 보기만 해도 이건 뭐지 하는 생각밖에 들지 않게 한다.

+=+ 
getBlockchain 함수 -> 블록체인 추가 및 블록체인 배열을 return함. 

처음에 코드 작성하고 나서 인덱스에 문제가 있는 거 같아서 봤더니 오류는 아니였다고 함.

+ 우리는 새로운 블럭을 만드는 것 ! , NOT ADD


11.22
