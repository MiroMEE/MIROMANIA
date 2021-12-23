const mainDiv = document.querySelector('.mainDiv');
const underDiv = document.querySelector('.spod');
//set
let main_width = 900;
let key1='y',key2='x',key3='c',key4='v',key5='b',key6='n',key7='m',key8='a',key9='s',key10='d';
//auto
let main_height = main_width/1.5;
let algor = (main_width/14.0625);
mainDiv.style.height = main_height+'px';
mainDiv.style.width = main_width+'px';
let players=0,Buttons=0,divBLOCKSSS = [],storage = [],grc=true,dbb = [],ifitworkthenitsfine =[];
//functions
class movementBLOCK{
    moveX(d,a){
        if(d!==undefined){
            divBLOCKSSS[storage[a]].style.left = d+'px';
        };
    };
};
const chngBC = async(value)=>{
    value.style.backgroundColor = "black"
    await sleep(100)
    value.style.backgroundColor = "pink"
};
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

function createBlock(x){
    const spodAll = document.querySelectorAll('.keyBlocks');
    for(let iji=0;iji<spodAll.length;iji++){
        spodAll[iji].remove();
    };
    const diff = main_width/(x+1);
    dbb = [];
    ifitworkthenitsfine = [];
    for(let i=1;i<x+1;i++){
        const newDiv = document.createElement('div');
        newDiv.id = "keyBlock"+i;
        newDiv.style.left = i*diff-(algor/2)+'px';
        dbb.push(i*diff-(algor/2));
        newDiv.className = 'keyBlocks';
        newDiv.innerText = eval('key'+i);
        underDiv.append(newDiv);
        newDiv.style.width = algor+"px";
        newDiv.style.height = algor+"px";
        ifitworkthenitsfine.push(newDiv)
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
            case (event.key==key1||event.key==key1.toLocaleUpperCase()) && Buttons>=1:
                cla.moveX(x[0],0);
                console.log(dbb[0]);
                chngBC(ifitworkthenitsfine[0]);
                break;
            case (event.key==key2||event.key==key2.toLocaleUpperCase()) && Buttons>=2:
                cla.moveX(x[1],1);
                chngBC(ifitworkthenitsfine[1]);
                break;
            case (event.key==key3||event.key==key3.toLocaleUpperCase()) && Buttons>=3:
                cla.moveX(x[2],2);
                chngBC(ifitworkthenitsfine[2]);
                break;
            case (event.key==key4||event.key==key4.toLocaleUpperCase()) && Buttons>=4:
                cla.moveX(x[3],3);
                chngBC(ifitworkthenitsfine[3]);
                break;
            case (event.key==key5||event.key==key5.toLocaleUpperCase()) && Buttons>=5:
                cla.moveX(x[4],4);
                chngBC(ifitworkthenitsfine[4]);
                break;
            case (event.key==key6||event.key==key6.toLocaleUpperCase()) && Buttons>=6 : 
                cla.moveX(x[5],5);
                chngBC(ifitworkthenitsfine[5]);
                break;
            case (event.key==key7||event.key==key7.toLocaleUpperCase()) && Buttons>=7 : 
                cla.moveX(x[6],6);
                chngBC(ifitworkthenitsfine[6]);
                break;
            case (event.key==key8||event.key==key8.toLocaleUpperCase()) && Buttons>=8 : 
                cla.moveX(x[7],7);
                chngBC(ifitworkthenitsfine[7]);
                break;
            case (event.key==key9||event.key==key9.toLocaleUpperCase()) && Buttons>=9 : 
                cla.moveX(x[8],8);
                chngBC(ifitworkthenitsfine[8]);
                break;
            case (event.key==key10||event.key==key10.toLocaleUpperCase()) && Buttons>=10 : 
                cla.moveX(x[9],9);
                chngBC(ifitworkthenitsfine[9]);
                break;
            default:
                break;
        };
    });
};
const changePlayers = (playerss)=>{
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
        divBLOCK.style.top = main_height-((algor*2)*1.2)+"px";
        divBLOCK.style.backgroundColor = `rgb(${148-(f*50)},0,211)`;
        document.querySelector(".blocks").append(divBLOCK);
        divBLOCKSSS.push(divBLOCK);
    };
    storage.splice(0,storage.length);
    let ijx=0;
    for(let ij=0;ij<players;ij++){
        for(let mn=0;mn<Buttons/players;mn++){
            storage.push(ij);
        };
        divBLOCKSSS[ij].style.left = dbb[ijx]+"px";
        ijx+=2;
    };
};



const changeButtons = (value)=>{
    Buttons = value;
    BLOCK(createBlock(Buttons));
};
const ending = ()=>{
    changeButtons(0);
    changePlayers(0);
    grc = true;
    console.log(rememberPlus,rememberMinus);
};
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(min+max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
// changeButtons(value),changePlayers(value),await sleep(value)
async function startGm(){
    document.getElementById('startButton').remove();
    grc = false;
    //STARTUPGAME

    translater();
    
};

async function writer(){
    while(true){

        await translater();

        await sleep(1000);
    }
};
async function translater(){
    const text = [
        '0|6','1|2','2|0','3|100','2|0','4|3','3|2000','0|4','1|1','3|2000','4|3'//zítra WRITER
    ];
    for(let p=0;p<text.length;p++){
        let A = Number(text[p].split('|')[0]);
        let B = Number(text[p].split('|')[1]);
        switch (true) {
            case A==0:
                changeButtons(B);  
                break;
            case A==1:
                changePlayers(B);  
                break;
            case A==2:
                PADORU(B);
                break;
            case A==3:
                await sleep(B);
                break;
            case A==4:
                await PADORU(B);
                break;
            case A==5:
                await ending();
            default:
                break;
        };
    };
};
class padorumov{
    PadomoveY(a,pado){
        pado.style.top = (a+(main_width/90))+"px";
    };
};
let arx=[];
function positionFromBlocks(){
    const infoFromUnderDiv = document.querySelectorAll('#divBLOCK_');
    arx = [];
    for(let i=0;i<infoFromUnderDiv.length;i++){
        arx.push(infoFromUnderDiv[i].offsetLeft)
    };
    return arx;
};
const remP = document.querySelector('#scoreUpP');
const remM = document.querySelector('#scoreDownP');
let rememberPlus = 0,rememberMinus=0;
let scorePlus = (val,lav)=>{
    rememberPlus += val;
    rememberMinus += lav;
    remP.innerText = rememberPlus;
    remM.innerText = rememberMinus;
    effect();
};
const effect = async()=>{
    mainDiv.style.borderColor = "red";
    await sleep(50)
    mainDiv.style.borderColor = "gray";
};
const pady = new padorumov();
const PADORUU = document.querySelector('.PADORUU');
const PADORU = async(value)=>{
    const pado = document.createElement('div');
    pado.id = "padoru";
    pado.style.width = algor + "px";
    pado.style.height = algor + "px";
    pado.style.left = dbb[value]+"px";
    PADORUU.append(pado);
    const vzor = (main_height-((algor*3)*1.15));
    let en="N";
    while(true){
        await sleep(10);
        pady.PadomoveY(pado.offsetTop,pado);
        if(vzor<pado.offsetTop&&vzor+100>pado.offsetTop){
            for(let k=0;k<players;k++){
                if(positionFromBlocks()[k]==pado.offsetLeft){
                    scorePlus(10,0);
                    pado.remove();
                    en="W";
                    break;
                };
            };
            if(en=="W"){
                break;
            };
        };
        if(pado.offsetTop>main_height){
            pado.remove();
            scorePlus(0,1);
            break;
        };
    };
};