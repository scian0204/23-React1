# 201930107 남궁찬 - React1

## 7주차_20230413
### chapter6 요약
- `State`
  - State란
    - `리액트 컴포넌트`의 `변경 가능`한 `데이터`
    - 컴포넌트를 개발하는 `개발자`가 `직접 정의`해서 사용
    - `state`가 `변경`될 경우 컴포넌트가 `재렌더링`됨
    - `렌더링`이나 `데이터 흐름`에 `사용되는 값만` state에 포함시켜야 함
  - State의 특징
    - `자바스크립트 객체 형태`로 존재
    - `직접적`인 `변경`이 `불가능` 함
    - `클래스` 컴포넌트
      - `생성자`에서 `모든 state`를 `한 번에 정의`
      - `state`를 `변경`하고자 할 때에는 꼭 `setState()함수`를 `사용`해야 함
    - `함수` 컴포넌트
      - `useState()훅`을 사용하여 `각각의 state`를 `정의`
      - `각 state별`로 주어지는 `set함수`를 `사용`하여 state값을 변경

### 훅이란?
- 클래스형 컴포넌트에서는 생성자(constructor)에서 state를 정의하고, setStae() 함수를 통해 state를 업데이트 함
- `예전`에 `사용`하던 `함수형 컴포넌트`는 별도로 `state`를 `정의`하거나, 컴포넌트의 `생명주기`에 맞춰서 어떤 코드가 실행되도록 `할 수 없었음`
- `함수형 컴포넌트`에서도 `state`나 `생명주기 함수`의 `기능`을 `사용`하게 해주기 위해 추가된 기능이 `훅(Hook)`임
- 함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 `모두 동일`하게 `구현`할 수 있게 됨
- Hook이란 `'state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수'`를 의미함
- `훅의 이름`은 모두 `'use'로 시작`함
- `사용자 정의 훅(custom hook)`을 만들 수 있으며, 이 경우에 이름은 자유롭게 할 수 있으나 `'use'로 시작`할 것을 권장함(`꼭 그래야 함 오류 혹은 warning이 나옴`)

### useState
- `useState`는 `함수형 컴포넌트`에서 `state`를 `사용`하기 위한 `Hook`임
``` JSX
import React, { useState } from "react";

function Counter(props) {
  var count = 0;

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={()=>count++}>
        클릭
      </button>
    </div>
  );
}
```
▼▼▼
``` JSX
import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={()=>setCount(count+1)}>
        클릭
      </button>
    </div>
  );
}
```
- 첫번쨰 항목은 `state`의 `이름`
- 두번쨰 항목은 `state`의 `set함수`
- `함수 호출`시 `state`의 `초기값` 설정
- `함수의 리턴 값`은 `배열`의 형태

### useEffect
- useState와 함꼐 `가장 많이 사용`하는 `Hook`임
- 이 함수는 `사이드 이펙트`를 `수행`하기 위한 것임
- 영어로 `side effect`는 `부작용`을 의미함. `일반적`으로 `프로그래밍`에서 사이드 이펙트는 `'개발자'가 의도하지 않은 코드`가 `실행`되면서 `버그`가 `발생`하는 것'을 말함
- 하지만 리액트에서는 `효과` 또는 `영향`을 뜻하는 `effect`의 `의미`에 가까움
- 예를 들면 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업을 의미함
- 이 작업을 이펙트라고 부르는 이유는 `이 작업들`이 `다른 컴포넌트`에 `영향`을 `미칠 수 있으며`, `렌더링 중`에는 `작업`이 `완료될 수 없기 때문`임. `렌더링`이 `끝난 이후`에 `실행되어야 하는 작업`들임
- `클래스 컴포넌트`의 `생명주기 함수`와 `같은 기능`을 `하나로 통합`한 기능을 제공합니다.
- *저자는 useEffect가 side effect가 아니라 effect에 가깝다고 설명하고 있지만, 이것은 부작용의 의미를 잘못 해석해서 생긴 오해임. 부작용의 부를 不로 생각했기 때문임.
- 결국 sideEffect는 렌더링 외에 실행해야 하는 부수적인 코드를 의미함
- 예를 들면 네트워크 레퀘스트, DOM 수동 조작, 로깅 등은 정리(clean-up)가 필요 없는 경우들임
- useEffect()함수는 다음과 같이 사용함
- 첫 번째 파라미터는 이펙트 함수가 들어가고, 두 번째 파라미터로는 의존성 배열이 들어감
- `useEffect(이펙트 함수, [의존성 배열])`
- 의존성 배열은 이펙트가 의존하고 있는 배열로, 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행 됨
- 이펙트 함수는 처음 컴포넌트가 렌더링 된 이후, 그리고 재 렌더링 이후에 실행됨
- 만약 이펙트 함수가 마운트와 언마운트 될 때만 한 번씩 실행되게 하고 싶으면 빈 배열을 넣으면 됨. 이 경우 props나 state에 있는 어떤 값에도 의존하지 않기 떄문에 여러 번 실행되지 않음
- 의존성 배열을 생략하는 경우 업데이트될 떄마다 호출됨
``` JSX
import React, { useState, useEffect } from "react";

function Counter(props) {
  count [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 비슷하게 작동함
  useEffect(() => {
    // 브라우저 API를 사용해서 document의 title을 업데이트 함
    document.title = `총 ${count}번 클릭했습니다.`;
  })

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={()=>setCount(count+1)}>
        클릭
      </button>
    </div>
  );
}
```
- `배열없이` `useEffect`를 `사용`했기 떄문에 `DOM`이 `변경된 이후`에 `해당 이펙트 함수`를 `실행`하라는 의미임
- `componentWillUnmount()`와 `동일`한 `기능 구현 방법`
``` JSX
import React, { useState, useEffect } from "react";

function UserStatusWithCOunter(props) {
  const [const, setCount] = useState(0);
  useEffect(() => {
    document.title = `총 ${count}번 클릭했습니다.`;
  });

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
    return () => {
      ServerAPI.unsubscriveUserStatus(props.user.id, handleStatusChange);
    };
  });

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={()=>count++}>
        클릭
      </button>
    </div>
  );
}
```
- 정리
``` JSX
useEffect(() => {
  // 컴포넌트가 마운트 된 이후,
  // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
  // 의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트시에 단 한 번씩만 실행됨
  // 의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨
  return () => {
    // 컴포넌트가 마운트 해제되기 전에 실행됨
  }
}, [의존성 변수1, 의존성 변수2, ...]);
```

### useMemo
- `useMemo()` 혹은 `Memoized value`를 `리턴`하는 훅임
- `이전 계산값`을 갖고 있기 때문에 `연산량`이 `많은 작업`의 `반복`을 `피할 수 있음`
- 이 훅은 `렌더링`이 `일어나는 동안 실행`됨
- 따라서 렌더링이 일어나는 동안 `실행되서는 않될 작업`을 `넣으면 안됨`.
``` JSX
const memoizedValueValue = useMemo(
  () => {
    // 연산량이 높은 작업을 수행하여 결과를 반환
    return computeExpensiveValue(의존성 변수1, 의존성 변수2);
  },
  [의존성 변수1, 의존성 변수2]
);
```
- `의존성 배열`을 `넣지 않을 경우`, `렌더링`이 `일어날 떄마다` `매번` 함수가 `실행`됨
- 따라서 `의존성 배열`을 `넣지 않는 것은` `의미가 없음`
- 만약 `빈 배열`을 넣게 되면 `컴포넌트 마운트 시에만` `함수`가 `실행`됨

### useCallback
- `useCallback()` 훅은 `useMemo()`와 `유사`한 역할을 함
- `차이점`은 `값이 아닌` `함수`를 `반환`한다는 점임
- `의존성 배열`을 `파라미터`로 받는 것은 `useMemo`와 `동일`함
- `파라미터`로 받은 `함수`를 `콜백`이라고 부름
- `useMemo`와 마찬가지로 `의존성 배열` 중 하나라도 `변경`되면 `콜백함수`를 `반환`함
``` JSX
const memoizedCallback = useCallback(
  () => {
    doSomething(의존성 변수1, 의존성 변수2);
  },
  [의존성 변수1, 의존성 변수2]
);
```

### useRef
- `useRef()` 훅은 `레퍼런스`를 `사용`하기 위한 훅임
- `레퍼런스`란 `특정 컴포넌트`에 `접근`할 수 있는 `객체`를 의미함
- `useRef()`훅은 바로 이 `레퍼런스 객체`를 `반환`함
- `레퍼런스 객체`에는 `.current`라는 `속성`이 있는데, 이것은 `현재 참조`하고 있는 `엘리먼트`를 의미함
- `const refContainer = useRef(초깃값);`
- 이렇게 `반환`된 `레퍼런스 객체`는 `컴포넌트`의 `라이프타임 전체`에 `걸쳐서 유지`됨
- 즉, `컴포넌트`가 `마운트 해제 전까지`는 `계속 유지`된다는 의미임
``` JSX
function TextInputWithFocusButton(props) {
  const inputElem = useRef(null);

  const onButtonClick = () => {
    // 'current'는 마운트된 input element를 가리킴
    inputElem.current.focus();
  };

  return (
    <>
      <input ref={inputElem} type="text" />
      <button onClick={onButtonCLick}>Focus the input</button>
    </>
  )
}
```

### 훅의 규칙
1. `무조건` `최상의 레벨`에서만 `호출`해야 함
   - 여기서 `최상위`는 `컴포넌트`의 `최상위 레벨`을 의미함
   - 따라서 `반복문`이나 `조건문` 또는 `중첩된 함수`들 `안`에서 훅을 호출하면 안됨
   - 이 규칙에 따라 훅은 `컴포넌트`가 `렌더링` 될 때마다 `같은 순서`로 `호출`되어야 함
``` JSX
function MyComponent(props) {
  const [name, setName] = useState('Inje');

  if (name != '') {
    useEffect(() => {
      ...
    });
  }
  ...
}
```
   - 위의 코드는 조건에 따라 호출됨으로 잘못된 코드임
2. 리액트 `함수형 컴포넌트`에서만 훅을 `호출`해야 함
   - 따라서 `일반 자바스크립트 함수`에서 훅을 `호출하면 안됨`
   - 훅은 리액트의 `함수형 컴포넌트` 혹은 직접 만든 `커스텀 훅`에서만 `호출`할 수 있음


### 나만의 훅 만들기
- 필요하다면 직접 `훅`을 `만들어` 쓸 수도 있음. 이것을 `커스텀 훅` 이라고 함
1. 커스텀 훅을 만들어야 하는 상황
``` JSX
import React, { useState, useEffect } from "react";

function UserStatus(props) {
  const [isOnline, setIsOnline] = setState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ServerAPI.subscriveUserStatus(props.user.id, handleStatusChange);
    return () => {
      ServerAPI.unsubscriveUserStatus(props.user.id, handleStatusChange);
    };
  });

  if(isOnline === null) {
    return '대기중...';
  }

  return isOnline ? '온라인' : '오프라인';
}
```
- 예제 UserStatus 컴포넌트는 isOnline이라는 state에 따라서 사용자의 상태가 온라인인지 아닌지를 텍스트로 보여주는 컴포넌트임

- 다음 예는 연락처 목록을 제공하면서 사용자의 이름은 초록색으로 표시하는 UserListItem 컴포넌트임
``` JSX
import React, { useState, useEffect } from "react";

function UserListItem(props) {
  const [isOnline, setIsOnline] = setState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ServerAPI.subscriveUserStatus(props.user.id, handleStatusChange);
    return () => {
      ServerAPI.unsubscriveUserStatus(props.user.id, handleStatusChange);
    };
  });

  return (
    <li style={{ color: isONline ? 'green' : 'black' }}>
      {props.user.name}
    </li>
  );
```

2. 커스텀 훅 추출하기
- `두 개`의 `자바스크립트 함수`에서 `하나의 로직`을 `공유`하도록 하고 싶을 때 `새로운 함수`를 하나 `만드는 방법`을 `사용`함
- 리액트 `컴포넌트`와 `훅`은 모두 `함수`이기 때문에 `동일한 방법`을 `사용`할 수 있음
- `이름`을 `use로 시작`하고, `내부`에서 `다른 훅`을 `호출`하는 `자바스크립트 함수`를 만들면 됨
- 아래 코드는 중복되는 로직을 useUserStatus()라는 커스텀 훅으로 추출해낸 것임.
``` JSX
import React, { useState, useEffect } from "react";

function useUserStatus(userId) {
  const [isOnline, setIsOnline] = setState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ServerAPI.subscriveUserStatus(userId, handleStatusChange);
    return () => {
      ServerAPI.unsubscriveUserStatus(userId, handleStatusChange);
    };
  });
  
  return isOnline;
}
```
- 한가지 `주의할 점`은 `일반 컴포넌트`와 마찬가지로 `다른 훅`을 `호출`하는 것은 무조건 `커스텀 훅`의 `최상위 레벨`에서만 해야 함
- `커스텀 훅`은 `일반 함수`와 `같다`고 생각해도 됨.
- 다만 `이름`은 `use`로 `시작`하도록 해야 함

3. `커스텀 훅` `사용`하기
- 먼저 작성했던 코드를 사용자 훅을 사용해서 수정하면 다음과 같음
``` JSX
function UserStatus(props) {
  const isOnline = useUserStatus(props.user.id);

  if(isOnline === null) {
    return '대기중...';
  }

  return isOnline ? '온라인' : '오프라인';
}

function UserListItem(props) {
  const isOnline = useUserStatus(props.user.id);

  return (
    <li style={{ color: isONline ? 'green' : 'black' }}>
      {props.user.name}
    </li>
  );
}
```

### 실습
- useCounter.jsx
```JSX
import React, { useState } from 'react';

function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    return [count, increaseCount, decreaseCount];
}

export default useCounter;
```
- Accommodate.jsx
``` JSX
import React, { useState, useEffect } from 'react';
import useCounter from './useCounter';

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [isZero, setIsZero] = useState(false); // 추가
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("=============");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        setIsZero(count <= 0); // 추가
        console.log(`Current count value: ${count}`);
    });

    return (
        <div style={{padding : 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount} disabled={isZero/*추가*/}>퇴장</button>

            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;
```
- &&은 삼항연산자처럼 참일때만 뒤에있는 것을 실행함

---
## 6주차_20230406
### class, id
- 리액트에선 `자바스크립트`의 `class`와 `HTML`의 `class`를 구분하기 위해 `HTML`의 `class`를 `className`으로 씀.
- `스타일`을 위해 `id`를 사용하는것은 좋지 않음
### 컴포넌트 추출
- `복잡한 컴포넌트`를 쪼개 `여러개`의 `컴포넌트`로 나눌 수 있음
- `큰 컴포넌트`에서 `일부`를 `추출`하여 `새로운 컴포넌트`를 만드는 것
- 실무에서는 처음부터 `1개`의 `컴포넌트`에 `하나`의 `기능`만 사용하도록 설계하는 것이 좋음
- 예시
  - 댓글을 표시하기 위한 컴포넌트
``` JSX
function Comment(props) {
  return (
    <div className="comment">
      <div className="user-info">
        <img className="avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
        />
        <div className="user-info-name">
          {props.author.name}
        </div>
      </div>

      <div className="comment-text">
        {props.text}
      </div>

      <div className="comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```
  - 프로필 이미지 표시하는 부분을 추출한 컴포넌트
``` JSX
function Avatar(props) {
  return (
    <div className="avatar" 
        src={props.user.avatar}
        alt={props.user.name}
    />
  );
}
```
  - 사용자 정보를 담고있는 부분을 추출한 컴포넌트
``` JSX
function UserInfo(props) {
  <div className="user-info">
    <Avatar uer={props.user} />
    <div className="user-info-name">
      {props.user.name}
    </div>
  </div>
}
```
  - 추출한 컴포넌트를 반영한 Comment 컴포넌트
```JSX
function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={props.author} />
      <div className="comment-text">
        {props.text}
      </div>

      <div className="comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

### 이미지 삽입
- 배포는 `public` 폴더의 `index.html`에서 `최종 배포`가 되기 떄문에 `index.html 기준`으로 `이미지 경로`를 지정해줘야 함
- 굳이 그 밖에 있는 이미지를 넣고 싶으면 하나하나 `import`를 해줘야 함

### 실습
- Comment 컴포넌트
``` JSX
import React from 'react';

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};

function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    // src="./images/logo.png"
                    alt="프로필 이미지"
                    style={styles.image}
                />
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.nameText}> {props.name} </span>
                <span style={styles.commentText}> {props.comment} </span>
            </div>
        </div>
    );
}

export default Comment;
```
- CommnetList 컴포넌트
``` JSX
import React from 'react';
import Comment from './Comment';

const comments = [
    {
        name: "남궁찬",
        comment: "안녕하세요."
    }, 
    {
        name: "남궁찬2",
        comment: "안녕하세요."
    }, 
    {
        name: "남궁찬3",
        comment: "안녕하세요."
    }, 
]

function CommentList(props) {
    return (
        <div>
            {comments.map((data) => {
                return (
                    <Comment name={data.name} comment={data.comment} />
                )
            })}
        </div>
    );
}

export default CommentList;
```

### chapter5 요약
- 리액트 컴포넌트
  - `컴포넌트 기반 구조`
    - `작은 컴포넌트`들이 모여서 `하나의 컴포넌트`를 `구성`하고 이러한 컴포넌트들이 모여서 `전체 페이지`를 `구성`
  - 개념적으로는 `자바스크립트`의 `함수`와 비슷함
    - `속성`들을 `입력`으로 받아서 그에 맞는 `리액트 엘리먼트`를 `생성`하여 `리턴`함
- `Props`
  - Props의 `개념`
    - 리액트 컴포넌트의 `속성`
    - 컴포넌트에 `전달`할 다양한 `정보`를 담고 있는 자바스크립트 `객체`
  - Props의 `특징`
    - `읽기 전용`
    - 리액트 컴포넌트의 props는 바꿀 수 없고, 같은 props가 들어오면 항상 같은 엘리먼트를 리턴해야 함
  - Props의 `사용법`
    - JSX를 사용할 경우 컴포넌트에 `키-값 쌍 형태로` 넣어주면 됨
    - 문자열 이외에 `정수`, `변수`, 그리고 `다른 컴포넌트` 등이 들어갈 경우에는 `파라미터`로 자바스크립트 객체를 넣어주면 됨
- 컴포넌트 만들기
  - 컴포넌트의 종류
    - `클래스` 컴포넌트와 `함수` 컴포넌트로 나뉨
      - 함수 컴포넌트 
        - 함수 형태로 된 컴포넌트
      - 클래스 컴포넌트
        - ES6의 클래스를 사용하여 만들어진 컴포넌트
  - 컴포넌트 이름 짓기
    - 컴포넌트의 이름은 항상 `대문자`로 시작해야 함
    - 소문자로 시작할 경우 컴포넌트를 DOM 태그로 인식하기 떄문
  - 컴포넌트 `렌더링`
    - 컴포넌트로부터 `엘리먼트`를 `생성`하여 이를 `리액트 DOM`에 `전달`
- 컴포넌트 `합성`
  - `여러 개`의 컴포넌트를 합쳐서 `하나`의 컴포넌트를 만드는 것
- 컴포넌트 `추출`
  - `큰 컴포넌트`에서 일부를 `추출`해서 `새로운 컴포넌트`를 만드는 것
  - `기능 단위`로 구분하는 것이 좋고, 나중에 곧바로 `재사용`이 `가능`한 형태로 추출하는 것이 좋음

### State
1. `State`란?
   - State는 리액트 `컴포넌트`의 `상태`를 의미함
   - 상태의 의미는 정상인지 비정산인지가 아니라 컴포넌트의 `데이터`를 의미함
   - 정확히는 컴포넌트의 `변경가능`한 데이터를 의미
   - State가 변하면 `다시 렌더링`이 되기 때문에 렌더링과 관련된 값만 State에 포함시켜야 함
2. State의 `특징`
   - 리액트 만의 특별한 형태가 아닌 단지 자바스크립트 객체일 뿐임
``` JSX
class LikeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false
    };
  }
}
```
   - `constructor`는 `생성자`이고 그 안에 있는 `this.state`가 현 컴포넌트의 `state`임
   - `함수형`에서는 `useState()`라는 함수를 사용함
   - state는 변경은 가능하지만 `직접 수정해선 안됨`
   - `setState()`함수를 사용하여 변경해야 함
``` JSX
// state를 직접 수정 (잘못된 사용법)
this.state = {
  name: 'Inje'
};

// setState 함수를 통한 수정 (정상적인 사용법)
this.setState({
  name: 'Inje'
})
```

### component vs element vs instance
- `element`: 재료
- `component`: 빵 틀
- `instance`: 재료를 빵틀에 넣고 만든 빵

### 생명주기
- `생명주기`는 컴포넌트의 `생성 시점`, `사용 시점`, `종료 시점`을 나타내는 것
- `constructor`가 `실행`되면서 컴포넌트가 `생성`됨
- `생성 직후` `componentDidMount()` 함수가 `호출`됨
- 컴포넌트가 `소멸하기 전까지` `여러 번` `렌더링`함
- `렌더링`은 `props`, `setState()`, `forceUpdate()`에 의해 `상태`가 `변경`되면 이루어짐
- `렌더링`이 끝나면 `componentDidUpdate()` 함수가 `호출`됨
- `컴포넌트`가 `언마운트`되면 `componentWillUnmount()` 함수가 `호출`됨
![lifeCycle](https://cdn.filestackcontent.com/ApNH7030SAG1wAycdj3H)

### 실습
- Notifiation 컴포넌트
``` JSX
import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    },
};

class Notification extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>
                    {this.props.message}
                </span>
            </div>
        );
    }
}

export default Notification;
```

- NotificationList 컴포넌트
``` JSX
import React from 'react';
import Notification from './Notification';

const reservedNotifications = [
    {
        id: 1,
        message: "message1"
    }, 
    {
        id: 2,
        message: "message2"
    }, 
    {
        id: 3,
        message: "message3"
    }, 
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return(
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification
                        key={notification.id}
                        id={notification.id}
                        message={notification.message} 
                    />
                })}
            </div>
        );
    }
}

export default NotificationList;
```
- `생성자`에서 앞으로 `사용할 데이터`를 `state`에 넣어서 `초기화` 함
- `componentDidMount()` 함수에서는 `setInterval()`함수를 사용하여 1초마다 `reservedNotifications로부터` `알림 데이터`를 `하나씩` 가져와 `state`에 있는 `notification 배열`에 넣는 작업을 함
- `state`를 `변경`할 시 `setState()` 함수를 사용하여 화면을 다시 렌더링 하게 함

### React Developer tools
- `크롬 확장 프로그램`
- 설치 후 리액트 앱에서 `개발자도구`에 들어가면 `컴포넌트`와 `프로파일러`라는 항목이 생김
  - `컴포넌트`: `화면에 존재`하는 `컴포넌트`가 `트리 형태`로 보이며, 각 컴포넌트별 `props`와 `state`확인 가능
- `프로파일러`: 컴포넌트가 `렌더링` 되는 `과정`을 `기록`하여 각 `단계별`로 살펴볼 수 있음.


---
## 5주차_20230330
### 엘리먼트의 정의
- 리액트 앱을 구성하는 요소
- 공식 페이지 -> `엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들`
- 웹사이트의 경우 `DOM 엘리먼트`이며, `HTML요소`를 의미함
- `리액트 엘리먼트`와 `DOM엘리먼트`의 차이
  - 리액트 엘리먼트는 `Virtual DOM`의 형태를 취하고 있음
  - DOM 엘리먼트는 페이지의 `모든 정보`를 갖고 있어 `무거움`
  - 리액트 엘리먼트는 `변화한 부분`만 갖고 있어 `가벼움`
<table>
<tr>
<th> </th>
<th>DOM</th>
<th>Virtual DOM</th>
</tr>
<tr>
<th>업데이트 속도</th>
<td>느림</td>
<td>빠름</ㅁtd>
</tr>
<tr>
<th>element 업데이트 방식</th>
<td>DOM 전체를 업데이트</td>
<td>변화 부분을 가상DOM으로 만든 후    
DOM과 비교하여 다른 부분만 업데이트</td>
</tr>
<tr>
<th>메모리</th>
<td>낭비가 심함</td>
<td>효율적</td>
</tr>
</table>

### 엘리먼트의 생김새
- 리액트 엘리먼트는 `자바스크립트 객체`의 형태로 존재
- `컴포넌트`(Button 등), `속성`(color 등) 및 내부의 모든 `children`을 포함하는 `일반 JS객체`임
- 이 객체는 마음대로 변경할 수 없는 `불변성`을 갖고 있음
- 예) - 버튼을 나타내기 위한 엘리먼트
``` javascript
{
  type: 'button',
  props: {
    className: 'bg-green',
    children: {
      type: 'b',
      props: {
        children: 'Hello, element!'
      }
    }
  }
}
```
▼▼▼
``` HTML
<button class='bg-green'>
  <b>
    Hello, element!
  </b>
</button>
```
- React.createElement()
``` JSX
React.createElement(
  type, // 컴포넌트 이름
  [props],
  [...children] // 자식태그
)
```
- 내부적으로 자바스크립트 객체를 만드는 역할을 하는 함수가 `createElement()`임
- 실제 createELement() 함수가 동작하는 과정
``` JSX
function Button(props) {
  return (
    <button className={`bg-${props.color}`}>
      <b>
        {props.children}
      </b>
    </button>
  )
}

function ConfirmDialog(props) {
  return (
    <div>
      <p>내용을 확인하셨으면 확인 버튼을 눌러주세요.</p>
      <Button color='green'>확인</Button>
    </div>
  )
}
```
▼▼▼
- ConfirmDialog 컴포넌트를 엘리먼트의 형태로 표시
``` Javascript
{
  type: 'div',
  props: {
    children: [
      {
        type: 'p',
        props: {
          chidlren: '내용을 확인하셨으면 확인 버튼을 눌러주세요.'
        }
      },
      {
        type: Button,
        props: {
          color: 'green',
          children: '확인'
        }
      }
    ]
  }
}
```
▼▼▼
- Button까지 분해 
```javascript
{
  type: 'div',
  props: {
    children: [
      {
        type: 'p',
        props: {
          chidlren: '내용을 확인하셨으면 확인 버튼을 눌러주세요.'
        }
      },
      {
        type: 'button',
        props: {
          className: 'bg-green',
          children: {
            type: 'b',
            props: {
              children: '확인'
            }
          }
        }
      }
    ]
  }
}
```

### 엘리먼트의 특징
- 불변성 -> 한 번 생성된 엘리먼트의 `children`이나 `속성`(attributes)을 바꿀 수 없음
- 내용이 바뀌면?
  1. 컴포넌트를 통해 엘리먼트를 `새로 생성`하면 됨
  2. 그 다음 이전 엘리먼트와 `교체`
  - 이 작업을 위해 `Virtual DOM`을 사용

### 엘리먼트 렌더링
- Root DOM node
  - `<div id="root"></div>`
  - 리액트에 필수로 들어가는 중요한 코드임
  - 이 div태그 안에 리액트 엘리먼트들이 렌더링 됨

### 렌더링된 엘리먼트 업데이트
``` HTML
<!DOCTYPE html>
<html>
    <head>
      <title>element render</title>
    </head>
    <body>
      <div id="root"></div>

      <!-- 리액트 가져오기 -->
      <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

      <!-- 리액트 컴포넌트 가져오기 -->
      <script type="text/babel" src="tick.js"></script>
    </body>
   </html>
```
``` JSX
function tick() {
  const element = (
    <div>
      <h1>안녕, 리액트!</h1>
      <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  
  ReactDOM.render(element, document.getElementById('root'));
} 
setInterval(tick, 1000);
```

### 실습 - 시계만들기
1. Clock.jsx 파일 생성 및 작성
``` JSX
import React from 'react';

function Clock(props) {
    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;
```
2. index.js의 render()안의 컴포넌트 Clock으로 수정
3. index.js의 root를 불러오는 부분부터 setInterval로 묶음
``` Javascript
setInterval(()=>{
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  )
}, 1000);
```
4. App.js를 수정하는것이 나음

### gitGraph를 이용한 checkout
1. VSC `gitGraph` 확장 프로그램 설치
2. source control 메뉴에서 git graph 아이콘 클릭
3. 원하는 커밋 우클릭 -> `checkout`
4. 그 시점으로 돌아옴


### 컴포넌트
- 리액트는 `컴포넌트` 기반의 구조
- `작은 컴포넌트`가 모여 `큰 컴포넌트`를 구성, 다시 이런 컴포넌트가 모여 `전체 페이지`를 구성함
- `재사용`이 가능하여 전체 코드의 양을 줄임 -> `개발 시간`, `유지보수 비용` 감소
- 입력, 출력이 있다는 면에서 자바스크립트 `함수`와 비슷함
- 입력은 `Props`가 담당, 출력은 `리액트 엘리먼트`의 형태로 출력됨
- 엘리먼트를 필요한 만큼 만들어 사용한다는 점에서 `객체지향 개념`과 비슷함

### props
- `property`: 속성 의 준말
- 컴포넌트의 `속성`
- 컴포넌트에 어떤 속성, `props`를 넣느냐에 따라 속성이 `다른 엘리먼트`가 출력됨
- 컴포넌트에 `전달` 할 `다양한 정보`를 담고 있는 `자바스크립트의 객체`임
- 특징
  - `읽기 전용`임, 변경X
  - 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달
- 공식 문서 -> 모든 리액트 컴포넌트는 그들의 props에 관해서는 `Pure함수` 같은 역할을 해야 한다.
- `Pure` 함수 vs `Impure` 함수
  - Pure함수는 `인수`로 받은 정보가 함수 내부에서도 `변하지 않는` 함수
  - Impure함수는 `인수`로 받은 정보가 함수 내부에서 `변하는` 함수
- 사용법
  - JSX에서는 `key-value` 쌍으로 props를 구성함
``` JSX
function App(props) {
  return (
    <Profile
      name="소플"
      introduction="안녕하세요, 소플입니다."
      viewCount={1500}
    />
  )
}
```
▼▼▼
``` Javascript
{
  name: "소플",
  introduction: "안녕하세요, 소플입니다.",
  viewCount: 1500
}
```
  - JSX를 사용하지 않는 경우
``` Javascript
React.createElement(
  Profile,
  {
    name: "소플",
    introduction="안녕하세요, 소플입니다.",
    viewCount: 1500
  },
  null
);
```

### 컴포넌트 만들기
1. 컴포넌트의 종류
   - 리액트 `초기버전`에서는 `클래스형` 컴포넌트를 사용했음
   - 이후 `Hook`이라는 개념이 나오면서 최근에는 `함수형` 컴포넌트를 사용함
   - 예전에 작성된 문서들이 클래스형이기 때문에 클래스형 컴포넌트와 컴포넌트의 `생명주기`에 관해서도 공부해 두어야 함
2. 함수형 컴포넌트
``` JSX
function Welcome(props) {
  return <h1>안녕, {props.name}</h1>;
}
```
3. 클래스형 컴포넌트
``` JSX
class Welcome extends React.Component {
  reder() {
    return <h1>안녕, {this.props.name}</h1>;
  }
}
```
4. 컴포넌트 이름 짓기
   - 항상 `대문자`로 `시작`
   - 리액트는 소문자로 시작하는 컴포넌트를 `DOM 태그`로 `인식`함
   - 컴포넌트 `파일 이름`과 `같게`
5. 컴포넌트의 렌더링
``` JSX
function Welcome(props) {
  return <h1>안녕, {props.name}</h1>;
}

const element = <Welcome name="인제" />
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
```

### 컴포넌트 합성
- 여러 개의 컴포넌트를 `합쳐서` 하나의 컴포넌트를 만드는 것
- 리액트에서는 컴포넌트 안에 또 다른 컴포넌트를 사용할 수 있기 때문에, 복잡한 화면을 여러개의 컴포넌트로 나누어 구현할 수 있음
``` JSX
function Welcome(props) {
  return <h1>안녕, {props.name}</h1>;
}

function App(props) {
  return (
    <div>
      <Welcome name="Mike" />
      <Welcome name="Steve" />
      <Welcome name="Jane" />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

---
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
[./src/chapter_03](https://github.com/scian0204/23-React1/tree/master/src/chapter_03)

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
