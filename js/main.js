
var myCar = {
make: "Smart",
model: "Fortwo",
year: 2006,
speed: 120,
}

function objToString(myCar){
   let myCarStr = "";
    for (let key in myCar){
        myCarStr+= `${key}: ${myCar[key]}<br>`;
    }

    return myCarStr;
    }

function buttonInfo(){
    let INFO = document.getElementById('info');
    cleanFild()
    INFO.insertAdjacentHTML('beforeend', `${objToString(myCar)}`);
}


function cleanFild() {
    let compareClean = document.getElementById("info");
    while (compareClean.firstChild) {
        compareClean.removeChild(compareClean.firstChild);
    }
}
//-------------------------------------//
function distance() {
    let TimeDistance = Number(document.getElementById("distanc").value);
    let Speed = Number(myCar.speed);
    let HoursSped = Math.floor(TimeDistance/Speed);
    let Hour = Math.floor((TimeDistance % Speed)/2);
    let relax = 0;
    for(let i=1; i<= HoursSped; i++){
        if(i % 4==0){
            relax +=1;
        }
    }
    HoursSped = HoursSped + relax;
    if(TimeDistance % 480==0){
        HoursSped -=1;
    }

    console.log(relax)



    document.getElementById("info2").innerHTML = ('beforeend', `<p> в дороге : ${HoursSped}часов ${Hour} минут</p>`);
}
 