
// javascript 변수의 호이스팅
var variable01 = 10;
	
	function test01(){
		variable01 = variable01 + 5;
		document.getElementById("v01").innerHTML = "<b style='color: red; background: yellow;'>" + variable01 + "</b>";
		/* 전역변수 10을 가져와서 5를 더해서 variable01에 다시 담아줌 그럼 전역변수가 5씩 계속 늘어남
			이 함수가 호출되고 끝나더라고 variable값이 그대로 남아있음 */
	}
	
	function test02(){
		var variable02 = variable01 + 100;
		document.getElementById("v02").innerHTML = '<b style="color: red; background: yellow;">' + variable02 + "</b>";
		/* 싱글쿼테이션 더블쿼테이션 둘다 쓸수잇음 문자열안에 문자열쓸때는 더블 싱글 번갈아서 써야함 */
		/* vaiable02는 전역변수 variable01 바뀌어져 있는 숫자에다가 100더하고 variable02에 담아줌.*/
	}
	
	function test03(){
		// 문자열 String
		var variable03 = "문자";
		alert(variable03 + " 의 타입 : " + typeof(variable03));
		
		// 숫자 number
		var variable03 = 5;
		alert(variable03 + " 의 타입 : " + typeof(variable03));
		
		// 논리
		var variable03 = true;
		alert(variable03 + " 의 타입 : " + typeof(variable03));
		
		// null
		var variable03 = null;
		alert(variable03 + " 의 타입 : " + typeof(variable03));
		
		// array (object:객체)
		var variable03 = [1,3,5,7,9];
		alert(variable03 + " 의 타입 : " + typeof(variable03));
		
		// function
		variable03 = function(){
			console.log("타입 변환");
			alert("함수도 값이다!!");
		}
		alert(variable03 + " 의 타입 : " + typeof(variable03));
		// 자바스크립트에서는 함수도 값이다
		// 자바로 이야기하면 메소드가 값으로 된다..(자바에서는 메소드가 값이 될 수 없음.)
		// 리턴값 함수가능, 함수안에 함수가능
	}