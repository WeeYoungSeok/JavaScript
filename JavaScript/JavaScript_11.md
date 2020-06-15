### JavaScript

##### Random

- random number

```html
<h1>random number</h1>
number : <input type="text" id="rnum" readonly="readonly"/><br/>
<input type="button" value="난수 발생" onclick="randomNum()"/>
<!-- readonly는 읽기 전용 -->
```

```javascript
function randomNum() {
    var rnum = Math.floor(Math.random() * 14 + 4);
    document.getElementById("rnum").value = rnum;
}
```

>자바에서와 같은 random 기능이다.
>
>0.0 <= x < 1.0까지의 난수가 발생한다. 14를 곱하고 +4를 해줘서 범위는 4부터 18미만이다.
>
>floor라는 기능은 소수점을 버리는 기능이다.
>
>정수를 가지고 오기 위해서 floor라는 기능을 사용하였다.



- random backgroundColor

```html
<script type="text/javascript">

    function randomBgColor() {
        var rnum = function() {
            return Math.floor(Math.random() * 256);
            // 0부터 255까지의 난수
        }
        document.body.backgroundColor = "rgb(" + rnum() "," + rnum() + "," + rnum() + ")";
    }
</script>

<h1>random bgColor</h1>
<input type="button" value="랜덤 배경색" onclick="randomBgColor();"/>
```

> 난수 발생을 rgb값(0~255)까지 발생시켜 body의 bgColoe를 바꾸어주었다.



- random circle

```css
#circle{
    border: 1px solid blue;
    display: none;
}
```

```html
<h1>circle</h1>
<input type="button" value="원 만들기" onclick="circleView();"/>
<br/><br/><br/><br/><br/>
<div id="circle"></div>

<script type="text/javascript">

    function circleView() {
        var rnum = Math.floor(Math.random()*200 + 10);
        // 10부터 209까지의 난수 발생
        circle.style.width = rnum + "px";
        circle.style.height = rnum + "px";
        circle.style.borderRadius = Math.floor(rnum/2) + "px";
        circle.style.display = block;
    }
</script>
```

> 원의 표현을 위하여 border-radius css구문을 사용하였다.
>
> border-radius: top-left-x top-right-x bottom-right-x bottom-left-x / top-left-y top-right-y bottom-right-y bottom-left-y
>
> 설명을 보면 알다 싶이 8등분을 해서 깍아주는 것인데 우리가 처음에 만든 사격형이 width, height가 100px이면 8등분을해서 반만큼만 깍아주어야하니 나누기 2를한 50px만큼 깍아주어야한다.
>
> 위의 borderRadius값에 변수/2 하나만 넣어준 의미는 border-radius: aa aa aa aa / aa aa aa aa 이것과 동일하다.



- circle area, len

```html
<h1>circle area, len</h1>
<input type="button" value="원 문제" onclick="circleArea();"/>
circle area : <span id="area"></span><br/>
circle len : <span id="len"></span>
```

```javascript
function circleArea() {
    var circleWidth = document.getElementById("circle").style.width;
    // 앞서 코딩한 가로길이를 가져온다.
    
    var r2 = circleWidth.substring(0,circleWidth.length-2);
    // 그냥 계산해도되지만 px를 짜르기위해서 substring 사용
    
    var r = Math.floor(r2/2);
    // 반지름
    
    var area = Math.PI * Math.pow(r,2);
    // Math.PI는 원주율, Math.pow(a,b);는 a의 b승
    
    var len = Math.PI * r2;
    
    document.getElementById("area").innerHTML = Math.round(area);
    document.getElementById("len").innerHTML = Math.round(len);
    // Math.round는 반올림 기능이다.
}
```



