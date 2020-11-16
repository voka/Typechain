# Typechain

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