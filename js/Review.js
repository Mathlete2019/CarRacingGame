var num,low,rand;

function setup(){
    num = [];
    low=1000;
    rand=random(0,1000)
}

function draw(){
    rand=Math.round(random(0,1000));
    num.push(rand);
    if(rand<low){
        low=rand;
    }
    console.log("array "+num);
    console.log("Low "+ low);
}