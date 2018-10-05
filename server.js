// GRAB THE PACKAGES/VARIABLES WE NEED
// ==================================================
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();
const PORT = process.env.PORT || 5000
// CONFIGURE THE APP
// ==================================================
// tell node where to look for site resources
app.use(express.static(__dirname + '/public'));
// set the view engine to 5000
app.set('view engine', 'ejs');
// configure instagram app with your access token
// we'll get to this soon
// SET THE ROUTES
// ===================================================
// home page route - our profile's images
app.get('/', function(req, res) {
// use the instagram package to get our profile's media
 ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {



// render the home page and pass in our profile's images
res.render('pages/index', { grams: medias });
    });
});
// configure instagram app with your access_token
ig.use({
    // get access token here: http://instagram.pixelunion.net/
    access_token: '1496064569.1677ed0.abc51f32213242f4a085427b77b33732',
});
ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {});
// START THE SERVER
// ==================================================
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
