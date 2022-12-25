//const message = 'ejercicio 5 calculadora' // Try edit me

/*const botones = document.querySelectorAll(".valor")
const resultado=document.querySelector(".resultado")

const clicks= function(evento){
    var valor = this.innerText

    var x= document.getElementById("2").value
    document.getElementsById("resultado").value=x
    //alert(valor)
    
}




botones.forEach(boton => {
	boton.addEventListener("click", clicks);
});*/
var operandoizq1=0
var operando
var operandoder2=0

function calcular(){
    var res=document.getElementById("resultado")
    var bor=document.getElementById("borrar")
    var v1=document.getElementById("1")
    var v2=document.getElementById("2")
    var v3=document.getElementById("3")
    var sum=document.getElementById("+")
    var v4=document.getElementById("4")
    var v5=document.getElementById("5")
    var v6=document.getElementById("6")
    var rest=document.getElementById("-")
    var v7=document.getElementById("7")
    var v8=document.getElementById("8")
    var v9=document.getElementById("9")
    var mul=document.getElementById("*")
    var pun=document.getElementById(".")
    var v0=document.getElementById("0")
    var igu=document.getElementById("=")
    var div=document.getElementById("/")

    v1.onclick=function(event){
        res.value+="1"
    }
    v2.onclick=function(event){
        res.value+="2"
    }
    v3.onclick=function(event){
        res.value+="3"
    }
    v4.onclick=function(event){
        res.value+="4"
    }
    v5.onclick=function(event){
        res.value+="5"
    }
    v6.onclick=function(event){
        res.value+="6"
    }
    v7.onclick=function(event){
        res.value+="7"
    }
    v8.onclick=function(event){
        res.value+="8"
    }
    v9.onclick=function(event){
        res.value+="9"
    }
    v0.onclick=function(event){
        res.value+="0"
        
    }

    sum.onclick=function(event){
        operandoizq1=res.value
        res.value=""
        operando="+"
    }
    rest.onclick=function(event){
        operandoizq1=res.value
        res.value=""
        operando="-"
    }
    mul.onclick=function(event){
        operandoizq1=res.value
        res.value=""
        operando="*"
    }
    div.onclick=function(event){
        operandoizq1=res.value
        res.value=""
        operando="/"
    }
    pun.onclick=function(event){
        res.value+="."
    }

    igu.onclick=function(event){
        operandoder2=res.value
        res.value=""
        
        if(operando=="-"){
            res.value=(parseFloat(operandoizq1)-parseInt(operandoder2))
        }
        if(operando=="+"){
            res.value=(parseFloat(operandoizq1)+parseInt(operandoder2))
        }
        if(operando=="*"){
            res.value=(parseFloat(operandoizq1)*parseFloat(operandoder2))
        }
        if(operando=="/"){
            res.value=(parseFloat(operandoizq1)/parseFloat(operandoder2))
        }
    }

    bor.onclick=function(event){
        borrar()
    }
    function borrar(){
        res.value=""
        operandoizq1=0
        operandoder2=0
        operando=""

    }
}
//const numero=document.querySelector('input')
//alert(numero)

/*const valor=agarrar_elemento()

function agarrar_elemento(){
    alert("Button clicked, id "+this.id+", text"+this.innerHTML)
}
document.getElementById("1")*/
/*var numrand= Math.floor(Math.random() * 100) +1
var list= document.getElementById("header")
list.innerHTML =numrand*/