// modules =================================================
var express        = require('express');
const path = require('path');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
const hbs  = require('hbs');
// hbs.registerPartials(__dirname + '/public') // it is for partials .in this i am specifing dericotry where i will use all my handlebars
// app.set('view engine', 'hbs');
const publicPath = path.join(__dirname, '/public');
//var{mongoose} = require('./db/mongoose');
var Product = require('./app/models/items');
var mongodb = require('mongodb');
mongoose.Promise = global.Promise;
// configuration ===========================================

// config files
var db = require('./config/db');
// mongoose.connect('mongodb://localhost:27017/ordermyfood');
mongoose.connect('food:abcd@ds163020.mlab.com:63020/dbfood');
var port = process.env.PORT || 3001; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters

app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
 // set the static files location /public/img will be /img for users
app.use(express.static(publicPath));
// routes ==================================================
require('./app/routes')(app); // pass our application into our routes
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


// app.get('/user', function(req, res) {
// 	res.sendfile('./public/user.html');
// });
//app.use('/', require('./app/routes'));

// start app ===============================================

app.use("/menu", express.static(__dirname + "/public"));
app.use("/additem", express.static(__dirname + "/public"));



app.listen(port);
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app
