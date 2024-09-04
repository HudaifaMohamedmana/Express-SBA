


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
    const id = parseInt(req.params.id);
    
    try{
        const LeagueData = require(`../models/${League}`)
        const post = LeagueData.filter(post => post.id === id);

        if (post.length === 0) {
            res.status(404).send({ Error: `404; id '${id}' is not found` });
        } else {
            res.status(200).send(post);
        }
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}
function getTeamByname(req, res) {
    const League = req.params.league.toLowerCase();
    const name = req.params.name.toLowerCase();
    
    try{
        const LeagueData = require(`../models/${League}`)
        
        const post = LeagueData.filter(post => post.name.toLowerCase() === name);
        console.log(post.length)

        if (post.length === 0) {
            res.status(404).send({ Error: `404 '${name}' not found` });
        } else {
            res.status(200).send(post);
        }
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}


module.exports = {
    getLeague,
    getTeamByID,
    getTeamByname
} 
