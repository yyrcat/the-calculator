/**
 * Created by yerui on 7/31/2016.
 */
// Get all the keys from document
var keys=document.querySelectorAll(".button input");
var operators=["+","-","*","/"];
var decimalHas=false;

for(var i=0;i<keys.length;i++){
    keys[i].onclick=function(event){
        event.preventDefault();

        var btnVal=this.value;
        var screen=document.querySelector("#screen");
        var screenVal=screen.innerHTML;

        if(btnVal==="C"){
            screen.innerHTML="";
            decimalHas=false;
        }
        else if(btnVal==="DEL"){
            screen.innerHTML=screenVal.replace(/.$/,"");
            decimalHas=false;
        }
        else if(btnVal==="="){
            var equation=screenVal;
            var lastChar=equation[equation.length-1];
            if(operators.indexOf(lastChar)>-1||lastChar==="."){
                equation.replace(/.$/,"");
            }
            if(equation){
                screen.innerHTML=eval(equation);
            }
            decimalHas=false;
        }
        else if(operators.indexOf(btnVal)>-1){
            var lastChar=screenVal[screenVal.length-1];
            if(operators.indexOf(lastChar)==-1&&screenVal!==""){
                screen.innerHTML+=btnVal;
            }
            else if(screenVal===""&&btnVal==="-"){
                screen.innerHTML+=btnVal;
            }

            if(operators.indexOf(lastChar)>-1&&screenVal.length>1){
                screenVal=screenVal.replace(/.$/,btnVal);
            }
            decimalHas=false;
        }
        else if(btnVal==="."){

            if(!decimalHas){
                screen.innerHTML+=btnVal;
                decimalHas=true;
            }

        }
        else screen.innerHTML+=btnVal;
    };
}