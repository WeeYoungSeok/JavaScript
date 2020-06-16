### JavaScript

##### String

- 문자열 합치기

```html
<p>
	문자열 합치기 <button onclick="strTest01();">클릭</button>
</p>

<script type="text/javascript">
	
    function strTest01() {
        var str01 = "String ";
        var str02 = "Test";
        var str02 = str01 + str02;
        alert("String + Test = " + str03);
    }
</script>
```

> 문자열 합치기는 자바와 같은 구조이다.
>
> 그냥 문자열끼리 더하면 String형태를 유지하면서 문자열이 이어진다.



- 다른 자료형 합치기

```html
<p>
    다른 자료형 합치기 <button onclick="strTest02();">클릭</button>
</p>
```

```javascript
function strTest02() {
    var num = 12.5;
    var bool = true;
    var result = "String 1" + num + " " + bool;
    alert(result + " : " + typeof(result));
}
```

> 합친 결과는 String1120.5 true 이렇게 출력이 된다.
>
> 타입은 String이다. 문자열은 자바와 마찬가지로 다른 타입과 합쳐지면 String형태이다.



- 문자열 비교하기

```html
<p>
	문자열 비교하기 <button onclick="strTest03();">클릭</button><br/>
	<span id="res"></span>
</p>
```

```javascript
function strTest03() {
    var str = prompt("이름을 입력하세요 : ");
    var span = document.getElementById("res");
    
    if(str == "kh"){
        span.testContent = str + "님 환영합니다.";
    } else if(sty.toLowerCase() == "qclass") {
        span.textContent = sty + "님 환영합니다."; 
    } else {
        span.textContent = "이름을 다시 확인해 주세요.";
    }
}
```

> promp는 앞에서 정리했듯이 경고창과 함께 사용자에게 텍스트를 입력받는 것이다.
>
> 문자열에서의 비교는 자바와 다르게 동등 연산자( == )로 비교 가능하다.



- 자동 형 변환

```javascript
var num = 10;
if(num == "10") {
    alert("num == 10 : true");
} else {
    alert("num == 10 : false");
}
// 결과 true

var num = 10;
if(num === "10") {
    alert("num === 10 : true");
} else {
    alert("num === 10 : false");
}
// 결과 false
```

> 동등 연산자 ( == )는 문자열과 비교시 숫자를 문자로 바꾸어서 비교해준다.
>
> 동등 연산자와 다르게 일치 연산자 ( === )로 값의 데이터와 타입을 전부 비교해 false가 나온다.



```javascript
var strObj = new String("kh");
var strVal = "kh";

if(strObj == strVal){
	alert("같다.");
} else {
	alert("다르다.");
}
// 결과 같다

if(strObj === strVal){
	alert("같다2.");
} else {
	alert("다르다2.");
}
// 결과 다르다2
```

> strObj은 새로운 객체를 생성한 것이고, strVal은 값 그 자체여서 동등 연산자, 일치 연산자의 결과가 다르다.
>
> styObj의 타입은 object, strVal의 타입은 String이다



- 문자열 검색하기

```html
<p>
	문자열 검색하기 <button onclick="strTest04();">클릭</button>
</p>

<script type="text/javascript">

	function strTest04() {
        var str = "홍길동 이순신 유재석 강호동 홍길동";
        var prop = prompt("검색할 이름을 입력해주세요 :");
        
        alert("indexOf : " + str.indexOf(prop));
        alert("indexOf : " + str.lastIndexOf(prop));
    }
</script>
```

> indexOf(value)는 문자열은 왼쪽부터 검사해 value와 일치한 값이 있으면 왼쪽부터 번지를 세어나가 몇번째에 있는지 숫자로 리턴해준다.
>
> lastIndexOf(value)는 indexOf(value)와 같지만 검사를 오른쪽부터 한다.(결과값은 왼쪽부터)



- 문자열 추출하기

```html
<p>
	문자열 추출하기 <button onclick="strTest05();">클릭</button>
</p>
```

```javascript
function strTest05() {
    var strVal = "문자열 추출하기. 관련 메소드:indexOf,substring";
    var startIdx = strVal.indexOf(":");
    var endIdx = strVal.lastIndexOf(".");
    var result = strVal.substring(startIdx + 1, endIdx);
    alert(result);
    
    var splitVal = result.split(",");
    alert(splitVal[0]); // indexOf
    alert(splitVal[1]); // substring
}
```

> substing(a,b)는 a번지부터 b번지전까지의 자른 문자열을 리턴해준다.
>
> startIdx + 1을 한 이유는 :까지 찾았기 때문에 +1을 해주어야지 i부터 출력이 된다.
>
> split은 자바에서와 같은 의미로 ","을 기준으로 문자열을 배열로 담아서 자르겠다라는 의미이다.
>
> 그래서 0번지는 indexOf, 2번지는 substring이 출력된다.



- 키워드 나누기

```html
<p>
	키워드 나누기 <button onclick="strTest06();">클릭</button>
</p>
<div id="key"></div>
	
<script type="text/javascript">
		
	function strTest06() {
		var prop = prompt("쉼표로 구분하여 키워드를 입력하세요 : ", "예) 사과,바나								나,키워,수박");
		var propArr = prop.split(",");
		var propRes = "";
			
		for(var i = 0; i< propArr.length; i++){
			propRes += "키워드 : " + propArr[i] + "<br/>"; 
		}
		document.getElementById("key").innerHTML = propRes;
    }
</script>
```

> 앞서 배운 split을 토대로 사용자에게 ","로 구분하여 입력을 받았을시 "," 기준으로 잘라서 사용자에게 보여주는 코드이다.





