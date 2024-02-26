//interruptures.
const sortear = () => {

let nomes = ["Moranguinho", "Amorinha", "Laranjinha", "Gotinha de limão"," Cachinhos de framboesa", "Cerejinha"];

let h1Nome = document.getElementById("nome");// . é o método, let diferente do var some da memória depois de fazer seu papel no código e tudo em "" é uma string

let achouNumero = false;
let numeroSorteado;

while (achouNumero == false){//estrutura de repetição, dis == é um comparação
    numeroSorteado = Math.floor(Math.random() * 100);
    if(numeroSorteado < nomes.length){ //length é o numero de nomes, if é validação
        achouNumero = true;

    }
}

switch (numeroSorteado){

    
        case 0:
        h1Nome.innerText = nomes [numeroSorteado];
        break;

        case 1:
        h1Nome.innerText = nomes [numeroSorteado];
        break;

        case 2:
        h1Nome.innerText = nomes [numeroSorteado];
        break;

       case 3:
        h1Nome.innerText = nomes [numeroSorteado];
        break;

       case 4:
        h1Nome.innerText = nomes [numeroSorteado];
        break;

       case 5:
        h1Nome.innerText = nomes [numeroSorteado];
        break;

       case 6:
        h1Nome.innerText = nomes [numeroSorteado];
        break;

       default:
        h1Nome.innerText = "Ops! Nome não consta na lista"} 

}
