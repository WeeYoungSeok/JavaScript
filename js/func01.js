// alert : 경고, 코드 디버깅, 단순 출력
	function alertTest(){
		alert("단순 대화창 (내용 출력)");
	}
	
	//confirm : 확인/취소 버튼 제공(true/false)
	function confirmTest(){
		if(confirm("배경을 파랑으로 변환?(확인 : 파란색, 취소 : 하얀색)")){
			document.body.style.backgroundColor="skyblue";
		} else {
			document.body.style.backgroundColor="white";
		}
	}
	
	// prompt() : 텍스트박스 제공, 확인/취소 버튼 제공 -> 확인 버튼 : 텍스트 / 취소 : null
	function promptTest(){
		var txt = prompt("좋아하는 과목을 선택해 주세요\n[1:자바, 2:db, 3:web]");
		
		switch(txt){
		case "1":
			alert("역시 자바!");
			break;
		case "2":
			alert("db 좋죠");
			break;
		case "3":
			alert("홈페이지 만들기 재밋죠!");
		case null:
			alert("취소하면....다 싫은거지?");
		default:
			alert("1, 2, 3번 중에 하나만 선택해 주세요");
		}
		
	}