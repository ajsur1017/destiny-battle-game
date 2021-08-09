const randomNum = (num) => {
    return Math.floor(Math.random() * num)
}
class Gaurdian {
    constructor(name, grenade, weapon, ultimate) {
        this.name = name
        this.health = 200
        this.strength = randomNum(10)
        this.abilities = [
            {name: grenade, strength: randomNum(20)},
            {name: 'Melee', strength: randomNum(10)},
            {name: ultimate, strength: randomNum(100)},
            {name: weapon, strength: randomNum(20)}
        ]
    }
    attack(target){
        const ability = randomNum(this.abilities.length)
        const damage = randomNum(this.abilities[ability].strength)
        target.health -= damage
        console.log(`${this.name} attacked ${target.name} with ${this.abilities[ability].name} for ${damage} damage leaving them with ${target.health}`)
    }
}
class DarkGaurdian {
    constructor(name, grenade, weapon, ultimate){
        this.name = name
        this.health = 200
        this.strength = randomNum(10)
        this.abilities = [
            {name: grenade, strength: randomNum(20)},
            {name: 'Melee', strength: randomNum(10)},
            {name: ultimate, strength: randomNum(100)},
            {name: weapon, strength: randomNum(20)},
        ]
    }
    attack(target){
        const ability = randomNum(this.abilities.length)
        const damage = randomNum(this.abilities[ability].strength)
        target.health -= damage
        console.log(`${this.name} attacked ${target.name} with ${this.abilities[ability].name} for ${damage} damage leaving them with ${target.health}`)
    }
}
class HiveGod {
    constructor(name){
        this.name = name
        this.health = 1000
        this.strength = randomNum(10)
        this.abilities = [
            {name: 'Corrode', strength: randomNum(10)},
            {name: 'Decay', strength: randomNum(20)},
            {name: 'Soul Fire', strength: randomNum(20)},
            {name: 'Corruption', strength: randomNum(50)},
        ]
    }
    attack(target){
        const ability = randomNum(this.abilities.length)
        const damage = randomNum(this.abilities[ability].strength)
        target.health -= damage
        console.log(`${this.name} attacked ${target.name} with ${this.abilities[ability].name} for ${damage} damage leaving them with ${target.health}`)
    }
}
const titan = new Gaurdian('Zavala', 'Pulse Grenade', 'Fatebringer', 'Thunder Crash')
const hunter = new Gaurdian('Cayde','Tripmine Grenade', 'Hung Jury SR4', 'Golden Gun')
const warlock = new Gaurdian('Ikora', 'Vortex Grenade', 'Posterity', 'Nova Bomb')
const darkTitan = new DarkGaurdian('Drifter', 'Glacier Grenade', 'Blasphemer', 'Behemoth')
const darkHunter = new DarkGaurdian('The Stranger','Duskfield Grenade', 'Apostate', 'Revanent')
const darkWarlock = new DarkGaurdian('Eris Mourn', 'Coldsnap Grenade', 'Thorn', 'Winters Gile')
const boss = new HiveGod('Savathun')
// console.log(titan)
// console.log(warlock)
// console.log(hunter)
// console.log(darkTitan)
// console.log(darkWarlock)
// console.log(darkHunter)
// console.log(boss)

// Toggles //

let gameOver = true
let lightDark = true

// Functions //

// Titan v Dark
// while(gameOver){
//     if(lightDark){
//         titan.attack(darkTitan)
//     } else {
//         darkTitan.attack(titan)
//     }
//     lightDark = !lightDark
//     if (titan.health <= 0){
//         console.log(`Darkness Previals!`)
//         gameOver = false;
//     }
//     if (darkTitan.health <= 0){
//         console.log(`The Light Previals!`)
//         gameOver = false;
//     }
// }
// while(gameOver){
//     if(lightDark){
//         titan.attack(darkHunter)
//     } else {
//         darkHunter.attack(titan)
//     }
//     lightDark = !lightDark
//     if (titan.life <= 0){
//         console.log(`Darkness Previals!`)
//         gameOver = false;
//     }
//     if (darkHunter.life <= 0){
//         console.log(`The Light Previals!`)
//         gameOver = false;
//     }
// }
// while(gameOver){
//     if(lightDark){
//         titan.attack(darkWarlock)
//     } else {
//         darkWarlock.attack(titan)
//     }
//     lightDark = !lightDark
//     if (titan.life <= 0){
//         console.log(`Darkness Previals!`)
//         gameOver = false;
//     }
//     if (darkWarlock.life <= 0){
//         console.log(`The Light Previals!`)
//         gameOver = false;
//     }
// }
// // Hunter v Dark
// while(gameOver){
//     if(lightDark){
//         hunter.attack(darkTitan)
//     } else {
//         darkTitan.attack(hunter)
//     }
//     lightDark = !lightDark
//     if (hunter.life <= 0){
//         console.log(`Darkness Previals!`)
//         gameOver = false;
//     }
//     if (darkTitan.life <= 0){
//         console.log(`The Light Previals!`)
//         gameOver = false;
//     }
// }
// while(gameOver){
//     if(lightDark){
//         hunter.attack(darkHunter)
//     } else {
//         darkHunter.attack(hunter)
//     }
//     lightDark = !lightDark
//     if (hunter.life <= 0){
//         console.log(`Darkness Previals!`)
//         gameOver = false;
//     }
//     if (darkHunter.life <= 0){
//         console.log(`The Light Previals!`)
//         gameOver = false;
//     }
// }
// while(gameOver){
//     if(lightDark){
//         hunter.attack(darkWarlock)
//     } else {
//         darkWarlock.attack(hunter)
//     }
//     lightDark = !lightDark
//     if (hunter.life <= 0){
//         console.log(`Darkness Previals!`)
//         gameOver = false;
//     }
//     if (darkWarlock.life <= 0){
//         console.log(`The Light Previals!`)
//         gameOver = false;
//     }
// }
// // Warlock v Dark
// while(gameOver){
//     if(lightDark){
//         warlock.attack(darkTitan)
//     } else {
//         darkTitan.attack(warlock)
//     }
//     lightDark = !lightDark
//     if (warlock.life <= 0){
//         console.log(`Darkness Previals!`)
//         gameOver = false;
//     }
//     if (darkTitan.life <= 0){
//         console.log(`The Light Previals!`)
//         gameOver = false;
//     }
// }
// while(gameOver){
//     if(lightDark){
//         warlock.attack(darkHunter)
//     } else {
//         darkHunter.attack(warlock)
//     }
//     lightDark = !lightDark
//     if (warlock.life <= 0){
//         console.log(`Darkness Previals!`)
//         gameOver = false;
//     }
//     if (darkHunter.life <= 0){
//         console.log(`The Light Previals!`)
//         gameOver = false;
//     }
// }
// while(gameOver){
//     if(lightDark){
//         warlock.attack(darkWarlock)
//     } else {
//         darkWarlock.attack(warlock)
//     }
//     lightDark = !lightDark
//     if (warlock.life <= 0){
//         console.log(`Darkness Previals!`)
//         gameOver = false;
//     }
//     if (darkWarlock.life <= 0){
//         console.log(`The Light Previals!`)
//         gameOver = false;
//     }
// }
// // Light v Savathun

const light = [titan, hunter, warlock]
console.log(light)

while(gameOver){
    if(lightDark){
        titan.attack(boss)
        warlock.attack(boss)
        hunter.attack(boss)
    } else {
        for (let i = 0; i < light.length; i++) {
            boss.attack(light[i]); // can add random value
        }
    }
    lightDark = !lightDark
    if (light.health <= 0){
        console.log(`Your light fades away. The Last City falls to darkness`)
        gameOver = false;
    }
    if (boss.health <= 0){
        console.log(`You saved The Last City of humanity!`)
        gameOver = false;
    }
}