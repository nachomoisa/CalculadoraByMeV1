function agregar(valor){

    document.getElementById('pantalla').value += valor 

}

function borrar(){
document.getElementById('pantalla').value= ''

}

function calcular(){

const valorPantalla = document.getElementById('pantalla').value





if (valorPantalla === '17/10/2021') {
    document.getElementById('pantalla').value= 'ROMI SOS EL AMOR DE MI VIDA'
 
} else {
    
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value= resultado
}

}
