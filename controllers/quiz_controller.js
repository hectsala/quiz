// GET /quizes/question
exports.question = function(req, res) {
  res.render('quizes/question', {pregunta: 'Capital de Italia'});
};

// GET /quizes/answer
exports.answer = function(req, res) {
  if (req.query.respuesta === 'Roma') {
  	 res.render('quizes/answer', {respuesta: 'Correcto'});
  } else {
  	 res.render('quizes/answer', {respuesta: 'Incorrecto'});
  }
};

// GET /author
exports.author = function(req, res) {
  res.render('author', { nombre: 'HmAhDyGg Soft S.A',
  imagen: '../images/mp.jpg', video: '../images/peru.mp4' });
};
