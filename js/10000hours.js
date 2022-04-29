const startButton = document.querySelector(".start_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const loading = document.querySelector(".result_loading");

function calculator() {
    const fieldValue = document.querySelector("#field_value");
    const timeValue = document.querySelector("#time_value"); /*"#time_value"요소는 변하지않기 때문에 let에서 const로 변경 */
    const timeValue_int = Number(timeValue.value); /*값이 적용된 뒤로 바뀔 일이 없기 때문에 역시 let에서 const로 변경 */

    const fieldResult = document.querySelector(".field_result");
    const timeResult = document.querySelector(".time_result");

    if(fieldValue.value == ""){
        alert('분야가 입력되지 않았습니다.'); /* 두개의 오류창이 입력되지 않았습니다 라고만 되어있어 정보가 확실하지않음, 확실하게 정보전달!*/
        fieldValue.focus();
        return false;
    } else if(timeValue.value == ""){
        alert('시간이 입력되지 않았습니다.');
        timeValue.focus();
        return false;
    } else if(timeValue_int > 24) {
        alert('잘못된 값입니다. 24이하의 값을 입력해 주세요.');
        return false;
    }

    result.style.display = "none";
    loading.style.display = "flex";

    setTimeout(function() {
        fieldResult.innerText = fieldValue.value;
        timeResult.innerText = parseInt((10000/timeValue_int), 10);
        loading.style.display = "none";
        result.style.display = "flex";
/*      fieldResult.innerText = fieldValue.value;
        timeResult.innerText = parseInt((10000/timeValue_int), 10); 
        위로 이동!*/
    }, 1800); 
}
/* 1800=1.8초 뒤에 실행된다는 뜻 */

function openModal(){
    modal.style.display = "flex";

}

function closeModal(){
    modal.style.display = "none";

}

window.onclick = function(event) { 
    if(event.target == modal) {
        closeModal();
    }
};/* 윈도우 바깥쪽 눌러도 닫히게 */

/* 현재 방식 : clipboard api를 사용한 클립보드 복사 */
function copyUrl() {
    const url = window.location.href;

    navigator.clipboard.writeText(url).then(() => {
        alert("URL이 복사되었습니다"); 
    });
}

/* 이전 방식 : execCommand()을 사용한 클립보드 복사 
function copyUrl() {
    let url = window.location.href;
    let tmp = document.createElement('input');

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp); */
    


shareButton.addEventListener('click', copyUrl);
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
startButton.addEventListener('click', calculator);

/* addEventListener 를 addEventListner 로 적어서 자바스크립트 오류가 계속 났었음. e를 빼먹음 */

