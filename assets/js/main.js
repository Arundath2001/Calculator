function btn(val)
{	
	document.getElementById("result").value+=val;
}

function calc(){
    let result1 = [];
    let result;
    

    if(document.getElementById("result").value.includes("+")){
    res = document.getElementById("result").value.split('+');
    return parseFloat(res[0]) + parseFloat(res[1]);
    }
    
    else if(document.getElementById("result").value.includes("-")){
    res = document.getElementById("result").value.split('-');
    return parseFloat(res[0]) - parseFloat(res[1]);
    }
    
    else if(document.getElementById("result").value.includes("/")){
    res = document.getElementById("result").value.split('/');
    return parseFloat(res[0]) / parseFloat(res[1]);
    }

    else if(document.getElementById("result").value.includes("%")){
    res = document.getElementById("result").value.split('%');
    return parseFloat(res[0]) / 100;
    }
    
    else if(document.getElementById("result").value.includes("√")){
    res = document.getElementById("result").value.split('√');
    return parseFloat(Math.sqrt((res[0])));
    }
    else{
    res = document.getElementById("result").value.split('*');
    return result= parseFloat(res[0]) * parseFloat(res[1]);
    }
}
    
function calculate(){	
let val = calc()
document.getElementById('result').value = val; 
}

function cleardisplay()
{
    document.getElementById('result').value=" ";	
}

function back(){
    result.value = result.value.slice(0,-1);
    
}
