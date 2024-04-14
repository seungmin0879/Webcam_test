const webcamElem = document.querySelector('#webcam')

function updatePoseImg() {
    const img = new Image();
    const randomValus = Math.random();

    img.onload = function() {
    webcamElem.style.backgroundImage = `url('${img.src}')`;
    };

    img.src = `/getPoseImg?${randomValus}`;
}

function whereIsMyBone() {
    alert("재시작은 에러의 90%를 해결해줍니다.\n확인을 눌러 에러를 해결해보세요.");
    $.get("/killChrome");
}

function startGame(){
    location.href="/ingame";
}

function createProblem() {
    $.get("/createProblem").done((result) => {
        console.log(result);
        document.querySelector("#problem h1").innerText = `${result.first_num} ${result.selecte_operator} ${result.second_num} = ?`;
    });
}
function saveImage() {
    $.get("/saveImage").done((result) =>{
        console.log(result);
    });
}

let timer = 3;
function saveImage() {
    if(timer <= 1) {
        $.get("/saveImage").done((result) => {
            console.log(result);
        });
        timer = 3;
    } else {
        timer--;
    }

    document.querySelector("#problem h2").innerText = timer;
}


