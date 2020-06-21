### JavaScript

##### check

```css
#colorbox{
    width: 320px;
    height: 320px;
    position: relative;
}
#red, #green, #blue, #yellow{
    width: 150px;
    height: 150px;
    border: 1px solid black;
    position: absolute;
}
#green{
    left: 160px;
}
#blue{
    top: 160px;
}
#yellow{
    left: 160px;
    top: 160px;
}
```

```html
<div id="colorbox">
    <div id="red">red</div>
    <div id="green">green</div>
    <div id="blue">blue</div>
    <div id="yellow">yellow</div>
</div>

<div id="base">
    <form>
     <input type="checkbox" name="all" onclick="allsel(this.checked);"/>전체 선택
        <br/>
        <input type="checkbox" name="chk" value="red"/>빨강<br/>
        <input type="checkbox" name="chk" value="green"/>초록<br/>
        <input type="checkbox" name="chk" value="blue"/>파랑<br/>
        <input type="checkbox" name="chk" value="yellow"/>노랑<br/>
        
        <input type="button" value="선택" onclick="sel();"/>
        <input type="button" value="초기화" onclick="clearDiv();"/>
    </form>    
</div>
```



```javascript
function allsel(check){
    var chks = document.getElementsByName("chk");
    
    for(var i = 0; i < chks.length; i++){
        chks[i].checked = check;
    }
}
```

> 현재 allsel의 아규먼트로는 this.checked가 들어가있다.
>
> 이 뜻은 name이 all인 체크박스를 체크하면 checked 속성이 true가 되면서 this.checked 부분에 true가 들어가게된다.
>
> 코드에서는 name이 chk인 체크박스를 하나씩 가져와서 allsel이 체크되었을때 true값을 하나하나 넣어줘서 allsel() onclick 이벤트가 일어날때 chk도 전부 하나씩 체크가 된다.
>
> checked 값으로는 true나 "값" 아무 문자열이나 넣어주면 true가 된다.
>
> 파라미터의 check는 allsel에 의하여 바뀌게 된다.



```javascript
function sel(){
    var chks = document.getElementsByName("chk");
    
    for(var i = 0; i < chks.length; i++){
        if(chks[i].checked){
            document.getElementByid(chks[i].value).style.backgroundColor = 				chks[i].value;
        } else {
            document.getElementByid(chks[i].value).style.backgroundColor = "";
        }
    }
}
```

> 위의 코드는 체크박스를 선택하고 선택 버튼을 누르면 해당 div 영역이 색이 바뀌는 코드이다.
>
> html문서에서 div 영역의 id를 checkbox value의 값과 동일하게 주어서 id값을 가져올때 저런식으로 가져온 것이다.



```javascript
function clearDiv(){
    var chks = document.getElementsByName("chk");
    
    for(var i = 0; i < chks.length; i++){
        chks[i].checked = false;
        document.getElementByid(chks[i].value).style.backgroundColor = 				"";
    }
    document.getElementsByName("all")[0].checked = false;
    // allsel(false);
}
```

> 초기화 했을떄 배경색 없애고 체크도 해제해주는 코드이다.
>
> for문을 돌며 하나하나 체크해제를 해주어도되고 하나하나 일일히 해주지말고 전체체크 해제를 해주고나서 allsel 함수를 불러와 false로 나머지 체크박스도 해제해주면 된다.

