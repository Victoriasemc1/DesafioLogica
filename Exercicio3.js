class Hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(ataque){
        if(this.tipo == "mago"){
            this.ataque = "magia"
        }else if(this.tipo == "guerreiro"){
            this.ataque = "espada" 
        }else if(this.tipo == "monge"){
            this.ataque = "artes marciais"
        }else if(this.tipo == "ninja"){
            this.ataque = "shuriken"
        }
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}
let aventura = new Hero("Vitoria", 19, "mago")
aventura.atacar()