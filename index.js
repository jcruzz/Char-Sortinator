const express = require('express');


const app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
	res.render('client');
});

app.listen(process.env.PORT || 3000);