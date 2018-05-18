var express = require('express'),
    twilio = require('twilio'),
    app = express();

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Helpdesk Chat'
    });
});

app.get('/chat', (req, res) => {
    //req has data on name and phone number to chat with
    console.log(req);
    bodyParser.json();
    res.render('chat', {
        title: "Chat Page with " + 123
    });
});

app.post('/chat', (req, res) => {
    //new message from client
    console.log(req.body);
});

app.listen(3000, () => console.log('App listening on port 3000!'));
