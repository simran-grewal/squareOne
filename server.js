// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var Product = require('./app/models/items');
// configuration ===========================================

// config files
//var db = require('./config/db');
//mongoose.connect('mongodb://localhost:27017/ordermyfood');
var port = process.env.PORT || 5000; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)
mongoose.connect('food:abcd@ds163020.mlab.com:63020/dbfood');
// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
//require('./app/routes')(app); // pass our application into our routes
app.post('/additem', (req, res) => {
	 var name = req.body.name;
	 var image = req.body.image;
	 var price = req.body.price;
	var item = new Product({
			name: name,
			image: image,
			price: price

	});
			item.save((err, docs) => {
				if(err){
				return	res.send("No");
				}
				res.send("Yes");
			})


});

	app.post('/getitem', (req, res) => {
			Product.find((err, docs) => {
				if(err){
				return	res.send("No");
				}
				var arr = docs;
				res.send(arr);
			})
});
app.get('*', function(req, res) {
	res.sendfile('./public/index.html');
});

// start app ===============================================
app.listen(port, function(){
	console.log('Magic happens on port ' + port); 	
});
		// shoutout to the user
exports = module.exports = app; 						// expose app
