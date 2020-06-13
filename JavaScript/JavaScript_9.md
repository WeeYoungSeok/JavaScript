### JavaScript

##### trans

- 숫자형 형 변환 **Number()**

  > 정수 or 실수의 문자형을 숫자형으로 반환

```html
<input type="text" id="num"/>
<button onclick="numTest(num,value)">확인</button>
```

```javascript
function numTest(val) {
    var vals = Number(val) + 5;
    alert(vals + " : " + typeof(vals));
}
```

> onclick부분 num.value는 사용자가 input텍스트 부분에 넣은 값을 파라미터로 받아준다.
>
> 파라미터로 받음 num.value가 스크립트 부분 함수의 파라미터로 들어온다.
>
> input text부분에 들어온 숫자는 실질적으로 들어올때 String값으로 들어온다. 
>
> 그러기때문에 Number를 이용해 숫자로 형 변환을 해주어야 정상적으로 +5가 더해진다.



- 정수형 형 변환 **parseInt()**

  > 정수 or 실수의 문자형을 정수형으로 반환

```html
<input type="test" id="int"/>
<button onclick="intTest(int.value);">확인</button>
```

```javascript
function intTest(val) {
    var vals = parseInt(val) + 5;
    alert(vals + " : " + typeof(vals));
}
```

> parseInt의 경우는 실수형을 넣어도 정수형을 반환한다.
>
> ex) 5.5입력시 vals의 값은 10이 나오게 된다.



- 실수형 형 변환 **parseFloat()**

  > 실수  or 정수의 문자열을 실수형으로 반환

```html
<input type="text" id="float"/>
<button onclick="floatTest(float.value)">확인</button>
```

```javascript
function floatTest(val) {
    var vals = parseFloat(val) + 5;
    alert(vals + " : " + typeof(vals));
}
```

> parseFloat의 경우는 정수 실수 전부 실수형으로 반환한다.



- 검중 함수 **eval(a + b)**

  > 문자열로 된 식을 계산

```html
<input type="text" name="evalue" placeholder="예) 5+10"/>
<button onclick="evalTest();">계산</button>
<span></span>
```

```javascript
function evalTest() {
    var doc = document.getElementsByName("evalue")[0];
    
    if(confirm("작성하신 코드가 맞습니까? ->") + doc.value) {
        document.getElementsByTagName("span")[0].innerHTML = "계산 결과 : " + eval(doc.value);
    } else {
        doc.value = 5 + 10;
    }
}
```

> eval함수는 사용자가 수식을 문자열로 입력하였을 경우 계산을 해주는 함수이다.
>
> +만이아니라 -, *, /등 다양한 수식도 가능하다.
>
> 위의 코드는 confirm을 통해 우리가 입력한 수식이 맞다 아니다를 확인 취소를 통해 받아주고, 취소를 누를경우 text값에 5 + 10을 강제로 넣어주는 코드이다.
>
> 정상적인 결과값을 넣으면 수식이 계산되어서 span태그에 뿌려준다.

