### JavaScript

##### Object

- 객체의 구성

  > 메서드 : 기능 정의
  >
  > 속성 : 객체 내부의 데이터
  >
  > this : 객체 내부의 메서드나 속성을 정의할 때 사용
  >
  > 프로토타입 : 객체의 확장



- **this**

```html
<script type="text/javascript">
function myQClass(){
    this.name = "kh정보교육원";
    var name2 = "빅데이터 전문가 과정";
    this.getName2 = function() {
        return name2;
    }
}
</script>

<button onclick="objTest();">클릭</button>
```

> this로 선언한 변수나 함수값은 외부에서 접근이 가능하다.
>
> var같은 경우에는 외부에서 접근이 불가능하므로 this로 함수화시켜서 리턴받아서 가져와서 씀



- **객체 리터럴**

```javascript
var yourQClass = {
    name : "kh정보교육원",
    print : function() {
        return yourQClass.name + " 빅데이터 전문가 과정!";
    }
}
```

> 객체 리터럴은 function이 없고 {}이거만 존재한다.
>
> 선언 방법은 {key : value, key:value}의 형태이다.
>
> yourQClass의 값들을 가져오고 싶을때는 yourQClass.객체명으로 가져와야 한다.
>
> 함수가 아니라서 new연산자를 통해서 객체 생성을 할 필요가 없다.



- **prototype**

```html
<script type="text/javascript">
function myQClass(){
    this.name = "kh정보교육원";
    var name2 = "빅데이터 전문가 과정";
    this.getName2 = function() {
        return name2;
    }
}
    
myQClass.prototype.printSubjects = function(){
    alert(this.name + " " + this.getName() + " java, db, ui");
}
</script>

<button onclick="objTest();">클릭</button>
```

> prototype은 기능을 추가시켜 바로 가져다가 쓸 수 있게 해준다.
>
> 여기서 this는 myQClass 객체를 의미한다.



```html
<script type="text/javascript">
function myQClass(){
    this.name = "kh정보교육원";
    var name2 = "빅데이터 전문가 과정";
    this.getName2 = function() {
        return name2;
    }
}
    
myQClass.prototype.printSubjects = function(){
    alert(this.name + " " + this.getName() + " java, db, ui");
}
    
    function objTest(){
		var cls = new myQClass();
		cls.printSubjects();
}
</script>

<button onclick="objTest();">클릭</button>
</script>

<button onclick="objTest();">클릭</button>
```

> objTest()부분을 보자
>
> new연산자를 통해 객체 생성을 해주었다.
>
> prototype으로 기능을 확장 시켜준것도 인스턴스 변수로 바로 가져다가 쓸 수 있다.
>
> cls.printSubjects()가 실행되면 alert 경고창에 kh정보교육원 빅데이터 전문가 과정 java, db, ul가 정상적으로 출력이 된다.





***이 부분은 상당히 어렵고 복잡하다 여러번 복습하자***

