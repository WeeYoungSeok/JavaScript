### JavaScript

##### location

> 페이지에 관련된 기능들이다

```html
<a href="http://www.naver.com">페이지 이동</a>
<button onclick="locTest();">이동</button>
```

```javascript
function locTest() {
    location.reload();
    location.href="http://www.naver.com";
    location.assign("http://www.google.com");
    location.replace("http://www.daum.net");
}
```



- location.reload()

  > 클라이언트 서버에게 다시 요청한다. (새로고침)

- location.href=""

  > 페이지 이동

- location.assign("")

  > 페이지 이동 ( href와 같은 기능 )

- location.replace("")

  > replace는 페이지를 이동시켜준 뒤 전단계 페이지의 이력을 없애준다.
  >
  > ex) naver -> google -> daum(replace로 이동)하면 google의 기록은 없어진다.