### JavaScript

##### 이미지 클릭해서 생성하기



```css
img, #imgView{
    width: 300px;
    height: 300px;
}
```

```html
	<input type="radio" name="rdoBtn" value="image00.jpg"/>그림1<br/>
	<input type="radio" name="rdoBtn" value="image01.jpg"/>그림2<br/>
	<input type="radio" name="rdoBtn" value="image02.jpg"/>그림3<br/>
	
	<button onclick="createImg();">이미지 생성하기</button>
	<button onclick="deleteImg();">이미지 삭제하기</button>
	
	<div id="imgView"><img src=""/></div>
```

```javascript
function createImg(){
    var rd = document,getElementsByName("rdoBtn");
    for(var i = 0; i < rd.legnth; i++) {
        if(rd[i].checked){	// 라디오버튼 체크 유무 확인
        var src = document.createAttribute("src");
        src.nodeValue = "resources/image/" + rd[i].value;
        // src 속성 생성
        // src 속성에 이미지 경로 추가하면서 rd의 벨류 가져오기
        }
    }
    
    var img = document.createElement("img");
    // img태그 생성
    
    img.setAttributeNode(src);
    // img 태그 만들어진 곳에 for문에서 만들어준 src속성 추가
    
    var div = document.getElementById("imgView");
    var chd = document.querySelector("#imgView > img");
    // div태그 중 id가 imgView인 자식의 img태그
    
    div.replaceChild(img, chd);
    // 위에서 새로 만들어준 img태그와 기존에 있던 img태그와 교체
}
```

