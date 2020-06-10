### JavaScript

##### Element

***DOM (Document Object Model) 방식 document라는 명령어는 html문서를 탐색하여 태그들을 전부 객체화 시키고 찾아간다.*** 

- id로 탐색하여 찾기

```html
<script type="text/javascript">
	function searchId(){
        var doc = document.getElementById("test");
        alert(doc + " : " + typeof(doc));
        doc.innerHTML = "id로 탐색 완료!"
    }
</script>

<p id="test" onclick="searchId();"/>
	1. 엘리먼트의 id로 탐색 : 엘리먼트 하나를 선택 (중복 불가) - 값 하나만 리턴됨
</p>
```

> 보통 css, js에서는 id와 class는 비슷한 역할을 하지만 id는 하나의 값만 줄때 보통 사용한다.
>
> 그래서 get으로 Id를 가져올때 Elements가 아닌 Element로 가져온다.
>
> 타입은 object 타입임!
>
> value로 가져오면 여기는 값이 없어서 오류가남
>
> innerHTML은 사용자 앞에서 DOM탐색으로 가져온 객체의 텍스트를 사용자가 입력한 문자열로 변경해주는 명령어이다.
>
> 1. 엘리먼트의... 이거를 누르게되면 id로 탐색 완료!로 글자가 바뀌게 된다.



- name으로 탐색하여 찾기

```html
<script type="text/javascript">
	function searchName(){
        var doc = document.getElementsByName("test02");
        doc[1].value = "name으로 탐색 완료!";
        alert(doc + " : " + typeof(doc));
    }
</script>

	<p onclick="searchName();">2. 엘리먼트의 name으로 탐색 : 엘리먼트 여러개 선택 = 값 여러개 (배열로 리턴됨)<br/>
		<input type="text" name="test02"><br/>
		<input type="text" name="test02"><br/>
		<input type="text" name="test02"><br/>
	</p>
```

> 우리가 앞에서 id같은 경우에는 유일한 하나의 값을 찾을때 보통 사용한다고 했었다.
>
> name같은 경우는 여러개의 객체가 존재할 확률도 많기때문에 Element's'로 가져온다. 
>
> DOM탐색으로 여러개의 값을 가져올때는 nodelist의 형태로 리턴이된다. 그렇게되면 우리가 지정한 test02가 3개가있으면 첫번째꺼가 0번지이다.
>
> 배열로 바뀐다고 생각하면 쉽다.
>
> 2. 엘리먼트...을 누르게되면 text공간 2번째칸에 name으로 탐색 완료가 적힌다.(1번지)
>
> 태그가 input이거나 사용자 입력등등 받아올때는 끝에 value로 값을 가져오거나 값을 할당한다.
>
> 타입은 object타입이다.



- TagName으로 탐색하여 찾기

```html
<script type="text/javascript">
	function searchTagName(){
        var doc = document.getElementsByTagName("p");
        doc[2].innerHTML = "tagName으로 탐색 완료!";
       	doc[2].style.color = "blue";
    }
</script>

	<p class="select" onclick="searchTagName();">3. 엘리먼트의 태그이름으로 탐색 : 엘리먼트 여러개 선택 = 값 여러개 (배열로 리턴됨)</p>
```

> 태그의 이름으로도 탐색을 할 수 있다.
>
> TagName도 마찬가지로 우리는 html에 사용자가 설정한 태그가 몇개인지 모른다.
>
> 그래서 nodelist로 가져와서 배열처럼 번지로 값을 가져오거나 값을 할당 해주어야한다.
>
> 여기서 2번지인 3번째 p인 이유는 위의 id탐색과 name탐색 html을 연결해보면 우리가 가져올 p의 태그는 3번째 p이기때문에 2번지의 p태그를 가져온것이다.
>
> p태그는 text를 쓰는 태그이므로 innerHTML로 텍스트를 변경해준다.
>
> style.color라는 명령어는 css속성을 javascript에서도 사용한 것이다.(폰트색 변경)



- css 선택자로 탐색하여 찾기

```html
<script type"text/javascript">
	function searchQS(){
        var doc = document.querySelectorAll("#test");
        doc[0].innerHTML = "css 선택자로 탐색 완료!";
    }
</script>

<p class="select" onclick="searchQS();">DOM 탐색 메서드</p>
	
	<p id="test" class="select" onclick="searchId();">1. 엘리먼트의 id로 탐색 : 엘리먼트 하나를 선택 (중복 불가) - 값 하나만 리턴됨</p>
```

> id가 위에서 유일한 하나의 값이라고 했지만,  쓰는사람도 있다고 했다.
>
> 그래서 css선택자 id가 test인 것을 가져오는데 여러개가 존재할수도 있기 때문에 nodelist로 리턴을 받게 된다.
>
> 그래서 배열의 형태가되어서 번지도 입력해주어야 한다.
>
> DOM 탐색 메서드를 누르게 되면 1. 엘리먼트의...이 부분이 css 선태자로 탐색 완료!로 바뀐다.