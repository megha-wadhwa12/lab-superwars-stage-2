const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for (let i = 0; i < players.length; i++) {
        let hero_or_villain = i%2==0 ? "hero" : "villain"
        // if(i%2==0){
        //     let hero_or_villain = "hero"
        // }
        // else{
        //     let hero_or_villain = "villain"
        // }

        let obj = {
            name:players[i],
            strength: getRandomStrength(),
            image:`images/super-${i+1}.png` ,
            type:hero_or_villain
        }
        detailedPlayers.push(obj)
        
    }

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    var strength = Math.ceil(Math.random()*100)
    return strength
}

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    for(let i=0;i<players.length;i++){
      if(players[i].type == type){
        fragment += `<div class="player">
        <img src="${players[i].image}" alt="">
        <div class="name">${players[i].name}</div>
        <div class="strength">${players[i].strength}</div>
     </div>`
      }
    }

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}