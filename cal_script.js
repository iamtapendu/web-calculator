function num(n1){
	document.calculator.result.value+=n1
}

function clr(){
	document.calculator.result.value=""
}

function solve(){
	try{
		var x=eval(document.calculator.result.value)
		document.calculator.result.value=x
	}
	catch(e){
		alert(e)
		document.calculator.result.value=""
	}
}

function clr_bk(){
	var x=document.calculator.result.value
	document.calculator.result.value=x.substr(0,x.length-1)
}
