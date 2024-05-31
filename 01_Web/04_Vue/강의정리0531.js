// 1. Vue_router를 이용한 라우팅
// 길을 찾아주는 느낌. 문자,-보를 바로 처리하는 것이 아니라 토스하는 것인데 어디로 할것인가? : 길을 찾아줌, 라우트 route 결정해주는 것을 router
// 데이터베이스를 갖고 있으며 최적의 경로로 라우팅해줌. 정보를 자신이 처리하는 것이 아니라 대상을 정하고 넘기는 역할
// 어떤정보? 누구에게? 라는 데이터를 가지고 있어야함 = 정보구성방법 url에 관련. (실전에서 반드시 쓰임)
// 프로젝트 전반부에 사용하게 됨. 

// SPA :단일페이지 어플리케이션(웹서비스 제공)
// 한페이지 안에서 별로도 로딩하지 않음.(여러개의 HTml을 운영하지 않음)->index.html사용(첫번째 페이지를 말하는 일반적인 명칭, 파일명 생략하기도)
// 192.0.0.1:3000/(index.html)
// vue-router를 사용. 확장개념임 추가설치필요

import {createRouter, createWebHistory} from 'vue-router';

const router =  creatRouter({
    history: createRouter
    routes:[
        {path:'/', components: Home}
        {path:'/about', components: Home}
        {path:'/member', components: Home}
        {path:'/', components: Home}
    ]
})

const app =createApp(App)

// 2. 기본 사용법
// RouterView : 각 경로별 컴포넌트를 렌더링할 위치를 지정하느 컴포넌트. (헤더 메뉴 푸터는 바뀌지 않는 경우가 많음 -> 해당url이 왔을때 어느 컴포넌트인지는 나타나있음.)
// 화면상에 어디에서 나타나야하는가? 위치의 개념(slot(자식의 위치 어디에 넣을것인가)과 비슷)
// 페이지 매핑에 의한 컴포넌트를 어디에 위치할 것인가?

<template>
    <div class="container">
        <Header/>
        <RouterView>
    </div>
</template>

{/* 이제는 a태그를 사용하지 않음. */}
{/* a href=url는 기존 html을 버리고 새로운 것을 가져와라 라는 의미이기 때문임. 기존의 앱은 클리어가 되고 다시 시작하게 됨.*/}

{/* 쓰더라도 href="#" 

a tag default action은 @click.prevent를 써줘야함. => 대체기능이 필요. RouterLink to(href와 같은 역할) =""

모듈명은 router가 됨. index.js또다른 파일을 배정해도 상관은 없음.
/모듈1/
view 페이지를 담당하는 components 
views => ,<RouterView>에 사용
*/}

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
{/* // 주로 편집하는 곳은 router */}
{/* url한개당 route객체 하나를 배정함. 객체 형태로 배정
1. path어느 url사용
2. name 임의로정함 option
3. component  */}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // 어느 url, 이름, component에서 차이가 있음. 함수가 배정되어 있음. 
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    //   람다함수, import 차이점 : homeview는 위의 문장이 실행될때 임포트가 됨. = 프로그림 기동할때 발생. 
    //  위의 경우 쓰지도 않을 것을 미리 로드하여 쓸데가 없음.
    // 아래는 요청이 들어오면 작용.(실제 요청까지 임포트를 미룸.)
    // 아래으 기법이 더 많이 사용함. home만 위의 방법 사용.
    }
  ]
})

export default router
{/* 이렇게 만든 라우터를 export함. 아직연결은 안됨. main.js에서 연결 */}
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
{/* 라우터는 디렉토리명, "./router/index.js" */}
{/* import router 는 export default를 받겠다는 뜻. 중괄호를 안씀. */}
const app = createApp(App)

app.use(router)

app.mount('#app')


<script setup>
import { RouterLink, RouterView } from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
{/* 메뉴링크에 해당되는 부분 */}
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
{/* 해당 url을 어디에 보여줄 것인가? */}
  <RouterView />
</template>


{/* <RouterView>pascal <router-view> kebab



a class="nav-link"가 to로 대체됨. 

to="" 그냥 HTML로 문자열이 됨. 문자열로 봐야함. 
:to="" V-bind 자바스크립트의 표현식이 됨. 그때그때 링크의 목적지를 변경가능.

ref() primitive
reactive() 객체, 참조타입에 대해서
둘다 반응형으로 데이터옵션객체를 만듦

isNavShow : false 펼치지 마라.

그놈의 script setup.. 

개발자모드 network서버와 어떤 통신을하는가?

페이지 바꿔도 아무런 변화가 없음. 
처음에 필요한 정보를 다 받았기 때문임. 관련 html script
build시키면 하나만 나옴.

*/}


{/* 3. router, currentRoute객체

:자바스크립트에서 프로그램에서 이동해, 사용자의 지시에 의해 이동하는 것이 아닌 상황 발생에 따른 대응하는 페이지 이동.
js code에서 일어남. 

export default 

this.$router

const router = useRouter()
const currentRout = useRoute()  현재 라우트 항목을 보겠다. 
(path)
/about?xx=xx&xx=xx    form요소 값, queny문자열

matched 매치된 route 객체가 무엇인가? currentRoute
query {a:1, b:2}   ?a=1&b=2 이 1,2를 숫자로 해석?문자로 해석? =알 수없음.
정수로 사로용 palseInt로 변환해주고 사용.
redirectedFrom
클라이언트가 정보를 달라고 서버에 요청. 그런데, 그래ㅓㅅ url이 바겼는데 다른 곳으로 이동시켜야한다면?
너 지금 요청한거 이런 상황때문에 다른 곳으로 가야해, request, 서버가 제안


보간법 -바인딩 : 어떤상태로 결정이되다. 과정,결과
*/}



















{/* 1. 동적 route
: 동적(변화) url 경로상에서 일정패턴으로 바뀐 부분이 존재. 
/members/1001
/members/1002
/members/1003.... 개개인 모두 등록이 아닌, 변수 처리함
*/}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {pahte: '/members/:id', component : MemberInfo}
    ]                   
})
{/* :id 동적파라미터, 실체정보는 어디서 필요한가? memberInfo에 필요함. 
    currentRoute에 포함되어있음. currentRoute.params에 포함됨.


xxxx?a=b; c=d


    query ?a=b; c=d 
    .params xxxxx

전달하는 데이터. 

실제 객체로 포함됨. 
default는 문자. url이기에,, 당장은 모르고 개발자의 의도에 따라 해석하기 나름임.





JASON : javascript object notation 자바스크립트 객체표기방법

실체 : 문자열, 자바스크립트처럼 표기를 하겠다.
html markup: 컨텐츠에다가 알려주기위해 태그를 사용함. 컴퓨터는 파악이 안됨.
https 구조화된 것을 표기하는 방법ㅂ으로로로

표준화된 기법임.

jacascript객체 {'name":'홍길동'...} 문자열 자체는 구조화 된 것이 아님 직렬화

제이슨 유형 : 함수빼고 다 올 수 있음.

*/}
{/* 전송전 */}
let obj = {
    influencer : {
        name: jaxon,
        age : 42,
        city : "New York"
    }
}
{/* JSON문자열 */}
let str = JSON.stringify(obj)
{"inflencer" : {"name" : "jaxon", "age" : 42, "city" : "New York"}}

{/* 역직렬화. JSON문자열을 javascript객체로 변환하는 것.  */}

let '{"influencer": {"name": "Jaxon","age":42, "city":"New York"}}'

let obj - JSON.parse(str) {
    influencer: {
        ....
    }
}
{/* 수신 후에  */}




{/* 직렬화 역 직렬화 작업

form 요소 데이터의 인코딩 방식

Application/JSON
-Javascript로 전송할때 사용
{키1:값, 키2:값...}


대상을 지칭해야만 하는 것이 존재. 
*/}

setup() { 
const currentRoute = useRoute()
const id = parseInt(currentRoute.params.id, 10)
const member = members.find((m)=>m.id === id)
return {member}     
}
{/* true가 리턴되면 끝,  

어떤ㅁ 맴버는 주소 여러개, 없는사람도 있음. =v-if
JS : ""false

a tag
:href 사용한 이유, 이동할 곳이 우리 app이 아니기 때문에.

콜론.......


CRUD 목록, 하나보는거



*/}












{/* 라우터 객체의 메서드

useRouter(); /src/router/index.js


go(n) n번만큼 현재를 기준으로 이동

<route-link>
push 스택에 데이털르 넣을때,
replace 추가하지말고 기존의 팝을 교체해라. 
화면이 바뀐다는 사실은 둘다 똑같음. back했을때가 다름.


*/}



{/* SUMMARY */}
{/* 

아예 다른 페이지로 전환해야할때 routing사용. 컴포넌트는 페이지 전환에 써먹으려고 쓰는것이다. 
이유 : 라우터라는 라이브러리라는 것을 설치했기 때문임. 

페이지도 컴포넌트, 

:to ="", route push
1. 클릭이 발생헀을시, 
2. 클릭이 아니더라도 router
코드로 보낼때~~~




시간단위로 끊어서 일을하면 그에 따른 휴식과 더불어 시간당 개발의 능력을 확인할 수 있음.



*/}