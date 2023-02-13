const express = require('express');
const { parse } = require('path/posix');
const app = express();

app.use(express.json());

const teams = [{
    id: 1,
    team: 'Eagles'
},
{id: 2,
team:'Steelers'
},
{
    id:3,
    team: 'Chargers'
}];

//get all teams
app.get('/api/teams', (req, res) => {
    res.send(teams);
});

//get teams by id
app.get('/api/teams/:id', (req, res) => {
    const team = teams.find(t => t.id === parseInt(req.params.id))
    if(!team) return res.status(404).send('The team given ID was not found')
    res.send(teams);
});

//add a team
app.post('/api/teams', (req, res) => {
    const strteam = {
        id: teams.length +1,
        team: req.body.team
    }

    teams.push(strteam);
    res.send(strteam)
    
});

//update teams
app.put('/api/teams/:id',(req, res) => {
    const myteam = teams.find(t => t.id === parseInt(req.params.id));
    if(!myteam) return res.status(404).send('the team with the given id was not found');

    myteam.team = req.body.team;
    res.send(myteam);
});

//delete team
app.delete('/api/teams/:id',(req, res) => {
    const myteam = teams.find(t => t.id === parseInt(req.params.id));
    if(!myteam) return res.status(404).send('the team with the given id was not found');

    const index = teams.indexOf(myteam);
    teams.splice(index, 1);

    res.send(myteam);
});
//click delete 

//COnfiguration port
const port = process.env.port || 4020;
app.listen(port, () => console.log('Listening on port ${port}...'))

//to add on a post
//{
    //"id":4,
    //"team": 'Panthers'
//}

//then click set button to test