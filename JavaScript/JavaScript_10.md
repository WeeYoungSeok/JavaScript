### JavaScript

##### window.onload

```javascript
onload=function() {
    // window.onload에서 window는 생략 가능
    document.getElementsByTagName("button")[0].onclick = testDate01;
    document.getElementsByTagName("button")[0].onclick = testDate02;
    document.getElementsByTagName("button")[0].onclick = testDate03;
    document.getElementsByTagName("button")[0].onclick = testDate04;
}
```

> 버튼을 눌러 이벤트를 발생시키면 함수를 콜해서 그 함수가 백 된다.(콜백함수)
>
> 콜백함수는 호출할때 ()없이 호출한다.
>
> window.onload는 브라우저가 현재 텍스트 문서를 다 읽어드린 후에 onload 함수가 실행된다.
>
> 클라이언트가 서버에 요청을 한다 (새로고침)



##### date

- 현재 날짜

```html
<h2>tody</h2>
<span id="today"></span>
<button>오늘 날짜</button>
<button>오늘 날짜 표현</button>
```

```javascript
function testDate01() {
    var inputDate = document.getElementById("today");
    var date = new Date();
    
    inputDate.innerHTML = date.toDateString() + "<br/>";
    // 현재 요일 월 일 년
	inputDate.innerHTML += date.toLocaleDateString() + "<br/>";
    // 현재 년. 월. 일
	inputDate.innerHTML += date.toLocaleString() + "<br/>";
    // 현재 년. 월. 일. ampm 시:분:초
	inputDate.innerHTML += date.toLocaleTimeString() + "<br/>";
    // 현재 ampm 시:분:초
}
```

> new연산자를 통해 오늘 날짜의 객체를 받아온다.
>
> 