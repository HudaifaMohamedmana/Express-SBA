
function checkingPrams(post, res, param) {
    if (post.length === 0) {
        res.status(404).send({ Error: `404 '${param}' not found` });
    } else {
        res.status(200).send(post);
    }
}

//----------------------------------------------------------------------------------
function getLeague(req, res ) {
    const League = req.params.League;
    try{
        console.log(League);
        const LeagueData = require(`../models/${League}`);
        
        res.send(LeagueData)

    }catch (error) {
        res.status(500).json({ error: 'Failed to load league data' });
    }

}
function getTeamByID(req, res){
    const League = req.params.league.toLowerCase();
    const LeagueData = require(`../models/${League}`)
    const id = parseInt(req.params.id);
    const post = LeagueData.filter(post => post.id === id);
    checkingPrams(post, res, id);
}
function getTeamByname(req, res) {
    const League = req.params.league.toLowerCase();
    const LeagueData = require(`../models/${League}`)
    const name = req.params.name.toLowerCase();
    const post = LeagueData.filter(post => post.name.toLowerCase() === name);
    checkingPrams(post, res, name);
}


module.exports = {
    getLeague,
    getTeamByID,
    getTeamByname
} 
