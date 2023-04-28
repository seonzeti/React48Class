import "./App.css";
import Member from "./components/Member";
import MenuItem from "./components/MenuItem";

function App() {
  // rafce : 컴포넌트의 구조를 만드는 단축키

  // 컴포넌트 : 리액트로 만들어진 앱을 이루는 최소 단위
  //          반복되는 코드를 하나로 묶어 컴포넌트로 만든다
  //          내가 원하는 코드를 묶어 '태그화' 시킨다
  // ** 반드시, 대문자로 시작! => 기존의 HTML 태그와 구분

  // 프로퍼티 (props)
  // 상위 컴포넌트가 하위 컴포넌트에
  // 값을 전달할 때 사용

  // 상위 컴포넌트 : <컴포넌트이름 속성="값"/>
  //        단순 문자열? "값"
  //        변수 사용? {변수이름}

  // 하위 컴포넌트의 매개변수로 값(Object)을 전달 받는다
  //                매개변수.속성

  let drink = "아메리카노";
  let myTeam = "르세라핌";
  return (
    <>
      {/* 예제) 메뉴판 만들기 */}
      <table border="1px">
        <caption>메뉴판</caption>
        <tr>
          <th>메뉴이름</th>
          <th>가격</th>
        </tr>
        <MenuItem name="민트초코" price="4500원" />
        <MenuItem name={drink} price="3500원" />
        <MenuItem name="바닐라라떼" price="4000원" />
      </table>

      {/* 실습) 팀원을 소개하는 컴포넌트를 생성하기 */}

      <Member teamName={myTeam} memberName="사쿠라"></Member>
      <Member teamName={myTeam} memberName="김채원"></Member>
      <Member teamName={myTeam} memberName="허윤진"></Member>
      <Member teamName={myTeam} memberName="카즈하"></Member>
      <Member teamName={myTeam} memberName="홍은채"></Member>
    </>
  );
}

export default App;
