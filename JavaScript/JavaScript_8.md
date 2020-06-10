### JavaScript

##### Number

> javascript에서 기본적으로 제공하는 객체 중 하나
>
> 정수와 실수를 다루는 객체
>
> 속성 : NaN (Not a Number) - 숫자가 아닌 값
>
> ​           infinity - 범위를 벗어난 값
>
> 그 밖의 예외 속성 : undefined (변수가 정의되지 않음)
>
> ​							     null (변수는 있지만 값이 없다)



```html
<script type="text/javascript" src="resources/css/number.css"></script>

<pre>
	- 정수와 실수를 다루는 객체
	<button onclick="numberObj();">number 객체!</button>
	
	- 사용자가 입력한 값 숫자인지 아닌지 판별
	<button onclick="isNum();">숫자 판별!</button>
</pre>
<p id="inputTxt"></p>
```



- 작성 방법

```javascript
function numberObj() {
    var out = document.getElementById("inputTxt");
    
    var num = 7;					// 리터럴
    var num02 = new Number(7);		// 객체 생성 Number는 미리 만들어져 있음(객체가)
    
    out.innerHTML = num + "<br/>";
    out.innerHTML += num02 + "<br/>";
}
```

> 작성 방법에는 여러가지가 존재한다.
>
> 먼저 처음방법은 변수에 값을 넣어서 바로 초기화 해주는 방법이고, 두번째 방법은 new 연산자를 통해 미리 만들어져있는 Number로 객체 생성을 해주는 방법이 있다.
>
> 두개의 숫자가 어떻게 찍히는지 보기위해 p태크에 출력을 해보았다.
>
> 결과는 둘다 7이라는 값이 출력된다.



- NaN

```javascript
// 위의 함수에 추가 작성
out.innerHTML += "NaN 속성 : " + parseInt("a") + "<br/>"
```

> a는 숫자가 아닌 문자이다.
>
> 고로 parseInt를 통해서 정수로 변환을 시켜주어도 결과는 NaN이다. (에러 발생 x)



- infinity

```javascript
// 위의 함수에 추가 작성
		out.innerHTML += "infinity 속성 : " + (Infinity/100) + "<br/>";
		out.innerHTML += "infinity 속성 : " + (Number.MAX_VALUE + 0.00001e+308) + "<br/>";
```

> infinity는 표현 가능한 값보다 더 큰 수 혹은 작은 수이다.
>
> 숫자가 12자리가 넘어가면 e로 표현이 된다 (이것은 수학에 관심이 있으면 찾아보자)
>
> 0.00001e+308 = 1e303이랑 같은 의미
>
> 첫줄의 값이나 두번째 줄의 값 둘다 infinity이다.



- 자주쓰이는 함수

```javascript
// 위의 함수에 추가 작성
var number01 = 333.34567;
out.innerHTML += "toFixed :" + number01.toFixed(2) + "<br/>"; 
```

> toFixed() : 실수형의 소수점 자리수를 지정하고 **문자열**로 반환 (타입은 Number)



```javascript
// 위의 함수에 추가 작성
var number02 = 123;
out.innerHTML += "toString(16) : " + number02.toString(16);
```

> toString(n) : (n진수 반환하여) **문자열**로 반환 (타입은 Number)



- 숫자 판별

```javascript
function isNum(){
    var out = documemt.getElementById("inputTxt");
    var num = prompt("숫자만 입력하세요");
    
    if(!isNaN(num)){
        out.innerHTML = num + "은 숫자입니다.";
    } else {
        out.innerHTML = num + "은 숫자가 아닙니다.";
    }
    
}
```

> isNaN은 숫자를 판별해주는 명령이다.
>
> 해석하자면 "이것은 숫자가 아니다" 이 뜻(?)으로 해석이 가능해서 !를 붙여 ture를 false로 바꾸어 "이것은 숫자다"라고 바꾸어 줄 수 있다. 

