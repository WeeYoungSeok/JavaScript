### JavaScript

##### 태그 추가

```html
<h1>태그 추가하기</h1>
	
	<button onclick="addAppend();">appendChild()</button>
	<button onclick="addBefore();">insertBefore()</button>
	<button onclick="moveElement();">엘리먼트 이동</button>
	
	<fieldset id="addElem">
		<legend>부모 태그</legend>
		<div>div 태그</div>

	</fieldset>
```

```javascript
function addAppend(){
    var p = doument.createElement("p");
    p.textContent = "자식태그들 중 가장 마지막에 붙여넣는다.";
    // 전에 배운 createTextNode로 추가해서
    // 만들어준 p태그에 넣어주는 방식보다 간단한 방식이다
    // <p>자식태그들 중 가장 마지막에 붙여넣는다.</p> 생성
    
    var fieldSet = document.getElementById("addElem");
    fieldSet.appendChild(p);
}

function addBefore(){
    var p = document.createElement("p");
    p.textContent = "엘리먼트의 앞에 붙여넣는다.";
    
    var fieldSet = document.getElementById("addElem");
    var div = document.querySelector("fieldset > div");
    
    fieldSet.insertBefore(p , div);
    // fieldSet이 가지고있는 div태그의 앞에 p태그를 붙여준다.
}

function moveElement(){
    var moveElem = document.querySelector("fieldset").children[1];
    // fieldset의 자식요소중 1번지에 있는 자식( 2번째 )
    
    var addElem = document.body;
    
    addElem.appendChild(moveElem);
    // body의 마지막 요소로 옮김
}
```

