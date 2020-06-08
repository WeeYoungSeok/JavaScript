### JavaScript

- 변수

  > 변수 선언 규칙

  > 대소문자 구분
  >
  > 영문, $ ,_로만 시작 가능
  >
  > 영문, $ , _, 숫자를 포함할 수 있음
  >
  > 키워드나 예약어를 사용할 수 없음.



##### 변수 범위

- 전역 변수 : window 객체에 포함되는 변수. 다른 함수들에서 공용으로 사용할 수 있다.

  값이 유지됨.

```html
<script type="text/javascript">
    var variable01 = 10;
    
	function test01(){
        variable01 = variable01 + 5;
        document.getElementById("v01").innerHTML = "<b style='color: red; background-color: yellow;'>" + variable01 + "</b>"";
    }
</script>

<button onclick="test01();">확인</button>
<dd id="v01"></dd>
```

> 전역변수 10을 가져와서 5를 더해서 variable01에 담아줌.
>
> 전역변수라서 다른 함수내부에서 선언가능.
>
> 이 함수를 한번 실행해도 전역변수는 그대로 +5된 값으로 값이 유지됨. 계속 클릭시 +5씩 증가.



- 지역 변수 : 함수나 객체 내부에 선언되고 실행이 종료되면 사라짐

```javascript
function test02(){
    variable02 = variable02 + 100;
    document.getElementById("v02").innerHTML = '<b style="color: red; background-color: yellow;">' + variable02 + "</b>"";
}
// 싱클 쿼테이션과 더블 쿼테이션이 바뀌어도 됨 
// 문자열안에 문자열을 사용할때 더블과 싱글을 번갈아가면서 사용해야함
```

```html
<button onclick="test02();">확인</button>
<dd id="v02"></dd>
```

> 전역변수는 variable01의 숫자에 100만 더하고 값이 계속 변경이 안됨.
>
> 한번 실행되면 값이 사라짐? 이라고 생각해도 됨.



##### 변수 선언 및 저장

- var 키워드를 사용하여 변수 선언
- 변수의 타입은 저장되는 타입에 따라 결정됨



###### 타입의 종류

- 문자(String)

```html
<script type="text/javascript">
	function test03(){
        var val = "Hello,World";
        alert(typeof(val));
    }
</script>

<button onclick="test03()">확인</button>
```



- 숫자(number)

```html
<script type="text/javascript">
	function test03(){
        var val = 5;
        alert(typeof(val));
    }
</script>

<button onclick="test03()">확인</button>
```



- 논리(boolean)

```html
<script type="text/javascript">
	function test03(){
        var val = true;
        alert(typeof(val));
    }
</script>

<button onclick="test03()">확인</button>
```



- null

```html
<script type="text/javascript">
	function test03(){
        var val = null;
        alert(typeof(val));
    }
</script>

<button onclick="test03()">확인</button>
```

> null은 값이 없는게 맞지만 타입은 **object**이다



- 객체(object)

```html
<script type="text/javascript">
	function test03(){
        var val = [1,3,5,7,9];
        alert(typeof(val));
    }
</script>

<button onclick="test03()">확인</button>
```



- 함수(function)

```html
<script type="text/javascript">
	function test03(){
        var val = function(){
            console.log("타입 변환");
            alert("함수도 값이 된다.");
        }
        alert(typeof(val));
        // val(); 함수 실행
    }
</script>

<button onclick="test03()">확인</button>
```

> 자바스크립트에서는 함수도 값이 될 수 있음
>
> 자바로 이야기하면 메소드가 값이 되는것 (but 자바에서는 메소드가 값이 될 수 없음)
>
> 리턴값 함수가능, 함수안에 함수 사용 가능
>
> 자바스크립트에서 변수에 함수를 넣어줄 경우 그냥 alert을 실행하게되면 함수값이 그대로 출력됨. 위에서 val를 찍어보면 function(){
>             console.log("타입 변환");
>             alert("함수도 값이 된다.");
>         } 이거 자체가 나오게된다.
>
> 하지만 val(); 이렇게 하게되면 val안에 있는 함수들이 실행이 됨
>
> 자바스크립트에서 변수에 함수값을 넣을 경우 그 함수를 실행하기 위해서는 변수 다음에 ()를 붙여주어야한다. ()는 함수를 실행한다라는 의미
>
> 이것은 다음장에서 더 자세히 다루겠다.