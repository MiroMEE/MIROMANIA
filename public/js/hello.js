const mainDiv = document.querySelector('.mainDiv');
const underDiv = document.querySelector('.secondDiv');
//set
let main_width = 700;
//auto
let main_height = main_width/1.5;
let algor = (main_width/14.0625);
mainDiv.style.height = main_height+'px';
mainDiv.style.width = main_width+'px';
let key1='d',key2='f',key3='j',key4='k',key5='m';
let players = 2;
let grc = true;
let divBLOCKSSS = [];
//functions
class movementBLOCK{
    moveX(d,a){
        if(d!==undefined){
            a.style.left = d+'px';

        };
    };
};
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};
function createBlock(x){
    const diff = main_width/(x+1);
    const dbb = [];
    for(let i=1;i<x+1;i++){
        const newDiv = document.createElement('div');
        newDiv.id = "keyBlock"+i;
        newDiv.style.left = i*diff-(algor/2)+'px';
        dbb.push(i*diff-(algor/2));
        newDiv.className = 'keyBlocks';
        underDiv.append(newDiv);
        newDiv.style.width = algor+"px";
        newDiv.style.height = algor+"px";
    };
    return dbb;
};
function BLOCK(x,y){
    const cla = new movementBLOCK();
    document.addEventListener('keypress',(event)=>{
        if(grc){
            return;
        };
        cla.x = players;
        switch (true) {
            case event.key==key1||event.key==key1.toUpperCase:
                cla.moveX(x[0],divBLOCKSSS[0]);
                break;
            case event.key==key2||event.key==key2.toUpperCase:
                cla.moveX(x[1],divBLOCKSSS[0]);
                break;
            case event.key==key3||event.key==key3.toUpperCase:
                cla.moveX(x[2],divBLOCKSSS[players-1]);
                break;
            case event.key==key4||event.key==key4.toUpperCase:
                cla.moveX(x[3],divBLOCKSSS[players-1]);
                break;
            default:
                break;
        };
    });
};
function playersss(playerss){
    players = playerss;
    for(let k=0;k<divBLOCKSSS.length;k++){
        divBLOCKSSS[k].remove();
    };
    divBLOCKSSS.splice(0,divBLOCKSSS.length);
    for(let f=0;f<playerss;f++){
        const divBLOCK = document.createElement('div');
        divBLOCK.id = 'divBLOCK_';
        divBLOCK.style.width = algor+"px";
        divBLOCK.style.height = algor+"px";
        divBLOCK.style.bottom = algor*1.2+"px";
        divBLOCK.style.backgroundColor = `rgb(${148-(f*50)},0,211)`;
        document.querySelector(".blocks").append(divBLOCK);
        divBLOCKSSS.push(divBLOCK);
    };
};


function positionFromBlocks(){
    const infoFromUnderDiv = document.querySelectorAll('#divBLOCK_');
    for(let i=0;i<infoFromUnderDiv.length;i++){
        console.log(infoFromUnderDiv[i].offsetLeft);
    };
};

async function startGm(){
    document.getElementById('startButton').remove();
    //STARTUPGAME
    grc = false;
    BLOCK(createBlock(4));
    playersss(1);
    await sleep(5000);
    playersss(2);
    await sleep(5000);
    playersss(1);
    await sleep(5000);
    playersss(2);
    await sleep(5000);
    playersss(0);
    grc = true;
};
