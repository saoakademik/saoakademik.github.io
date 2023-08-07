const availableKeywords = [
    {   nama: "MA3131 Pengantar Analisis Real",
        singkatan: "penganril"
    },
    {   nama:  "AK3283 Model Risiko I",
        singkatan: "modris"
    },
    {   nama: "MA3281 Statistika Matematika",
        singkatan: "statmat"
    },
    {   nama: "AK2264 Akuntansi",
        singkatan: "akun"
    },
    {   nama: "MA2181 Analisis Data",
        singkatan: "andat"
    },
    {   nama: "MA2151 Simulasi dan Komputasi Matematika",
        singkatan: "sikomat"
    },
    {   nama: "MA2271 Pengantar Persamaan Diferensial",
        singkatan: "ppd"
    },
  ];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword) => {
           return keyword.singkatan.toLowerCase().includes(input.toLowerCase()) || keyword.nama.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result.map((item) => item.nama));

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