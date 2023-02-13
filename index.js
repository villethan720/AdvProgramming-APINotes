const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('Hello API World');
});

/*
app.get('/api/games', (req, res) => {
    res.send(['MarioBros', 'Castlevania', 'Zelda', 'Call of Duty']);
});
*/

/*app.get('/api/games/:id', (req, res) => {
    res.send(req.params.id);
});
*/

//app.get('/api/games/:title/:publisher/:year', (req, res) => {
//    res.send(req.params);
//});

app.get('/api/games/:title/:publisher', (req, res) => {
    res.send([req.params, req.query]);
});

const ppugames =
[   {
        id:1,
        title:'MarioBros'
    },
    {   id:2,
        title:'Fifa'
    },
    {   id:3,
        title:'2K'
    }
];

app.get('/api/games', (req, res) => {
    res.send(ppugames);
});

//query data
app.get('/api/games/:id', (req, res) => {
    const games = ppugames.find(g => g.id === parseInt(req.params.id));
    if(!games) 
        return res.status(404).send('The game with ID given was not found');
    
    res.send(games);
});



const port = process.env.PORT || 4003;
app.listen(port, () => console.log(`Listening to port ${port}`));