// <!-- COmposition API

// 객체의 속성으로 정의를 내렸던 것의 문제점의 개선. Composition API
// 함수(내부함수, 클로저)

// 1. Coposition API
// : 대규모 vue 어플리케이션에서의 컴포넌트 로직을 효과적으로 구성하고 재사용할 수 있도록 만든 함수기반

// 관심사가 흩어져있음.(정의, 데이터, 메서드 등등) 표기방법-> 개선
//     1)sutup()메소드 (설정)
//     :data, methods,computed옵션이 사라짐.
//     : 초기화 작업을 모두 이 함수 내에서 정의
//     : create단계에서 호출됨.

//     : 반응성을 가진 상태데이터, 계산된 속성, 메서드, 생명주기(option에서 하던것) 훅을 작성.
//     : 객체형태로 리턴(리턴되는 속성들이 components props로 자동 저장)
//     -> 작성 데이터나 메서드 템플릿에서 이용

//     ref: reffernce: 반응성을 가지는 형태데이터, proxy객체
//     x y가 바뀌면 다시 렌더링이 발생.

//     두개의 인자가 존재함.
//         1.부모 컴포넌트로부터 전달받는 props
//         2.컴포넌트 컨텍스트 (this에 해당하던 것.)

//     2) ref()함수를 이용한 상태 데이터 생성
//     -data옵션에 해당
//     -기본 데잍터 타입에 대한 반응성 데이터를 생성(숫자 ,boolean)

//     3) reactive()를 이용한 상태
//     -참조데이터 타입에 대한 반응성 데이터 생성 (배열과 객체)

//     4) ref : 기본타입의 값을 이용해 반응성을 가진 참조형 데이터 생성
//     해당 데이터를 사용할때는 x.value를 사용
//     const x = ref(10); 10은 proxy안에 들어감. {{x}} 수정시 x.value = 20; 랜더링 발생.
//     cosnt는 직접 또다른 대입 불가능. x=20, x=ref(2) 시 반응성을 잃음.

//     x, y, result를 모두 반응형으로 만들어줘야함.숫자.(primitive) ref사용.(데이터의 성격에 따라 ref, reacitve)

//     셋업은 외부함수, calcadd는 내부함수가 됨.

//     생명주기 : 함수가 호출되면 생성, 선언된 블럭이 끝나면, 함수가 사라지면 생명주기 끝
//     지역함수, 버튼 클릭시 호출이 되는데 어떻게 사용되는가>?

export default {
  name: 'calc2',
  setup() {
    const x = ref(10);
    const y = ref(20);
    const result = ref(30);

    const calcAdd = () => {
      result.value = x.value + y.value;
    };
    //         버튼을 클릭시 calcAdd를 실행하라. return.value가 실행됨 여기서 x,y는 누구인가?>
    //         객체라면 this, vm를 사용하지만 여기선 사용되지 않음.
    //         변수들이 사라진게 아니다.
    return { x, y, result, calcAdd };
  },
//   calc2가 세번이라면 setup이 3번 생기게 됨. 각각의 셋업에 독립적으로 생김. 


};
//     리설트도 벨류에 대입해줘야함. 모두 벨류값을 사용해야힘. const이기에,
//     let의 경우에는 result =20 가능하지만, 반응성을 잃어버림. 일반 변수가 되어버림.
//     바뀌어도 랜더링이 되지 않음.

//         setup()호출로 인해 scope(x, y, result, calcadd)가 만들어짐
//         다 객체들이기에 ref가  만들어짐.

//         return 값에 의해 ref 가 살아있고 안사라짐. 컴포넌트의 속성으로 이동하게 됨.

//     2. 내부함수 : 네임충돌을 막는방법
//         네임충돌이란 : ex)함수의 합을 만드는 함수를 만들시 add,sum 사용 but 먼저 이름 선점시에,,덮어써버림
//                     : 덧붙이는 것을 통해 구분이 가능해짐.(name spaace) 구분.

//         바깥의 sum과 내부의 sum 지역이 우선순위가 높음. (전역, 지역같은 방법)
//         내부함수는 name space를 만드는 역할. 외부에서는 내부함수 호출 불가능.

//     outer() scope outvalue 5678 -> function
//     inner() scope innervlaue(가 outer의 하위 스코프가 됨.)

// 아웃터가 호출시 scope객체가 생성됨. 호출시 생성, 함수가 끝나면 사라짐.
//  또 다시 호출시 socpe객체가 생김. 첫번째와 두번째가 다른 scope임.

// 이너 호출시 또 스포츠가 형성됨. 그데 outer 안에 있으며 outer의 호출로 생김.

//     stack 넣고빼는 곳이 한곳밖에 없음. 중간에서 불가능. 맨위 top 꺼내는 것을 pop이라고 함.
//     scope를 이런 식으로 관리, 브라우저의 히스토리 , 폰의 화면 관리

//     LIFO last input Fisrt Out

//     <stack>

//     inner       scope
//     outer       scope상위 함수

//     : inner가 pop되면 inner의 scope도 사라짐.

//     -->

// <!-- 2. 고급함수

//     함수를 매개변수로 전달.
// // -->
function outer() {
  return function () {
    console.log('hello Function');
    // 함수를 리턴해서 내부함수를 사용할 수있음. 참조를 return값으로 받기에 가비지가 아님.
  };
}
outer()();

var fn = outer();
fn();

// closer함수 : 지역 변수의 유효범위 . 리턴값에 함수가 있다. (환경을 닫는다 막는다. : )
// 지역변수는 함수 실행시 사라짐 안사라지게 하려면, 누군가 그 참조를 유지하면 됨.
// 매개변수도 지역변수임
function test(name) {
  var output = 'hello' + name + '..!';
  // 클로저의 경우 규칙 위반이 가능함.
  return function () {
    console.log(output);
  };
}
// 테스트를 통해 만들어지는 값을
var test_1 = test('node');
var test_2 = test('Javascript');
// 스택의 맨 아래에는 전역이 존재.
test_1();
test_2();
// 호출될때마다 스코프가 형성되기에 서로 다른 것임


// ref(), : 기본타입 데이터 , 스크립트 접근시 .value
// reactive() : 참조형을 다루는 데이터
import {reactive} from 'vue';

export defalult {
    name : 'calc3'
    setup() {
        const state = reactive({x:10, y: 20, result:30})
        // 참조형 ref로 쓰기도함 . 10개를 모두 업데이트 하려고할떄, state.x =......10개 써야함. 
        // 번거롭기 때문에 새로운 것으로 대체하는 것이 편함. 그러나 불가능 . 반응성x 
        // const s=ref({}), s.value={}
        // 통째로 변경시에는 ex로그인 상자 통째로 변경할시에 등등 편함. 즉 reactive는 많은 변경시 귀찮음.
    }
}

// computed()속성 : 옵션API에서 computed옵션에 해당. 함수가 매개변수로 전달. 반드시 값을 리턴해야함.
// 초기값 줄필요도 없음.

// watch: 형식 watch()함수를 통해 제공 

watch(data,(current,old) => {
    //변경시 (감시대상(현재새로운값,변경전의값) 처리하려는 로직
})
// data가 반응형 데이터이더라도, 순수한 값임.
// 비동기함수에서 함수 호출
// 쉽게 쓸수 있게 만든게 watchEffect(() => )
// computed와 유사하나(형태) 리턴값이 필요함, 그러나 watchEffect는 불필요.

// computed리턴값을 ㅌ통해 처리, watchEffect내부적으로 처리

// ref(), reactive() computed()기억필요

// 셋업으로 모두 거의 대체가 됨. 

// <script setip>을 추가함. 이 스크립트가 셋업내용에관한 것이다.
// 코드가 훨씬더 줄어들음. 무엇을 리턴할 것인가>?가 핵심임
// 컴포넌츠를 나열해야하는데 이것도 귀찮다. 

// 최상위의 변수 함수는 직접 템플릿에서 사용가능.
// 임포트만하면됨, components함수 불필요

setup(props, context) {
  context.emit('add-todo, todo')
}

const props = definProps({
  todoitem : { type : Object, required : true}
})
const emit = defineEmits([])







// TodoList App 리팩토링 1. setup 2. script setup  사용. script set업 선호

// this가 아니라 closer로 사용하기에 필요 없음 . 변수명이 state에 저장.

// script setup 기존과 다른점 : emit이 최상위이기때문에 그냥 cosnt emit과  템플릿의 emit이 같아짐.