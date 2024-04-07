//Math.random()-->it generates a random number between
              //  0 and 1(not inclusive of 1)
//math.floor(1.92)-->removes decimal
// let firstCard =getRandomCard()
// let secondCard =getRandomCard()
let isAlive =false
let hasBlackJack =false
let cards =[]
let sum =0
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let messageEl =document.getElementById("message-el")
let playerEl =document.getElementById("player-el")
//

function getRandomCard(){// max no of deck is 13 that is king
    let num = Math.floor(Math.random() *13) +1 //add 1 ke 0 endayjemr
    if (num===1){//  b/c deck A worth 11 usually
        return 11
    }
    else if(num==11 || num ==12 || num== 13){//jack queen king
        return 10
    }
    else{
        return num
    }
}


function start(){
    let firstCard =getRandomCard()
    let secondCard =getRandomCard()
    cards =[firstCard,secondCard]
    sum =cards[0] +cards[1]
    isAlive =true
    runder()
}

function runder(){
    cardEl.textContent ="Cards: "  //updated to prevent html paragraph
    for(let i =0;i<cards.length;i++){
        cardEl.textContent +=cards[i] +" "
    }
    //sumEl.textContent += cards[0] +" " + cards[1] 
    sumEl.textContent ="Sum: " + sum
    
    if(sum <21){
        messageEl.textContent =  "Do you want to draw a new card?"
        isAlive =true
    }
    else if(sum===21){
        messageEl.textContent = "wohoo! you've got Blackjack"
        balance()
        hasBlackJack =true
    }
    else{
        messageEl.textContent = "You're out of the game"
        balance()
        isAlive =false
    }
}


function Addis(){
    if(isAlive &&  !hasBlackJack){
        let newcard =getRandomCard()
        cards.push(newcard)
        sum +=newcard
        runder()
    }
}

//try using object
let player ={
    name:"zack",
    Amount:500
}

playerEl.innerText = player.name +" :Balance --> $" +player.Amount
function balance(){
    if(sum>21){
        player.Amount -= 100
        playerEl.innerText =player.name + " :Balance --> $" +player.Amount
        
    } 
    else if(sum === 21){
        player.Amount +=1000
        playerEl.innerText =player.name + " :Balance --> $" +player.Amount
    }
}

////to prevent repitition we used to call the above function again
    //cardEl.textContent += " " + cards[2]
    // for(let i =0;i<cards.length;i++){
    //     cardEl.textContent = "Cards:"+cards[i] +" "
    // }
    // sumEl.textContent ="Sum:" + sum
    // if(sum<21){ //you can't use sumEl rather use another sum var
    //     messageEl.textContent =  "Do you want to draw a new card?"
        

    // }
    // else if(sum===21){
    //     messageEl.textContent = "wohoo! you've got Blackjack"
    // }
    // else{
    //     messageEl.textContent = "You're out of the game"
    // }
