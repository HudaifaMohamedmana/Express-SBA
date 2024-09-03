const premierLeagueTeams = [
    {
        id: 1,
        name: "Arsenal",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
        history: "Founded in 1886, Arsenal is one of the most successful clubs in English football, known for its 'Invincibles' season in 2003-04 where they went unbeaten in the Premier League."
    },
    {
        id: 2,
        name: "Aston Villa",
        logo: "https://upload.wikimedia.org/wikipedia/en/f/f9/Aston_Villa_FC_crest_%282016%29.svg",
        history: "Established in 1874, Aston Villa is one of the oldest clubs in England and has won the English top-tier title seven times, with their last league title in 1981."
    },
    {
        id: 3,
        name: "Bournemouth",
        logo: "https://upload.wikimedia.org/wikipedia/en/e/e5/AFC_Bournemouth_%282013%29.svg",
        history: "Founded in 1899, Bournemouth, also known as 'The Cherries,' achieved their first-ever promotion to the Premier League in 2015 under manager Eddie Howe."
    },
    {
        id: 4,
        name: "Brentford",
        logo: "https://upload.wikimedia.org/wikipedia/en/3/3a/Brentford_FC_crest.svg",
        history: "Brentford, established in 1889, is known for its data-driven approach to recruitment. They earned their first promotion to the Premier League in 2021."
    },
    {
        id: 5,
        name: "Brighton & Hove Albion",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/6d/Brighton_%26_Hove_Albion_logo.svg",
        history: "Brighton, founded in 1901, returned to the top flight in 2017 after a 34-year absence. They are known for their community-oriented approach and sustainable club model."
    },
    {
        id: 6,
        name: "Burnley",
        logo: "https://upload.wikimedia.org/wikipedia/en/0/02/Burnley_FC_badge.svg",
        history: "Founded in 1882, Burnley is one of the oldest football clubs in England. The club has won the top-tier title twice, with their most recent title in 1960."
    },
    {
        id: 7,
        name: "Chelsea",
        logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
        history: "Chelsea was founded in 1905 and has become one of the most successful English clubs in the modern era, winning numerous Premier League titles and the UEFA Champions League twice."
    },
    {
        id: 8,
        name: "Crystal Palace",
        logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Crystal_Palace_FC_logo.svg",
        history: "Crystal Palace, established in 1905, is known for its passionate fanbase and the iconic Selhurst Park stadium. The club has spent many seasons bouncing between the top two tiers."
    },
    {
        id: 9,
        name: "Everton",
        logo: "https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg",
        history: "Founded in 1878, Everton is one of England’s oldest and most historic clubs. They have won nine league titles, although their last league championship came in 1987."
    },
    {
        id: 10,
        name: "Fulham",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/5e/Fulham_FC_%28shield%29.svg",
        history: "Established in 1879, Fulham is London’s oldest professional football club. They have spent much of their history moving between the top two tiers of English football."
    },
    {
        id: 11,
        name: "Liverpool",
        logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
        history: "Founded in 1892, Liverpool is one of the most successful clubs in English football history, with 19 league titles and six European Cups, including a recent Premier League win in 2020."
    },
    {
        id: 12,
        name: "Luton Town",
        logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/Luton_Town_FC_badge.svg",
        history: "Founded in 1885, Luton Town enjoyed top-flight football in the 1980s and 1990s. They achieved promotion back to the Premier League for the 2023-24 season after a long absence."
    },
    {
        id: 13,
        name: "Manchester City",
        logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
        history: "Manchester City, founded in 1880, has become one of the most dominant forces in English football in recent years, winning multiple Premier League titles, especially since 2011."
    },
    {
        id: 14,
        name: "Manchester United",
        logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
        history: "Founded in 1878, Manchester United is one of the most famous football clubs in the world, with 20 league titles and three UEFA Champions League trophies to their name."
    },
    {
        id: 15,
        name: "Newcastle United",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg",
        history: "Newcastle United, established in 1892, is a club with a passionate fan base. They have won the top-flight title four times, with their most recent championship in 1927."
    },
    {
        id: 16,
        name: "Nottingham Forest",
        logo: "https://upload.wikimedia.org/wikipedia/en/d/de/Nottingham_Forest_logo.svg",
        history: "Nottingham Forest, founded in 1865, is best known for winning back-to-back European Cups in 1979 and 1980 under legendary manager Brian Clough."
    },
    {
        id: 17,
        name: "Sheffield United",
        logo: "https://upload.wikimedia.org/wikipedia/en/3/35/Sheffield_United_FC_logo.svg",
        history: "Sheffield United, founded in 1889, won the English top-flight title in 1898 and are known as the 'Blades' due to the city's history with the steel industry."
    },
    {
        id: 18,
        name: "Tottenham Hotspur",
        logo: "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg",
        history: "Tottenham Hotspur, founded in 1882, has a rich history including winning two league titles and multiple FA Cups. They are known for their attacking style of play."
    },
    {
        id: 19,
        name: "West Ham United",
        logo: "https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg",
        history: "Founded in 1895, West Ham United is known for its strong ties to the local community and its tradition of developing young talent, famously providing three players for England's 1966 World Cup-winning team."
    },
    {
        id: 20,
        name: "Wolverhampton Wanderers",
        logo: "https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg",
        history: "Wolves, established in 1877, have a proud history including three league titles and are credited with playing a significant role in the establishment of European competitions."
    }
];
module.exports = premierLeagueTeams