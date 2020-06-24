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



- 자식 탐색

  > 자신의 자식들을 탐색한다.
  >
  > > childNodes로 검색할 수 있다. ( 자식의 갯수는 몇개인지 모르므로 배열형태가 됨 )

```html
<h1>자식탐색</h1>
<div>
    <p>child01</p>
    <p>child02</p>
    <p>child03</p>
</div>
<button onclick="searchChi():">자식탐색</button>
```

```javascript
function searchChi(){
    var div = document.getElementsByTagName("div")[0];
    
    var divChi = div.childNodes;
    divChi[5].style.backgroundColor="skyblue";
    // alert(divChi[4].nodeName);
}
```

> 여기서 중요하게 집고 넘어갈것이 있다.
>
> div자식은 p태그 3개로만 이루어져 있는데 [5] 의 색을 skyblue로 바꾸면 child03의 배경색이 바뀌게된다. 그 이유는 childNodes는 엔터의 공백까지 자식으로 인식하기 때문이다.
>
> alert(divChi[4].nodeName); 이것은 출력이 #text로 출력된다.