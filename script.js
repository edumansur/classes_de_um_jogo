class hero{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atack(){
        let ataque;

        if(this.tipo === 'guerreiro'){
            ataque = 'espada';
        } if(this.tipo === 'monge'){
            ataque = 'artes marciais';
        } if(this.tipo === 'ninja'){
            ataque = 'shuriken';
        } if(this.tipo === 'mago'){
            ataque = 'magia';
        } //else{
            //console.log("Tipo de herói invalido.")
        //}
        

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let pp = [
    new hero('jurandir', 40, 'guerreiro'),
    new hero('jose', 40, 'monge'),
    new hero('jamaica', 40, 'mago'),
    new hero('juao', 40, 'ninja')
]


for(let h of pp){
    h.atack()
}