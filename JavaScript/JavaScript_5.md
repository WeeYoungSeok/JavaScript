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
			<a href="http://www.naver.com" onclick="return prevGallery();">
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
>
> onclick return prevGallery 부분을 보면 원래 prevGallery부분을 실행하면 naver라는 홈페이지로 이동을 해야한다. 하지만 prevGallery함수가 false를 반환하기때문에 onclick 이벤트가 발생하는 순간 함수에서 전 그림을 보여주고 false라는 명령어때매 onclick부분이 return false로 바뀐다
>
> 실행순서가 onclick 이벤트가 발생하면 onclick이 먼저 실행되고나서 href가 실행되는데 fasle를 리턴받아서 return false가 되어버려서 href를 실행하지 않는다.
>
> href에 없는 페이지나 자신의 페이지로 할 경우는 return이 없어도 정상적으로 그림이 바뀐다.
>
> 이 부분은 자신이 코드를 계속 바꿔보면서 실행해보는 것이 중요하다.
>
> onclick 부분에 return은 명령어라서 공백부분이있어도 retrun을 내부적으로 받고나서 함수를 실행한다.