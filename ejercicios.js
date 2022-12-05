console.log("PUNTO 1")
let num1, num2 =0
num1 = parseInt(prompt("Ingrese el primer numero"))
num2 = parseInt(prompt("Ingrese el segundo numero"))
if (num1 < num2){
    console.log(num1, num2)
}else if(num1 >= num2){
    console.log(num2,num1)
}

console.log("PUNTO 2")
let num =0
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
}

console.log("PUNTO 3")
let numero=0
numero= parseInt(prompt("Ingrese un numero entre 1 y 10"))
if (numero>=1 && numero<=10){
    switch (numero){
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
}

console.log("PUNTO 4")
let minutos, pago = 0
minutos= parseInt(prompt("Digite la cantidad de minutos"))
if(minutos>0 && minutos<=3){
    pago = 200
}else if(minutos>3){
    pago = 200 + (minutos-3)*100
}
alert(`la llamada de ${minutos} minutos tiene un costo de ${pago}`)

console.log("PUNTO 5")
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
alert(`La cantidad de conejos vendidos ${x+y}\nTotal ${total}\n${color} fue el mas vendido`)

console.log("PUNTO 6")
let previos, trabajos, final =0
let ev1,ev2,ev3,tr1,tr2=0
ev1=parseFloat(prompt("Digite la nota del primer parcial"))
if (ev1>=1.0 && ev1<=5.0){
    ev2=parseFloat(prompt("Digite la nota del segundo parcial"))
    if (ev2>=1.0 && ev2<=5.0){
        ev3=parseFloat(prompt("Digite la nota del tercer parcial"))
        if (ev3>=1.0 && ev3<=5.0){
            tr1=parseFloat(prompt("Digite la nota del primer trabajo"))
            if (tr1>=1.0 && tr1<=5.0){
                tr2=parseFloat(prompt("Digite la nota del segundo trabajo"))
                if (tr2>=1.0 && tr2<=5.0){
                    previos = (ev1 +ev2 +ev3)/3
                    trabajos =(tr1 + tr2)/2
                    final = previos*0.6 + trabajos*0.4
                    alert(`La nota definitiva es ${final}`)
                }else{
                    alert('Rango de nota incorrecto')
                }
            }else{
                alert('Rango de nota incorrecto')
            }
        }else{
            alert('Rango de nota incorrecto')
        }
    }else{
        alert('Rango de nota incorrecto')
    }
}else{
    alert('Rango de nota incorrecto')
}


console.log("PUNTO 7")
let nombre = ""
let clave, prOriginal, cant,prDescuento=0
nombre = prompt("Digite el nombre del articulo")
precio = parseFloat(prompt("Digite el precio"))
cant = parseInt(prompt("Digite la cantidad"))
clave= parseInt(prompt("Digite la clave 1 0 2"))
if (clave>=1 && clave<=2){
    if (clave==1){
        prDescuento = precio*cant*0.9
    }else{
        prDescuento = precio*cant*0.8
    }
    alert(`Nombre: ${nombre}\nClave: ${clave}\nPrecio original: ${precio}\nCantidad: ${cant}\nPrecio con descuento: ${prDescuento}`)
}else{
    alert("Valor incorrecto")
}

console.log("PUNTO 8")
let presupuesto, porPedi, porTrau, porPsiq =0
presupuesto = parseFloat(prompt("Ingrese el presupuesto anual"))
porPedi = parseFloat(prompt("Ingrese el porcentaje que le corresponde a Pediatria"))
porTrau = parseFloat(prompt("Ingrese el porcentaje que le corresponde a Traumatologia"))
porPsiq = parseFloat(prompt("Ingrese el porcentaje que le corresponde a Psiquiatria"))
porcentaje = porPedi + porPsiq + porTrau
if (porcentaje == 100){
    prePedi = presupuesto*porPedi/100
    preTrau = presupuesto*porTrau/100
    prePsiq = presupuesto*porPsiq/100
    alert(`Pediatria: ${porPedi} = ${prePedi}\nTraumatologia: ${porTrau} = ${preTrau}\nPsiquiatria: ${porPsiq} = ${prePsiq}`)
}else{
    alert(`Error`)
}


console.log("PUNTO 9")
let precio, distancia, dias = 0
km = 2.5
distancia  = parseFloat(prompt("Ingrese la distancia a recorrer"))
dias = parseInt(prompt("Ingrese la cantidad de dias de estancia"))
if ( dias >= 7 && distancia>800){
    precio = km*distancia*0.7
}else{
    precio = km*distancia
}
alert(`El tiquete ida y vuelta cuesta ${precio} dolares`)
