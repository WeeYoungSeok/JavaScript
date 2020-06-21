### JavaScript

##### dom

- 부모 탐색

  > 자신의 태그의 부모를 탐색한다.
  >
  > > parentNode로 검색할 수 있다.

```html
<h1>부모탐색</h1>
<div>
    <p>child01</p>
    <p>child02</p>
    <p>child03</p>
</div>
<button onclick="searchPar():">부모탐색</button>
```

```javascript
function searchPar(){
    var p = document.getElementByTagName("p")[1];
    var div = p.parentNode;
    div.style.backgroundColor = "green";
}
```

> p를 태그네임으로 가져와 변수에 담은 뒤 그 p의 부모를 parentNode로 검색하였다.
>
> div에는 현재 div태그가 담겨져있고 버튼 클릭시 div영역이 green으로 바뀐다.