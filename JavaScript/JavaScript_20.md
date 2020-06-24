### JavaScript

##### 다음 이미지, 이전 이미지



```css
img{
    vertical-align: middle;
    width: 300px;
    height: 300px;
}

a{
    font-size: 50pt;
    text-decoration: none;
}
```

```html
	<div>
		<a href="#" id="lt">◀</a>
		<img alt="image00" src="resources/image/image00.jpg"/>
		<a href="#" id="rt">▶</a>
	</div>
```

```javascript
onload=function(){
    // 페이지로드시 html문서를 전부 읽어들인 후에 실행됨
    var anchs = document.querySelectAll("a");	//a의 태그를 전부 가져옴( nodelist 형태 )
    var img = document.querySelector("img");
    var count = 0; // 이미지의 번호를 증가시키기 위한 변수
    
    anchs[0].onclick=function(){	// a태그의 0번지 클릭시 실행되는 함수
        var imgAlt = img.getAttribute("alt");	// get으로 원하는 태그의 속성을 가져오기
        
        if(imgAlt == "image00") {
            count=6; // 보이는 이미지의 alt가 image00일때 count를 6으로 초기화
            		 // 마지막 사진의 파일명이 image06.jpg임
            img.setAttribute("alt", "image06");	// alt의 속성의 값을 바꿔줌
            img.setAttribute("src", "resources/image/image06.jpg");
            // src의 경로를 마지막 사진으로 바꿈 
        } else {	// 보이는 사진이 image00 이외라면
            img.setAttribute("alt", "image0" + (--count));
            img.setAttribute("src", "resources/image/image0" + count + ".jpg");
            // count 변수를 1감소시켜서 alt의 속성을 바꾼 뒤
            // 1 감소된 count변수를 src에 사용
        }
    }
}
```

