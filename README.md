# Refactoring

이미 종료된 과거 진행했던 URURL 프로젝트를 리팩토링 프로젝트

시작일 2024.3.22(금)


진행 방향은 다음과 같다.

1. React 버전 업데이트 (완)
17 -> 18

2. Next.js 버전 업데이트 (완)
11 -> 14

swc를 통한 빌드를 했을 때 시간을 비교해봤을 때 
평균 19 ~ 20초 정도 걸리고

<img width="190" alt="스크린샷 2024-03-22 오후 5 21 51" src="https://github.com/SangWonyy/ururl-refactoring/assets/47518178/6dc0a101-fe93-493c-9dae-912489e28ba9">

babel preset을 통해서 빌드했을 때는 약 27초 정도가 걸리는 것을 확인할 수 있다.

<img width="172" alt="스크린샷 2024-03-22 오후 5 20 19" src="https://github.com/SangWonyy/ururl-refactoring/assets/47518178/7adb66ab-930d-41e8-86dd-288572810c72">



4. Mockoon 적용
서버를 따로 두지는 않을거기 때문에 MOCK API를 통해 작업할 예정이다.

5. 전체적인 코드 릭펙도링

6. Test Code

7. Styled-component to vanilla extract
styled-component를 제거할 예정이다.

이유 : 개인적인 생각이지만 styled-component는 Next와는 잘 어울리지 않는다고 생각한다.
styled-component는 런타임시 동적으로 디자인이 된다. 이는 자바스크립트로써 클라이언트에서 스타일이 된다는 의미이다. 근데 Next의 경우 ssr or server comoponent를 통해 서버에서 렌더링을 도와주는 프레임워크이다.
이에 따라 별도의 document와 같은 곳에 style을 서버사이드에서 생성해내는 코드를 별도로 작업을 진행해야한다. 이렇게 함으로 사용 자체는 가능하지만, 조화롭게 사용하는 것은 아니라고 생각한다.
이에 따라 styled-component가 아닌 css-in-js의 장점을 가져오면서 내가 생각하고 있는 단점을 해결해주는 zero runtime 라이브러리인 vanilla extract를 사용하고자 한다. 

작업에 대한 내용은 블로그에 정리할 예정이며, 필요한 작업이 생기면 목록을 추가할 예정이다.

리팩토링 과정과 학습하는 내용들은 블로그에서 하나씩 정리할 예정이다.

https://sangwonny.tistory.com/category/toy%20project
