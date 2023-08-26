document.querySelector(".control-buttons span").onclick = function () {
    let YourName = prompt("Whats Your Name?");
   if (YourName == null || YourName == ""){
    document.querySelector(".name span").innerHTML = 'unknown';

   }
   else{
    document.querySelector(".name span").innerHTML = YourName;
     
   }
   document.querySelector(".control-buttons").remove();
}
let duration = 1000;

let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);

let orderRange = [...Array(blocks.length).keys()];

function flipBlock(selectedBlock) {
    //  Add Class is-flipped
    selectedBlock.classList.add('is-flipped');
    // collect All Flipped Cards
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
    
    //  If Theres Two Selected Blocks
    if (allFlippedBlocks.length === 2) {
       
        // Stop Clicking Function
        stopClicking();

        // check Matched
        checkMatchedBlocks(allFlippedBlocks[0],allFlippedBlocks[1]);
    } 
}

function stopClicking() {
    // Add Class No Clicking on Main Container
    blocksContainer.classList.add('no-clicking');
    setTimeout(() => {
        blocksContainer.classList.remove('no-clicking');
    },duration);  
}

//  Check Matched Block
function checkMatchedBlocks(firstBlock, secondBlock) {
    let triesElement = document.querySelector('.tries span');
    if (firstBlock.dataset.bear === secondBlock.dataset.bear) {
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');
        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');
        document.getElementById('seccess').play();

    }else{
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
        setTimeout(() => {
            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
        },duration); 
        document.getElementById('faild').play();
     
    }
}

shuffle(orderRange);
blocks.forEach((block,index) => {
    block.style.order = orderRange[index];

    //  Add Click Event
    block.addEventListener('click',function (){
        flipBlock(block);
    })
})
function shuffle(array) {
    let current = array.length,
        temp,
        random;
     while (current > 0) {
        random = Math.floor(Math.random() * current);
        current--;
        temp = array[current];
        array[current] = array[random];
        array[random] = temp;
     }
     return array;
}