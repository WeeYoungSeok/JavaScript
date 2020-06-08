### JavaScript

- alert

  > 우리가 인터넷을 하다보면 흔히 볼 수 있는 경고창, 확인창, 등등을 표현할 수 있다.

- onclick

  > 자바스크립트에서 on이라는 명칭이 붙으면 자바스크립트라고 생각하면된다. 또 on이 붙으면 어떠한 이벤트가 발생한다라고 생각하자!



- 작성방식

  > 자바스크립트는 css와 동일하게 내부, 외부, 인라인 작성 방식이 있다.



- inline 작성 방식

```html
<li onclick="alert('inline 방식으로 실행됨!')">inline 방식</li>
<!-- onclick안에 인라인 방식으로 작성하면 자바스크립트 명령이 실행됨 -->
<!-- alert 씉에 세미콜론을 붙여도되지만 요즘 나오는 언어or프로그램은 거의 안씀 -->
```



- 내부 작성 방식

```html
<script type="text/javascript">
	function embededTest(){
        var doc = document.getElementsByTagName("li")[1];
        doc.style.color="red";
        doc.innerHTML = "<strong>글자가 바뀌었습니다!!</strong>";
    }
</script>

<li onclick="embededTest();">내부 작성 방식</li>
```

> function함수는 자바에서 메소드와 같은 역할을 한다 (조금 다름)
>
> javascript에서는 변수타입을 var로 통일한다.
>
> document.getElementsByTagName(태그)[번지]는 html문서에서 내가 가지고 오고 싶은 태그를 의미하며 그 태그들은 하나만 존재하지 않기 때문에 Elements라고 s를 붙여 여러개의 Elements로 받고 여러개이면 배열의 형태로 받는다. 첫번째는 0번지 다음부터 1 이렇게 배열의 인덱스 번지가 증가한다.
>
> style.color는 onclick시 색을 바꾸어준다.
>
> innerHTML은 onclick시 내가 지정한 곳의 글씨가 내가 변경하는 글씨로 변경된다.



- 외부 작성 방식

```html
<script type="text/javascript" src="resources/js/basic.js"></script>

<li onclick="test()">외부 작성 방식(*.js)</li>
```

```javascript
function test(){
    window.alert("외부 작성 방식!!");
}

window.onload=function(){
    alert("윈도우 로딩 후!!!!!")
}
```

> 외부 작성 방식은 type을 선언해준 뒤 src로 js파일경로를 추적해 가져오는 방식이다
>
> ***외부 작성 방식시에 절대로 script사이에 어떠한 명령문도 적어서는 안된다***
>
> window는 윈도우가 가진 alert이라는 함수 (window는 생략 가능)
>
> 두번째의 window.onload는 익명 함수이다. 로드되는 이벤트가 발생했을때 함수를 실행해주세요 그래서 새로고침시 윈도우 로딩 후!!!!!라는 경고창이 뜬다.