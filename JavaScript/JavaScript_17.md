### JavaScript

##### checkbox

```html
<div id="colorbox">
		<div id="red">red</div>
		<div id="green">green</div>
		<div id="blue">blue</div>
		<div id="yellow">yellow</div>
	</div>
	
	<div id="base">
		<form>
<input type="checkbox" name="all" onclick="allsel(this.checked);"/>전체선택<br/>
<!-- 여기있는 this가 자기 자신 input element를 의미 checkbox이기 때문에 checked 속성이 필요함 체크 되어있으면 true리턴 안되어있으면 false가 리턴됨-->
            
			<input type="checkbox" name="chk" value="red"/>빨강<br/>
			<input type="checkbox" name="chk" value="green"/>초록<br/>
			<input type="checkbox" name="chk" value="blue"/>파랑<br/>
			<input type="checkbox" name="chk" value="yellow"/>노랑<br/>
			
			<input type="button" value="선택" onclick="sel();"/>
			<input type="button" value="초기화" onclick="clearDiv();"/>
		</form>
	</div>
```

```css
	#colorbox{
		width: 320px;
		height: 320px;
		position: relative
	}
	#red, #green, #blue, #yellow{
		width: 150px;
		height: 150px;
		border: 1px solid black;
		position: absolute;
	}
	
	#green{left:160px;}
	#blue{top: 160px;}
	#yellow{left: 160px; top: 160px;}
```

```javascript
function allsel(check){
		// 체크유무라서 리턴이 true,false중 하나
		// check에 this.checked가 들어옴
		var chks = document.getElementsByName("chk");	//nodelist
		// 빨강,초록,파랑,노랑 체크박스들
		for(var i = 0; i < chks.length; i++) {
			chks[i].checked = check;					//node 1개씩 가져옴
			// for문 돌면서 chks이름을 가진 체크박스 cheked를 check(this.checked)로 바꿈
			
			// disabled처럼 "값" 값이 들어가버리면 true가 됨
			// 이러한 속성들은 "" 안에 값이 들어가면 true가 되어버림
			// chks[i].checked = "test"; 이것도 트루임
			// chks[i].checked = true도 트루임
			// 이 true와 false는 바로 밑 주석에서 설명
			
			// 전체선택을 누르는 순간 전체선택 체크박스가 체크가되면서 this.checked가 true가 되어버림 그걸가져옴
			// 그게(true가) 파라미터 check에 들어오면서 chk이름 가진 체크박스들도 전부 true가 되어버리는것.. 
			// 헐 이해했다.. 결국 포문은 전체선택이 체크가 되는순간 chks[i].checked = true가 되는것
			// 체크해제하는순간 false가 리턴되어서 chk이름가진 애들한테 다 false가 들어가는것..
		}
	}
	
	function sel(){
		var chks = document.getElementsByName("chk");
		
		for(var i = 0; i < chks.length; i++) {
			if(chks[i].checked) {	// 체크된지(true) 안된지(false) 검사
				document.getElementById(chks[i].value).style.backgroundColor=chks[i].value;
				// 0번지부터 하나씩 가져오면서 만약 체크가 되어있는 아이들이라면
				// chks[i].value는 div중 id가진애들을 가져옴
				// chks[0].value는 밑에 html보면 "red"임 근데 div id="red"가진 애가있음 그녀석을 가지고온거임.
				// 그 id가 red인 녀석의 백그라운드컬러를 chks[0].value(red)로 바꾸어주자.
			}
		}
	}
```

