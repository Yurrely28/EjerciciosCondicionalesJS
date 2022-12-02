/* console.log("PUNTO 1)
let num1, num2 =0
num1 = parseInt(prompt("Ingrese el primer numero"))
num2 = parseInt(prompt("Ingrese el segundo numero"))
if (num1 < num2){
    console.log(num1, num2)
}else if(num1 >= num2){
    console.log(num2,num1)
} */

/* console.log("PUNTO 2")
let num=0
num= parseInt(prompt("Ingrese un numero entre 1 y 10"))
if (num>=1 && num<=10){
    switch (num){
        case 1:
            alert("IMPAR")
        break
        case 2:
            alert("PAR")
        break
        case 3:
            alert("IMPAR")
        break
        case 4:
            alert("PAR")
        break
        case 5:
            alert("IMPAR")
        break
        case 6:
            alert("PAR")
        break
        case 7:
            alert("IMPAR")
        break
        case 8:
            alert("PAR")
        break
        case 9:
            alert("IMPAR")
        break
        case 10:
            alert("PAR")
        break
    }
}else{
    alert("Rango invalido (1 a 10)")
} */

/* console.log("PUNTO 3")
let num=0
num= parseInt(prompt("Ingrese un numero entre 1 y 10"))
if (num>=1 && num<=10){
    switch (num){
        case 1:
            alert("1 = UNO")
        break
        case 2:
            alert("2 = DOS")
        break
        case 3:
            alert("3 = TRES")
        break
        case 4:
            alert("4 = CUATRO")
        break
        case 5:
            alert("5 = CINCO")
        break
        case 6:
            alert("6 = SEIS")
        break
        case 7:
            alert("7 = SIETE")
        break
        case 8:
            alert("8 = OCHO")
        break
        case 9:
            alert("9 = NUEVE")
        break
        case 10:
            alert("10 = DIEZ")
        break
    }
}else{
    alert("ERROR")
} */

/* console.log("PUNTO 4")
let minutos, pago = 0
minutos= parseInt(prompt("Digite la cantidad de minutos"))
if(minutos>0 && minutos<=3){
    pago = 200
}else if(minutos>3){
    pago = 200 + (minutos-3)*100
}
alert(`la llamada de ${minutos} minutos tiene un costo de ${pago}`) */

/* console.log("PUNTO 5")
let conBlan, conNeg,x,y= 0
conBlan= parseInt(prompt("Ingrese la cantidad de conejos blancos"))
conNeg = parseInt(prompt("Ingrese la cantidad de conejos negros"))
N = conBlan + conNeg
x = parseInt(prompt("Ingrese la cantidad de conejos negros vendidos"))
y = parseInt(prompt("Ingrese la cantidad de conejos blancos vendidos"))
p1= parseFloat(prompt("Ingrese el precio de los conejos blancos"))
p2= parseFloat(prompt("Ingrese el precio de los conejos negros"))
total = p1*y + p2*x
if (x < y){
    color = "Negro"
}else if(x > y){
    color = "Blanco"
}else{
    color = "Ambos se vendieron por igual"
}
alert(`La cantidad de conejos vendidos ${x+y}\nTotal ${total}\n${color} fue el mas vendido`) */

console.log("PUNTO 6")
let previos, trabajos, final =0
