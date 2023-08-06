let availableKeywords = [
    "MA3131 Pengantar Analisis Real",
    "AK3283 Model Risiko I",
    "MA3281 Statistika Matematika",
    "AK2264 Akuntansi",
    "MA2181 Analisis Data",
    "MA2151 Simulasi dan Komputasi Matematika",
    "MA2271 Pengantar Persamaan Diferensial",
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword) => {
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = "";
    }
}

function display(result){
    const content = result.map((list)=>{
        return `<li onclick=selectInput(this)>${list}</li>`;
    });

    resultsBox.innerHTML = `<ul>${content.join('')}</ul>`;
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = "";
}