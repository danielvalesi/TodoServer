var express = require('express');
var bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.json());



// Metodo GET
// Vai trazer os parametros e colocar dentro da variavel request... tudo do cliente para oervidor
// response é resposta para o cliente
// quando acessar a pagina inicial da um hello word
/*
app.get('/', function(request, response) {
	response.send('Hello World');
});
*/

var tarefas = [];


// GET (READ)
app.get('/api/todo', function(request, response) {
	response.json(tarefas);
});

// GET (READ)
app.get('/api/todo/:id', function(request, response) {

	for (var i = 0; i < tarefas.legth; i++) {
		if (tarefas[i].id == request.param.id) {
			return response.json(tarefas[i]);
		}
	}

});



// POST (CREATE)
app.post('/api/todo', function(request, response) {
	var tarefa = {
		"id" : new Date().getTime(),
		"texto" : request.body.texto,
		"concluida" : false

	};

	tarefas.push(tarefa);

	response.send(200); // OK HTTP
});




// PUT (UPDATE)
app.put('/api/todo', function(request, response) {
	response.json(cliente);
});



// DELETE (DELETE)
app.delete('/api/todo', function(request, response) {
	response.json(cliente);
});


/*

 app.get('/cliente', function(request, response) {

 	var cliente = {
 		id: 1,
 		nome: "fulano"
 	};
 	response.json(cliente);
 });

*/


app.listen('3000', function(){
	console.log('servidor iniciado na porta 3000');
});
