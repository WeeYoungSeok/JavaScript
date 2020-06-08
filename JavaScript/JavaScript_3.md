### JavaScript

##### window 객체에서 제공하는 대화형 함수

- alert() 

  > 경고, 코드 디버깅, 단순 출력

```javascript
function alertTest(){
    alert("단순 대화창 (내용 출력)");
}
```

```html
<script type="text/javascript" src="resources/js/func01.js"></script>
<p>
    alert() <button onclick="alertTest();">클릭</button>
</p>
```



- confirm

  > 확인/취소 버튼 제공(true/false)

```javascript
function confirmTest(){
    if(confirm("배경을 파랑으로 변환?(확인 : 하늘색, 취소 : 하얀색)")){
        document.body.style.backgroundColor="skyblue";
    } else {
        document.body.style.backgroundColor="white";
    }
}
```

```html
<script type="text/javascript" src="resources/js/func01"></script>
<p>
    confirm() <button onclick="confirmTest();">클릭</button>
</p>
```



- prompt()

  > 텍스트박스 제공, 확인/취소 버튼 제공 -> 확인 버튼 : 텍스트 / 취소 : null

```html
<script type="text/javascript">
	function promptTest(){
        var txt = prompt("좋아하는 과목 선택\n[1.Java, 2.DB, 3.web]");
        
        switch(txt){
            case "1":
                alert("Good Java!");
                break;
            case "2":
                alert("Good DB!");
                break;
            case "3":
                alert("Good web!");
                break;
            case null:
                alert("cancel T__T");
                break;
            default:
                alert("1, 2, 3 choice");
        }
    }
</script>

<p>
    prompt() <button onclick="promptTest();">클릭</button>
</p>
```





