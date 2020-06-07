function test(){
	window.alert("외부 작성 방식!!");
	/* 윈도우가 가진 alret이라는 함수 쓴거 같은 window
	 * window는 생략가능)
	 */
}

window.onload=function(){
	/* 익명 함수 */
	alert("윈도우 로딩 후!!!!!!!");
	/* 로드되는 이벤트가 발생했을때 함수를 실행해주세요 그래서 새로고침하면 윈도우로딩후!!뜨는거임 */
}