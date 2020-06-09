### JavaScript

- rolling

```html
<script type="text/javascript">

    var num=1;
    function prevGallery(){
        num--;
        if(num < 0){
            num=6;
        }
        document.getElementById("gallery").src="resources/img/img0"+num+".jpg";
        return false;
    }
    function nextGallery(){
        num++;
        if(num > 6) {
			num=0;
            }
        document.getElementById("gallery").src="resources/img/img0"+num+".jpg";
		return false;
    }
</script>

<div id="galleryWrap">
		<p>
			<a href="http://naver.com" onclick="return prevGallery();">
				<img alt="이전그림" src="resources/image/arrowleft.png"/>
				</a>
				
				<img id="gallery" alt="그림"src="resources/image/img00.jpg"/>
				
				<a href="#next" onclick="nextGallery();">
					<img alt="다음그림" src="resources/image/arrowright.png"/>
				</a>
		</p>				
	</div>
```

> 다음버튼을 눌렀을때 다음 사진이 나오고 이전 버튼을 눌렀을때 이전 사진이 나오게 한다.
>
> 사진은 image00부터 06까지 있다.