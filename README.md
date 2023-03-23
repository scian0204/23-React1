# 201930107 남궁찬 - React1

## 4주차_20230323
### 수업 전 준비
1. README.md 백업
2. local에 있는 저장소 이름 바꾸기/삭제
3. 새 프로젝트 생성(23-react1)
4. README.md 덮어쓰기
5. GitHub 저장소 삭제
6. 로컬에서 23-react1 push
7. GitHub 저장소 확인

### JSX
ex)
```jsx
const element = <h1>Hello, world!</h1>;
```
문자열도, HTML도 아님
  
- JSX에 표현식 포함하기
``` jsx
const name = "Josh Perez";
const element = <h1>Hello, {name}</h1>; // Hello, Josh Perez
```
- 속성 정의
``` jsx
const element = <a href="https://www.reactjs.org"> link </a>;
```
- 중괄호 이용
``` jsx
const element = <img href={user.avatarUrl}></img>;
```
- 단일 태그
``` jsx
<br> //오류
<br />
```
- Babel
  - JSX 컴파일러
  - JSX를 React.createElement() 호출로 컴파일 함
- 장점
  - 코드가 간결해짐
  - 가독성이 향상됨
  - Injection Attack이라 불리는 해킹 방법을 방어함
- 사용법
  - 모든 자바스크립트 문법 지원
  - 자바스크립트 문법에 XML과 HTML을 섞어서 사용
  - html이나 xml에 {}안에 자바스크립트 코드 사용

### 실습
[./src/chapter_03](https://github.com/scian0204/23-React1/blob/60ae7c3e8c829e9e71edef351f8b73ae772d361a/src/chapter_03)

---
## 3주차_20230316
### README.md 작성요령
1. 이름 : `h1`
2. 강의 날짜 : `h2`
3. 학습내용(필수) : `h2`이하 사이즈 자유 사용
4. 작성 코드(선택)
5. 최근 내용이 위에 오도록 작성
6. 날짜 별 구분이 잘 가도록 작성
7. 파일이름은 `대문자`
8. 마크다운은 표준이 없고 쓰는곳마다 조금씩 다름

### 개발환경 설정
1. `chocolatey`
   1. `파워쉘` 관리자 권한으로 실행
   2. `Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))` 입력

2. `nodejs`
   1. `chocolatey`를 이용한 방법
      - `choco install nodejs`로 설치
   2. 사이트를 이용한 방법
      - https://nodejs.org/en 로 접속 후 LTS버전 다운로드
  
   - 버전확인 : `node -v` || `node --verison`
     - 보통 `-v` 혹은 `--version`으로 버전을 확인할 수 있음
   - `nodejs`를 설치하면 `npm`, `npx`도 같이 설치됨
   - `npx`
     - `일회용` node 패키지 생성
     - 원래 `npm`이 같이 쓰였음
     - 리액트 프로젝트 생성시 사용

3. `Visual Studio Code`
   1. `chocolatey`를 이용한 방법
      - `choco install vscode`
   2. 사이트를 이용한 방법
      - https://code.visualstudio.com 로 접속 후 download for windows 버튼 클릭

### React 소개
1. 리액트의 정의
   - `A JavaScript library for building user interfaces` - 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리
     - `라이브러리` : 자주 사용되는 기능을 정리해 모아 놓은 것

2. 자바스크립트 UI 프레임워크: [Stack Overflow trends](https://insights.stackoverflow.com/trends?tags=reactjs%2Cangularjs%2Cvue.js%2Cvuejs3%2Csvelte%2Cangular)

3. 리액트 개념 정리
   - 복잡한 사이트를 쉽고 빠르게 만들고 관리하기 위함
   - `SPA`를 쉽고 빠르게 만들 수 있도록 해주는 도구

4. 리액트의 장점
   1. 빠른 업데이트와 렌더링 속도
      - `Virtual DOM`을 이용함
      - `DOM(Document Object Model)`이란 `XML`, `HTML` 문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제할 수 있도록 돕는 `인터페이스`
      - `DOM` 조작이 비효율적인 이유로 속도가 느려 고안됨
      - `DOM`은 `동기식`, `Virual DOM`은 `비동기식` 방법으로 렌더링함
        - 동기 : 페이지를 업데이트 할 시 한번에 모두 로드함
        - 비동기 : 바뀌는 부분만 로드함
   
   2. `컴포넌트` 기반 구조
      - 모든 페이지가 컴포넌트로 구성
      - 하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구상할 수 있음
      - 블록을 조립하는 것처럼 개발
      - 재사용성이 뛰어남

   3. 재사용성
      - 반복적인 작업을 줄여 생산성을 높여줌
      - 유지보수 용이
      - 재사용이 가능하려면 해당 모듈의 의존성이 없어야 함
   
   4. 든든한 지원군
      - 메타(구 페이스북)에서 오픈소스 프로젝트로 관리하고 있어 계속 발전하고 있음
 
   5. 활발한 지식공유 & 커뮤니티

   6. 모바일 앱 개발 가능
      - `리액트 네이티브`라는 모바일 환경 UI프레임워크를 사용하여 크로스 `플랫폼(cross-platform)` `모바일 앱`을 개발할 수 있음

5. 리액트의 단점
   1. 방대한 학습량
      - 자바스크립트를 공부해야 함
      - 이미 배운 경우 빠르게 학습 가능

   2. 높은 상태 관리 복잡도
      - `state`, `componant life cycle`등의 개념이 있음
      - 예전에는 함수형 컴포넌트가 아닌 클래스형 컴포넌트와 state등을 사용함
      - 최근에는 함수형 컴포넌트와 `hook`을 사용하여 보완함

---
### 리액트 시작
1. `HTML`
   ``` html
   <html>
    <head>
      <title>html</title>
    </head>
    <body>
      <h1>test</h1>
    </body>
   </html>
   ```
2. `CSS`
   ``` css
    h1 {
      color: green;
      font-style: italic;
    }
   ```
3. 웹사이트에 React.js 추가  
   - `CDN`방식으로 리액트 추가
   ``` html
   <html>
    <head>
      <title>html</title>
    </head>
    <body>
      <h1>test</h1>
      <div id="root"></div>

      <!-- 리액트 가져오기 -->
      <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

      <!-- 리액트 컴포넌트 가져오기 -->
      <script src="MyButton.js"></script>
    </body>
   </html>
   ```
    - 간단한 리액트 컴포넌트
   ``` javascript
   function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
      'button',
      { onClick: () => setIsClicked(true) },
      isClicked ? 'Clicked!' : 'Click here!'
    )
   }

   const domContainer = document.querySelector('#root');
   ReactDOM.render(REact.createElement(MyButton), domContainer);
   ```
4. `create-react-app`
   1. `npm install npx -g`
   2. `npx create-react-app my-app` 프로젝트 이름으로 폴더가 생성되므로 따로 폴더를 만들어 그 안에서 실행할 필요 없음
   3. `cd my-app`
   4. `npm start`

---
## 2주차_20230309
### 개발환경

### 운영체제
- `리눅스`, `맥`(유닉스기반) 같은 경우는 패키지매니저가 있어 프로그램(패키지)의 설치, 업데이트, 삭제 등 관리가 용이함 (+윈도우에도 `winget`이라는 기본 패키지매니저가 있음)
- `리눅스`는 최신 버전임에도 오래된 노트북에서도 돌아갈 만큼 요구성능이 낮고 무료 운영체제이기 때문에 개발용도로 좋음

### `도커(docker)`
- 컨테이너라는 단위로 가상머신과 비슷하게 돌아감
- 개발 후 실행환경 채로 도커에 올려 배포하는 방식이 있음

### `Git`
- 소스코드의 버전관리 툴
- 대부분의 개발자가 사용함
- `VSC`와 같은 통합개발환경에서 `Git`의 gui컨트롤을 지원함
- 기능
  - `git init` 혹은 `VSC`의 `source control` 메뉴에서 gui로 쉽게 리포지토리 초기화 가능
  - `commit`
    - 소스의 `변경(파일 생성, 변경, 삭제)`이 일어날 시 `스테이지(가상 공간)`에 올린 후 ``커밋``을 할 경우 그 변경점이 저장이 됨.
    - 한 번에 여러개의 파일을 `커밋`할 수 있지만 동일한 목적으로 변경한 파일끼리 `커밋`하는것이 좋음
    - `메시지`
      - `커밋`할 때에 메시지를 반드시 적어야 함
      - 강제적인 시스템은 아니지만 보통 `동사원형 파일명`의 형태로 적으며, 글자 제한이 있음.
      - 줄을 2번 바꾸면 글자 제한이 없는 메시지를 따로 적을 수 있음.
    - `커밋` 한번 한번이 유사시 돌아갈 수 있는 세이브 포인트이기 때문에 수시로 하는것을 권장
  - `push`
    - `원격 저장소`에 `커밋`한 파일과 내용을 올림
    - `VSC`의 경우 `github`와 연동하여 이미 그 계정에 `리포지토리`가 있을 경우 업로드 할 `리포지토리`를 선택 후 올리며, 없을 경우 새로 만들 수 있음.
      - 계정과 연동되면 `커밋` 버튼이 `publish branch` 버튼으로 바뀌며 이 버튼 혹은 하단바의 `구름모양 아이콘`을 누를 시 새로운 `리포지토리`를 생성할 수 있음.
      - `케밥 메뉴`의 `push`항목을 누를 시 이미 있는 `리포지토리`를 선택하여 업로드 할 수 있음.
  - `.gitignore`
    - `node`의 `node_module`과 같이 용량과 갯수가 크지만 각 환경에 이미 있는 경우나 이미지파일등과 같이 올리지 않아도 되는 파일을 정의할 수 있음
    - 이 파일에 정의된 확장자나 파일, 폴더는 커밋되지 않음
- `github`
  - 개발자가 가장 많이 사용하는 `git 원격 저장소`
  - 리포지토리 = 프로젝트 폴더
  - `README.md`
    - 깃허브에 올라가는 리포지토리에 들어갈 시 보이는 문서를 만들 수 있는 파일
    - `마크다운(markdown)`언어로 제작됨
  - `풀 리퀘스트 (Pull Request)`
    - 개발 협업 시 `원본 리포지토리`를 `fork`로 `자신의 리포지토리`로 복사해서 개발 후 원본 관리자에게 `풀 리퀘스트`를 보냄
    - `풀 리퀘스트`를 받은 원본 관리자는 이상 유무 확인 후 승낙하여 `원본 리포지토리`로 `병합(merge)`하는 방식
    - 원본 리포지토리에 바로 푸시를 하지 않으므로 안전함


## 웹 개발
### `HTML`
- 웹사이트의 `뼈대`
- `태그`로 구성
- SPA(Single Page Application)
  - 한 페이지로 구성된 웹 앱
  
### `CSS`
- HTML은 구역만 정해짐
- 요소의 색이나 위치, 크기등을 정의하여 웹 페이지를 꾸며줌

### `Javascript`
- `정적`인 사이트를 `동적`으로 만들어줌
- 표준 - ES6(ECMAScript6)
  - 바로 최신버전을 따라가는것은 아님
- 자료형 - 타입명시X
  - var : 중복 선언 가능, 재할당 가능
  - let : 중복 선언 불가능, 재할당 가능
  - const : 중복 선언 불가능, 재할당 불가능
- JSON(Javascript Object Notation)
  - key와 key value로 이루어짐
  - ` { key1: value1, key2: value2,...} `
- 연산자
  - `a = 1`, `b = "1"`일떄 
    - `a == b` --> True
    - `a === b` --> False
- 함수
  - 화살표 함수
    - `const multiply = (a, b) => a + b`
