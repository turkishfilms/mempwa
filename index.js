

//const NumOfItems = 50,
//      itemCount = Math.round(NumOfItems/3)*3,
 //     itemChoices = [1,2,3,4,5,6,7,8,9],
//      allMode = 0

let unroundedNum = 50, //at least this many will be shown
        itemRoundNum = 3 //the multiple of number of items
        itemCount = Math.round(unroundedNum / itemRoundNum) * itemRoundNum,
        itemChoices = [1,2,3,4,5,6,7,8,9], //symbol selection
        mode = 0, /*
        item schedule = 0,
        grid = 1,
        */
        numItemsShown = 1,
        itemsShownSchedule = [], //this schedule will be repeated
        specialRules = [], /*
        trigger value
        if trigger is true, value(s) will be omit from selection
        */
        items = [],
        currentIndex = -1,
        correct = '',
        raw ='',
        shown = 0

if(raw) raw.split('')
else items = []

document.getElementById("mem").innerHTML = `Memory (${itemCount})`



function prevItem(){
currentIndex--
displayItem()
}

function nextItem(){
if(!items.length) return
currentIndex++
displayItem()
}

function displayItem(){
document.getElementById('output').innerHTML = `${items[currentIndex]}${currentIndex % 2 == 0 ? '': ':'}`
if(currentIndex > itemCount-1) document.getElementById('output').innerHTML = `Guess${currentIndex%2==0?':':''}`
else if(currentIndex < 0) document.getElementById('output').innerHTML = `poop${currentIndex%2==0?':':''}`
}


function guess(guess){
        let numberCorrect = 0

        for(let i = 0; i < itemCount; i++) {if(guess.toString()[i] == items[i])numberCorrect++}
        document.getElementById('output').innerHTML = `You Got ${(numberCorrect/itemCount).toPrecision(2) * 100}% (${numberCorrect}/${itemCount}) Right! Actual:Guess
 ${correct} : ${guess}`
}

function genSeq(){
        let seq = []
        for(let i = 0; i < itemCount; i++) seq.push(Math.ceil(Math.random() * itemChoices.length));     
        return seq
}

/* ---TODO---
generate sequence according to user defined rules
ruler definer ui

allow for different number of symbols to be displayed at once.
schedule number of numbers
fix event loop code
show errors more clearly
better UI ?
save progress outs code on screen you copy to clipboard and paste in to resume

button for number dictionary to appear or even search
-batch of ideas 2

---TODONE---



*/