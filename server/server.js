/*La configuración con respecto al puerto y otas 
cosas del servidor*/
require('./config/config');

const express = require('express');
const app = express();

const bodyparser = require('body-parser');

/*Las siguientes dos líneas son middlewares:
	Cada petición que hagamos pasa por esas dos lineas.
*/
/*Traduce application/x-www-form-url-blablablabla
*/
app.use(bodyparser.urlencoded({extended:false}));
/*Traduce application/json
*/
app.use(bodyparser.json());


app.get('/usuario', (req,res) => {
	/*
		La respuesta se envía en formato json
	*/
	res.json('get usuario');
});

app.post('/usuario', (req, res) => {

	let body = req.body;
	if(body.persona.nombre === undefined){
		/*
			EL json lleva toda la información que yo quiera
			brindar acerca del error.
		*/
		res.status(400).json({
			ok:false,
			message:'El nombre es necesario'
		});
	}else{
		res.json({
			body
		});
	}
	
});

app.put('/usuario/:id', (req, res) => {
	/* 
	El id de params.id debe tener el mismo nombre que
	el id de la ruta. Si en la ruta fuera aidi, sería params.aidi
	*/
	let id =  req.params.id;
	res.json(
	{
		id
	});
});

app.delete('/usuario', (req, res) => {

});

app.listen(process.env.PORT, () => {
	console.log(`Escuchando en el puerto ${process.env.PORT}`);
});