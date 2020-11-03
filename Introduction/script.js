// Exercício 01


// var endereco = {
//   rua: "Rua dos pinheiros",
//   numero: 1293,
//   bairro: "Centro",
//   cidade: "São Paulo",
//   uf: "SP"
// }

// Forma com concatenação

// function mostar() {

//   let resposta = 'O usuário mora em ' + endereco.cidade + ' / ' + endereco.uf + ', no bairro ' + endereco.bairro + ', na rua "' + endereco.rua + '" com n° '+ endereco.rua + ".";
//   return resposta;
// }

// Template string

// function mostar() {
//   let resposta = `O usuário mora na rua "${endereco.rua}" / ${endereco.uf}, no bairro ${endereco.bairro}, com n° ${endereco.numero}.`
//   return resposta
// }
// console.log(mostar());


// Exercício 02


// function pares(x, y) {
  
//   dividir y por 2 e Verificar se deu resto 0
//   let cont = y % 2
//   if (cont == 0) {
//     for(let cont = y; y > x; pares(y)) {
//       console.log(y)
//     }
//   }
//   Se sim, adicinar o número e diminuir 2 até chegar no x
//   se não, diminuir 1 e verificar de novo.

// }

// function pares(x, y) {
//   let res = x % 2
//   if (res == 0) {
//     while (x <= y) {
//       console.log(x)
//       x += 2
//     }
//   } else {
//     x++
//     while (x <= y) {
//       console.log(x)
//       x += 2
//     }
//   }
// }

// pares(1, 10);


// Exercício 03


// function temHabilidade(skills, string) {
// 	let res = skills.indexOf(string);

// 	if (res == -1) {
// 		return false
// 	} else {
// 		return true
// 	}
// }

// var string = "Javascript"
// var skills = ["ReactJS", "React Native", "Javascript"];
// temHabilidade(skills, string);


// Exercício 04


// function experiencia(anos) {
// 	if (anos <= 1) {
// 		return "Iniciante";
// 	} else if (anos >= 1 && anos <= 3) {
// 		return "Intermediário";
// 	} else if (anos > 3 && anos <= 6) {
// 		return "Avançado";
// 	} else {
// 		return "Jedi Master"
// 	}
// }

// var anosEstudo = 7;

// experiencia(anosEstudo);


// Exercício 05


// var users = [
// 	{
// 		nome: "Diego",
// 		habilidades: ["Javascript", "ReactJS", "Redux"]
// 	},
// 	{
// 		nome: "Gabriel",
// 		habilidades: ["vueJS", "Ruby on Rails", "Elixir"]
// 	}
// ]


// function showComplete(users) {


// 	for (cont = 0; cont < users.length; cont++) {
// 		name = users[cont].nome
// 		skills = users[cont].habilidades
// 		console.log(`O ${name} possui as habilidades ${skills.join(', ')}`)
// 	}
// }

// showComplete(users)


// --- Another way, using for...of 


// var users = [
// 	{
// 		nome: "Diego",
// 		habilidades: ["Javascript", "ReactJS", "Redux"]
// 	},
// 	{
// 		nome: "Gabriel",
// 		habilidades: ["vueJS", "Ruby on Rails", "Elixir"]
// 	},
// 	{
// 		nome: "João",
// 		habilidades: ["Estuante", "Dedicado", "Curioso"]
// 	},
// 	{
// 		nome: "Guilherme",
// 		habilidades: ["Estuante", "Dedicado", "Curioso"]
// 	}
// ]

// function showComplete(users) {

// 	for (user in users) {
// 		console.log(`O ${users[user].nome} tem as habilidades ${users[user].habilidades.join(', ')}`)
// 	}
// }

// showComplete(users)