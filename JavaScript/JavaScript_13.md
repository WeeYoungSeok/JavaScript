### JavaScript

##### array

```html
<h1>배열 객체</h1>
<!-- 자바랑은 다른 느낌의 배열 -->
	
<ul>
	<li onclick="multiArr()">다중 배열</li>
	<li onclick="joinTest();">join 함수</li>
<li>
		배열정렬
<ul>
	<li onclick="sortTest01();">sort() : 문자 정렬</li>
	<li onclick="sortTest02();">sort() : 숫자 정렬</li>
	<li onclick="reverseTest();">reverse() : 반대로 정렬</li>
</ul>
</li>
		
	<li onclick="pushAndPop();">
		배열 저장 방식
	<ul>
		<li>push()</li>
		<li>shift()</li>
		<li>pop</li>
	</ul>
	</li>
		
	<li onclick="sliceTest();">slice() : 배열의 부분을 가지고 새로운 배열 생성 </li>
</ul>

```



- 선언 방법

```javascript
var arrayObj = new Array();				// 객체 선언
var arrayObj01 = ["V1","v2",3,4];		// 객체 생성없이 초기화

var arrayObj02 = new Array();			// 빈 객체 선언
var arrayObj03 = new Array(5);			// 객체의 크기(길이) 선언 (빈 객체)

var arrayObj04 = new Array(1,2,3,4,5);	// 초기화하면서 객체 선언
var arrayObj05 = new Array("x");		// 문자 x 하나 들어감

onload = function() {
    alert(arrayObj04 + " : " + typeof(arrayObj04));
}
```

> 자바와 선언방법은 다르지만 비슷한 형태이다.
>
> 자바와 아주 큰 차이는 하나의 배열에 여러타입을 넣을 수 있다는 장점이다.
>
> 배열의 타입은 object이다.



- 다중 배열

```javascript
var arrlen = 3;
var arr = new Array(arrlen);

for(var i = 0; i < arr.length; i++) {
    arr[i] = new Array(arrlen);
}

arr[0][0] = "수박";
arr[0][1] = "바나나";
arr[0][2] = "키위";
		
arr[1][0] = 1;
arr[1][1] = 2;
arr[1][2] = 3;
		
arr[2][0] = ["test", "js"];
arr[2][1] = ["javascript", "jquery"];
arr[2][2] = ["jsp/servlet", ["a","b","c"]];
		
alert("배열 전체 : " + arr.toString());
		
// 배열 안에 있는 숫자 3출력
alert(arr[1][2]);
		
// 배열 안에 있는 javascript에서 j가 출력..
alert(arr[2][1][0][0]);

// 배열 안에 있는 "javascript" 출력
alert(arr[2][1][0]);
		
// 배열 안에 있는 "a" 출력
alert(arr[2][2][1][0])
```

> 자바에서와는 다르게 다중 배열 선언시 for문을 돌려 번지마다 배열의 객체를 선언 해주어야한다.
>
> 배열안에 배열을 만들 수 있다.
>
> 그리고 배열안의 문자열을 또 배열로 잘라서 출력이 가능하다.



- join 함수

```javascript
function joinTest() {
    var fruitArr = ["사과","포도","수박","망고","딸기"];
    var res = fruitArr.join("-");
    alert(res);
    
    var numArr = [1,2,3,4,5];
    var result = eval(numArr.join("+"));
    alert(result);
    alert(numArr);
    alert(numArr.join("-"));
}
```

> join(value) 함수는 배열을 하나씩 가져오면서 그 뒤에 value를 붙여준다.
>
> res의 결과값은 사과-포도-수박-망고-딸기
>
> result의 결과값은 15이다. 이유는 eval 함수를 통해 숫자와 연산으로 조합된 것을 계산해 주었다.



- 정렬

```javascript
function sortTest01() {
    var arr = ["d","b","a","c","e"];
    alert(arr);
    arr.sort();
    alert(arr);
}
```

> 정렬 메서드중에는 sort();라는 메서드가 존재한다.
>
> 문자 정렬은 내부적으로 알파벳순으로 정렬해준다.

