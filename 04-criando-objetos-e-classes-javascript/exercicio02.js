/*
    Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura)).
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
    do seu IMC.
*/

class Pessoa {
    nome; 
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarIMC() {
        const imc = this.calcularIMC();

        if (imc !== null) {
            let situacao;
        
            if (imc < 18.5) {
        
                situacao = 'ABAIXO DO PESO'
                return `SITUAÇÃO = ${situacao} \nIMC = ${imc.toFixed(2)}`;
        
            } else if (imc >= 18.5 && imc <= 25) {
                
                situacao = 'PESO NORMAL'
                return `SITUAÇÃO = ${situacao} \nIMC = ${imc.toFixed(2)}`;
        
            } else if (imc >= 25 && imc <= 30) {
        
                situacao = 'ACIMA DO PESO'
                return `SITUAÇÃO = ${situacao} \nIMC = ${imc.toFixed(2)}`;
        
            } else if (imc >= 30 && imc <= 40) {
        
                situacao = 'OBESO'
                return `SITUAÇÃO = ${situacao} \nIMC = ${imc.toFixed(2)}`;
        
            } else {
        
                situacao = 'OBESIDADE GRAVE'
                return `SITUAÇÃO = ${situacao} \nIMC = ${imc.toFixed(2)}`;
        
            }
        } else {
            return `O IMC não é válido!`;
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose);
console.log(jose.classificarIMC());
