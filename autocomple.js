const availableKeywords = [
    {   nama: "MA3131 Pengantar Analisis Real",
        singkatan: "penganril",
        link: "https://drive.google.com/drive/u/1/folders/0B20OGwmrcxo6flRYZkl3M3N3d25NMVM0dGdfdzlENUtPRXIyLUgyY0VhdlItTGtvb2RCbUU?resourcekey=0-34_L6IthvotqH1RcYHV8cA"
    },
    {   nama:  "AK3283 Model Risiko I",
        singkatan: "modris",
        link: "https://drive.google.com/drive/u/1/folders/19pOSQxlABIJ9a60Ef2u-v3ry8_uH9cck"
    },
    {   nama: "MA3281 Statistika Matematika",
        singkatan: "statmat",
        link: "https://drive.google.com/drive/u/1/folders/0B20OGwmrcxo6fmRoMnFZSjVBQkRPTWMySjZtMFY3Q3RnVVc1VFJmSkRtVjRiRTdMUWtabTQ?resourcekey=0-NCOyvfzfGrSwAyb1Oa0EVw"
    },
    {   nama: "AK2264 Akuntansi",
        singkatan: "akun",
        link: "https://drive.google.com/drive/u/1/folders/1_3N1D7BCcYLTOUwRStiIzJMjQACB5c3W"
    },
    {   nama: "MA2181 Analisis Data",
        singkatan: "andat",
        link: "https://drive.google.com/drive/u/1/folders/0B20OGwmrcxo6fmpqd2VVbnhEUjMwRkVycXJicFBrd0xKTVZxc0hFUnZqc1E3c0NGOWNHRHM?resourcekey=0-5pC8hXzhEV7FsYkunrFVEw"
    },
    {   nama: "MA2151 Simulasi dan Komputasi Matematika",
        singkatan: "sikomat",
        link: "https://drive.google.com/drive/u/1/folders/0B20OGwmrcxo6fmxQNmg1RzVxX1BTaEU4SWJIczhBYV9rZGFnTklMdHBnSTNGLUJtTExnOGM?resourcekey=0-jpvmkp84GbsmMbNHsdEMNw"
    },
    {   nama: "MA2271 Pengantar Persamaan Diferensial",
        singkatan: "ppd",
        link: "https://drive.google.com/drive/u/1/folders/0B20OGwmrcxo6fldKTGFRSzJPR0E5Z0Y1QjZGdzEwYVIwRTNvU04zdjVnVWJnRDhJWlVsb2c?resourcekey=0-R4FGUa99J2oxUBdk9ENEUQ"
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
    }
    display(result.map((item) => [item.nama, item.link]));
    resultLink = result[0].link;
    resultnama = result[0].nama;

    if(!result.length){
        resultsBox.innerHTML = "";
    }
}

inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("button").click();
    }

    if(!result.length){
        resultsBox.innerHTML = "";
    }
  }); 

function display(result){
    const content = result.map((list)=>{
        return `<li onclick="jumpToLink('${list[1]}', '${list[0]}')"> ${list[0]}</li>`;
    });

    resultsBox.innerHTML = `<ul>${content.join('')}</ul>`;
}

function jumpToLink(link, text) {
    inputBox.value = text;
    window.location.href = link;
    resultsBox.innerHTML = "";
}

function gotolink(){
    inputBox.value = `${resultnama}`;
    window.location.href = `${resultLink}`;
    resultsBox.innerHTML = "";
}

