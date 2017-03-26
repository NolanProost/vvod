



function perevid(){


var t = document.getElementById("vvod").value;

    if(t == ''){
	alert('Вы забули ввести текст');
	
	}else{
  document.getElementById("outpt").innerHTML = t;
var para = document.createElement("p");
var node = document.createTextNode(s++);
para.appendChild(node);

var element = document.getElementById("div1");
element.appendChild(para);
}
    }




	function pusto(){

document.getElementById("vvod").value = "";

	}