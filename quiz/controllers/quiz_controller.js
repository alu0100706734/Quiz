var Quiz = require('../models/quiz_model.js');

var quiz = new Quiz();
var current = quiz.randomQuestion();

exports.index = function(req, res, next) {
  res.render('index', { title: 'Quiz' });
};

exports.question = function(req,res) {
  current = quiz.randomQuestion();
  res.render('quizes/question', {pregunta: current.pregunta});
};

exports.answer = function(req, res) {
  var c = 'Incorrecto';

  if (current.respuesta(req.query.respuesta)) { c = 'Correcto'; }
  res.render('quizes/answer', {respuesta: c})
};

exports.lista = function(req, res){
  var n = quiz.numQ();
  var listado = "";

  for (var i=0; i<n; i++){
	listado = listado.concat("Pregunta " + (i+1) + ": " + quiz.getQ(i) + "<br><br>");
}

  res.render('quizes/lista',{lista:listado})
};
