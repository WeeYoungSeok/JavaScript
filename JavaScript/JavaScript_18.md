

### JavaScript

##### 엘리먼트 생성하기



- 엘리먼트 객체 생성하기

  > createElement("TagName");

- text객체 생성하기

  > createTextNode("Text내용");

- 객체 속성 추가하기

  > createAttribute("AttributeName");

- 속성 추가

  > setAttributeNode(Attribute);
  >
  > setAttribute("AttributeName", "value");



```html
<button onclick="eleCreate();">엘리먼트 생성하기</button>
```

```javascript
function eleCreate(){
    var div = document.createElement("div");
    // <div></div> 생성
    
    // 속성 추가 1
    var attr = document.createAttribute("style");
    // style="" 생성
    
    attr.nodeValue = "border: 2px solid blue";;
    // style="border: 2px solid blue"; 생성
    
    div.setAttributeNode(attr);
    // <div style="border: 2px solid blue"></div> 최종 생성
    
    // 속성 추가 2
    // div.setAttribute("style", "border: 2px solid red");
    
    // 텍스트 추가
    var txt = document.createTextNode("생성된 div element");
    // "생성된 div element" 텍스트 생성
    
    div.appendChild(txt);
    // div 하위요소로 추가
    
    documentbody.appendChild(div);
    // body 하위요소로 추가
    
}
```

> 실질적으로 html문서에 저장되어서 추가되는 기능은 아니다.
>
> 개발자도구에서는 요소에 추가가 된다.( 서버에게 재요청시 삭제 됨 )