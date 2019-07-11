//mario versus link battle
'use strict'
//Event listeners
document.getElementById('mario-Btn').addEventListener('click', marioEvent)
document.getElementById('link-Btn').addEventListener('click', linkEvent)
document.getElementById('attack-Btn').addEventListener('click', calculateEvent)
document.getElementById('battle-Btn').addEventListener('click', battleEvent)
//Event Functions
function marioEvent() {
//mario button
//change image to mario
document.getElementById('img').src = 'images/mario.png'
//html backgroung color=red
document.getElementById('html').style.backgroundColor = 'red'
//body background=pink
document.body.style.backgroundColor = 'pink'
//bullet points
//hero of
document.getElementById('hero-of').innerHTML = 'The Mushroom Kingdom'
//Love Interest
document.getElementById('love').innerHTML = 'Princess Peach'
//Nemesis
document.getElementById('enemy').innerHTML = 'King Bowser'
}

function linkEvent() {
    //link button
    //change image to link
    document.getElementById('img').src = 'images/link.png'
    //html backgroung color=green
    document.getElementById('html').style.backgroundColor = 'green'
    //body background=lightgreen
    document.body.style.backgroundColor = 'lightgreen'
    //bullet points
    
    //hero of
    document.getElementById('hero-of').innerHTML = 'Hyrule'
    //Love Interest
    document.getElementById('love').innerHTML = 'Princess Zelda'
    //Nemesis
    document.getElementById('enemy').innerHTML = 'Ganondorf'
    }

    function calculateEvent() {
        //Read inputs to detemrine strenght/defence
        let mariostrength = document.getElementById('m-strength').value
        let linkstrength = document.getElementById('l-strength').value
        let mariodefence = document.getElementById('m-defence').value
        let linkdefence = document.getElementById('l-defence').value
        //Calculate the attack values
        let marioAttack = 2*mariostrength / linkdefence + 5
        let linkAttack = (linkstrength + 15) / mariodefence
        //Output the attack values
       document.getElementById('m-attackvalue').innerHTML = Math.floor (marioAttack)
        document.getElementById('l-attackvalue').innerHTML = Math.floor (linkAttack)
    }

    function battleEvent() {
        let word1 = document.getElementById('word1').value
        let word2 = document.getElementById('word2').value
        let word3 = document.getElementById('word3').value
        let mAttack = document.getElementById('m-attackvalue').value
        let lAttack = document.getElementById('l-attackvalue').value

    //Battle mad lib text
    let battletext = '"Mario lunged at Link and prepared his ' + word1 + ' for an atttack of ' +mAttack + ' , but Link was too quick. Link unsheathed his ' + word2 + ' and struck Mario first! Mario took ' + lAttack + ' damage. Mario let out a ' + word3 + ' and collapsed to the ground."'

    document.getElementById('battle-discription').innerHTML = battletext
    }

