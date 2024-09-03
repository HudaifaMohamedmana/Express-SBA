const ligue1Teams = [
    {
        id: 1,
        name: "Paris Saint-Germain",
        logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
        history: "Founded in 1970, Paris Saint-Germain (PSG) has become the most successful club in France, winning numerous Ligue 1 titles, particularly after significant investments from Qatar Sports Investments in 2011."
    },
    {
        id: 2,
        name: "Olympique de Marseille",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/6d/Olympique_Marseille_logo.svg",
        history: "Established in 1899, Olympique de Marseille is one of France's most storied clubs, known for winning the UEFA Champions League in 1993, the only French club to do so."
    },
    {
        id: 3,
        name: "AS Monaco",
        logo: "https://upload.wikimedia.org/wikipedia/en/b/ba/AS_Monaco_FC.svg",
        history: "Founded in 1924, AS Monaco has won 8 Ligue 1 titles and has a strong history of developing young talents. The club is based in Monaco but plays in the French league."
    },
    {
        id: 4,
        name: "Olympique Lyonnais",
        logo: "https://upload.wikimedia.org/wikipedia/en/c/c6/Olympique_Lyonnais.svg",
        history: "Founded in 1950, Olympique Lyonnais (Lyon) dominated French football in the 2000s, winning seven consecutive Ligue 1 titles from 2002 to 2008."
    },
    {
        id: 5,
        name: "Lille OSC",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/62/LOSC_Lille_crest.svg",
        history: "Lille OSC, founded in 1944, is known for its strong youth academy and won its most recent Ligue 1 title in 2021, breaking PSG's dominance."
    },
    {
        id: 6,
        name: "Girondins de Bordeaux",
        logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/FC_Girondins_de_Bordeaux_logo.svg",
        history: "Founded in 1881, Bordeaux has won six Ligue 1 titles and has a rich history in French football, producing numerous international players."
    },
    {
        id: 7,
        name: "Stade Rennais",
        logo: "https://upload.wikimedia.org/wikipedia/en/4/42/Stade_Rennais_F.C..svg",
        history: "Established in 1901, Stade Rennais, also known as Rennes, is known for its strong youth academy and recent successes in domestic cups and European competitions."
    },
    {
        id: 8,
        name: "OGC Nice",
        logo: "https://upload.wikimedia.org/wikipedia/en/e/e9/OGC_Nice_logo.svg",
        history: "Founded in 1904, OGC Nice has won four Ligue 1 titles, with the last coming in 1959. The club has experienced a resurgence in recent years with new ownership."
    },
    {
        id: 9,
        name: "Nantes",
        logo: "https://upload.wikimedia.org/wikipedia/en/2/27/FC_Nantes_logo.svg",
        history: "Established in 1943, FC Nantes has won eight Ligue 1 titles and is known for its youth academy, producing talents like Marcel Desailly and Didier Deschamps."
    },
    {
        id: 10,
        name: "Saint-Étienne",
        logo: "https://upload.wikimedia.org/wikipedia/en/4/43/ASSE_logo.svg",
        history: "Founded in 1919, Saint-Étienne is one of the most successful clubs in French history, winning 10 Ligue 1 titles, the most of any French club."
    },
    {
        id: 11,
        name: "Montpellier HSC",
        logo: "https://upload.wikimedia.org/wikipedia/en/f/fc/Montpellier_HSC_logo.svg",
        history: "Founded in 1974, Montpellier won its first and only Ligue 1 title in 2012, surprising many by beating PSG to the championship."
    },
    {
        id: 12,
        name: "RC Strasbourg",
        logo: "https://upload.wikimedia.org/wikipedia/en/4/42/Racing_Club_de_Strasbourg_logo.svg",
        history: "Founded in 1906, RC Strasbourg is one of the oldest clubs in France and won its only Ligue 1 title in 1979. The club has a passionate fanbase in the Alsace region."
    },
    {
        id: 13,
        name: "Stade de Reims",
        logo: "https://upload.wikimedia.org/wikipedia/en/3/3f/Stade_de_Reims_logo.svg",
        history: "Stade de Reims, founded in 1931, was a dominant force in French football in the 1950s, winning six Ligue 1 titles and reaching the European Cup final twice."
    },
    {
        id: 14,
        name: "Angers SCO",
        logo: "https://upload.wikimedia.org/wikipedia/en/0/05/Angers_SCO.svg",
        history: "Founded in 1919, Angers SCO is a modest club with a solid history in Ligue 1, known for its resilience and strong connection with the local community."
    },
    {
        id: 15,
        name: "Stade Brestois 29",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/5e/Stade_Brestois_29_logo.svg",
        history: "Founded in 1950, Stade Brestois, commonly known as Brest, has spent most of its history in the lower leagues but has established itself as a Ligue 1 club in recent years."
    },
    {
        id: 16,
        name: "FC Lorient",
        logo: "https://upload.wikimedia.org/wikipedia/en/2/24/FC_Lorient_crest.svg",
        history: "Founded in 1926, FC Lorient has a reputation for developing young talent and won the Coupe de France in 2002, the club's most significant achievement."
    },
    {
        id: 17,
        name: "Toulouse FC",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/62/Toulouse_FC_logo.svg",
        history: "Founded in 1970, Toulouse FC has had fluctuating success in Ligue 1, known for its youth academy and occasional strong performances in the league."
    },
    {
        id: 18,
        name: "Clermont Foot",
        logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Clermont_Foot_logo.svg",
        history: "Founded in 1911, Clermont Foot made its debut in Ligue 1 in the 2021-2022 season, marking a historic moment for the club."
    },
    {
        id: 19,
        name: "RC Lens",
        logo: "https://upload.wikimedia.org/wikipedia/en/1/1a/Rc_lens_logo.svg",
        history: "Founded in 1906, RC Lens has a rich history, including winning the Ligue 1 title in 1998. The club is known for its passionate supporters and strong community ties."
    },
    {
        id: 20,
        name: "Ajaccio",
        logo: "https://upload.wikimedia.org/wikipedia/en/c/c8/AC_Ajaccio_logo.svg",
        history: "Founded in 1910, AC Ajaccio is based in Corsica and has had several spells in Ligue 1, known for its resilient performances and connection with the local community."
    }
];
module.exports = ligue1Teams;