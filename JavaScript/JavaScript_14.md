### JavaScript

##### popup

> 팝업이란?
>
> 사용자가 페이지에서 클릭 이벤트를 발생했을때 새롭게 보여주는 창을 일컷는다.



- window.open

```html
<!-- js13.popup02.html -->
<h1>팝업이다!</h1>
```

```javascript
function popup() {
    window.open("js13_popup02.html","","width=300px", "height=300px");
}
```

```html
<button onclick="popup();">팝업!</button>
```

> window.open의 작성방법으로는
>
> open(파일, 이름, 옵션) 이렇게 작성한다. 이름과 옵션은 생략이 가능이다.
>
> 옵션같은 경우에는 생략하면 크기는 최대 크기로 설정된다.
>
> 현재 페이지에서 팝업으로인해 새롭게 요청된 페이지는 현재 페이지의 자식 페이지이다.