##### JavaScript

##### 전화번호부



```html
<h1>전화번호부</h1>
	<from>
		<table id="intable">
            <tr>
            	<td>아이디 : </td>
                <td><input type="text" name="id"/></td>
            </tr>
            <tr>
            	<td>비밀번호 : </td>
                <td><input type-"password" name="pw"/></td>
            </tr>
            <tr>
            	<td>주소 : </td>
                <td><input type="text" name="addr"/></td>
            </tr>
            <tr>
            	<td>전화번호 : </td>
                <td><input type="text" name="phone"/></td>
            </tr>
        </table>
        <input type="button" value="추가" onclick="tableVal();"/>
        <input type="button" value="삭제" onclick="deleteTable();"/>
	</from>

	<div id="addtable">
    	<table border="1" id="ctb">
            <col width="100px"/>
            <col width="100px"/>
            <col width="300px"/>
            <col width="100px"/>
            <col width="100px"/>
            <thead>
            	<th>아이디</th>
                <th>비밀번호</th>
                <th>주소</th>
                <th>전화번호</th>
                <th>삭제</th>
            </thead>
            <tbody id="addtr">
            </tbody>
        </table>    
	</div>
```

```javascript
function tableVal(){
    var doc = document.getElementsByTagName("form")[0];
    var vals = [doc.id.value, doc.pw.value, doc.addr.value, doc.phone.value];
    // vals는 사용자가 input에 입력한 값을 가져옴 doc.input의 아이디.value
    
    // 유효값 처리 ( 빈칸 있을시 함수 실행 못함 )
    for(var i = 0; i < vals.length; i++){
        if(vals[i]==null){	// vals[i]=="" , vals[i]==undefined 이 두가지도 가능
            alert("모든 값을 입력해 주세요!");
            return;	// retrun;만 해주실에는 함수를 종료시킴.
        }
    }
    
    document.getElementById("addtr").appendChild(createRow(vals));
    // createRow를 통해 만들어진 tr td를 tbody 자식 요소 마지막으로 추가
}

// 사용자가 입력한 값을 받아서 tr td 생성하기
function createRow(vals){
    var tr = document.createElement("tr");
    // tr태그 생성
    
    for(var i = 0; i < vals.length; i++){
        var td = document.createElement("td");
        // td태그 생성
        td.textContent = vals[i];
        // td태그에 사용자가 입력한 값을 추가
        tr.appendChild(td);
        // 완성된 td태그를 tr태그에 추가
    }
    
    var deleteTd = document.createElement("td");
    deleteTd.innerHTML = "<input type='button' value='삭제' onclick='delRow(this)'/>";
    // 삭제 버튼 생성
    // innerHTML은 html태그도 인식함
    // 삭제 버튼을 누를시 자기자신을 삭제시키기위해 onclick이벤트를 줌
    // delRow의 this는 버튼을 눌렀을때 자기자신의 태그를 의미 ( input )
    
    tr.appendChild(deleteTd);
    // 위에서 사용자가 입력한 값들을 전부 tr에 추가한뒤 마지막 요소로 삭제 버튼 추가
}

// 전체 삭제
function deleteTable(){
    var tbody = document.getElementById("addtr");
    
    while(tbody.hasChildNodes()){	// tbody는 자식태그를 가지고 있냐
        tbody.removeChild(tbody.lastChild);	// tbody의 자식요소중 마지막 자식요소 삭제
        // 마지막 자식요소를 하나씩 삭제하면서 모든 자식 삭제시 while문 탈출
    }
}

// 자기 자신 하나 삭제
function delRow(elem){	// elem은 input태그를 의미 ( 자기 자신 )
    var tr = elem.parentNode.parentNode;
    // 자기 자신 ( input )의 부모의 부모태그
    
    var tbody = document.getElementById("addtr");
    
    // tbody에서 내가 가져온 input태그의 부모의 부모를 삭제
    tbody.removeChild(tr);
}
```



