### JavaScript

##### 함수의 종류

- 명시적 함수

  > 일반적으로 쓰이는 함수

```html
<style type="text/css">
    p{
        cursor: pointer;
    }
</style>
```

```html
<script type="text/javascript">
	function func01(){
        alert("명시적 함수!!");
    }
</script>

<p onclick="func01();">명시적 함수</p>
```



- 익명 함수

```html
<script type="text/javascript">
	var func02 = function(){
        alert("익명 함수!!");
    }
</script>

<p onclick="func02();">익명 함수</p>
```

> 익명 함수는 변수에 함수를 담아준 것 (함수의 이름이 없음)
>
> func02는 그냥 변수이므로 alert(func02)를 실행하면 그냥  function(){
>         alert("익명 함수!!");
>     } 이거 자체가 출력이됨
>
> 그래서 func02 변수 안에있는 함수를 실행해주기 위해 onclick에서 ()를 붙여 함수를 실행함



- 리터럴 함수

```html
<script type="text/javascript">
	function myLiteral(literal){
        literal("Hi Function");
    }
    
    function func03(){
        myLiteral(function(msg){
            alert(msg);
        });
    }
</script>

<p onclick="func03();">리터럴 함수</p>
```

> 리터럴 함수는 함수를 불러와 아규먼트로 함수를 쓴 함수를 말한다.
>
> **설명**
>
> 파라미터 한개를 받는 myLiteral 함수를 func03 함수에서 불러온 뒤 아규먼트 값으로 익명 함수를 넣어준다. 
>
> 그렇게 되면 literal이라는 파라미터가 function(msg){alert(msg);} 이것으로 바뀌게 된다. 
>
> 그렇다면 이 익명 함수는 현재 실행을 할 수 없는 상태이다 왜냐하면 그냥 값이기 때문이다. 
>
> 우리가 계속 배워왔듯이 함수를 실행해주기 위해서는 괄호가 필요하다.
>
>  괄호를 붙여 함수를 실행해주어야하는데 그냥 괄호를 붙이게되면 msg의 파라미터에 아무것도 안들어가 undefined가 출력이 되어버린다. (아무값도 없다는 뜻)
>
> 결국 함수의값에 파라미터가 존재하는 경우에는 ()를 붙여 함수를 실행할때도 괄호안에 파라미터 갯수에 맞게 명시 해주어야한다. 그러면 Hi Function 아규먼트가 msg 파라미터로 들어가게 된다.

**리터럴 함수나 익명 함수는 많은 사람들이 헷갈려하므로 꼭 익숙해져야한다.**



- 클로저 (함수 리턴)

  > 외부 함수안에 있는 내부 함수(내부함수는 외부함수에 접근가능 -> 변수 or 파라미터 등)
  >
  > 외부함수에서는 내부함수에 접근 불가능

```javascript
function closureTest(val){
    var msg = "!!!!!"
    function addVal(){
        alerl(val+msg);
    }
    return addVal;
}

var amEdu = closureTest("JS");

function pmEdu(val){
    closureTest(val)();
}
```

```html
<link type="text/javascript" src="resources/js/func02.js">

<label for="am">오전 강의</label>
<input type="text" id="am"/>
<input type="button" value="click" onclick="amEdu();"/>

<label for="pm">오후 강의</label>
<input type="text" id="pm"/>
<input type="button" value="click" onclick="pmEdu(pm.value);"/>
```

> closureTest 함수의 경우는 함수내에 또 다른 함수를 선언한 형태
>
> 리턴은 함수자체를 리턴하는게 아니라 함수값만 리턴함
>
> 고로, var amEdu = addVal; 형태가 됨 (JS라는 문자열은 closureTest함수 파라미터 val로 들어감)
>
> 그리고 html에서 onclick에서 괄호로 함수 실행을 해줌 (최종 addVal();형태가 됨)
>
> 
>
> pmEdu는 파라미터가 한개 존재하므로 amEdu처럼 변수 선언으로 사용 불가능
>
> 우리가 text에 넣을 값의 id가 pm이므로 pm.value로 우리가 넣은 값을 받아옴
>
> 그리고 그것이 function pmEdu의 파라미터 val로 들어가고 그 val 아규먼트를 closureTest 함수의 파라미터로 들어가게됨 그렇게되면 결국은 function pmEdu안의 closureTest(val)은 addVal이 되어버림 끝에 ()를 붙여서 그 함수를 실행해줌

**우리가 리턴받은것은 함수가 아님 함수값이 함수를 리턴 받고 싶으면 괄호를 붙여 리턴 받아야함**



***앞에 JavaScript_3에서도 이야기했듯이 자바스크립트에서는 변수가 함수값을 받을 수 있고 그 함수를 실행하기 위해서는 꼭 괄호가 필요하며 파라미터가 존재하는 함수이면 괄호안에 파라미터를 꼭 넣어 주어야한다. 자바의 메소드와 비슷하면서도 은근 다르다 꼭 조심하고 복습 많이하자***