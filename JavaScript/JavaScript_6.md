### JavaScript

##### Element

- id로 탐색하여 찾기

```html
<script type="text/javascript">
	function searchId(){
        var doc = document.getElementById("test");
        alert(doc + " : " + typeof(doc));
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