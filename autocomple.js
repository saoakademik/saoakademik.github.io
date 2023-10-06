const availableKeywords = [
  {
    nama: "MA2011 - Topik Wawasan Matematika",
    singkatan: "topwaw",
    link: "https://drive.google.com/drive/folders/1GC5kEEcruSPcWZYwvcUsxqxCkt70gDbN?usp=drive_link",
  },
  {
    nama: "MA2021 - Matriks dan Ruang Vektor",
    singkatan: "mavek",
    link: "https://drive.google.com/drive/folders/1wkVsBnqISmy870VqNIaEKsnqvLj_pm7e?usp=drive_link",
  },
  {
    nama: "MA2022 - Struktur Bilangan Bulat",
    singkatan: "sbb",
    link: "https://drive.google.com/drive/folders/1VYvwJk8oTUpA8Ys42FypxImpGk4s8uK_?usp=drive_link",
  },
  {
    nama: "MA2031 - Matematika III",
    singkatan: "mattiga", "mat3", "matiii",
    link: "https://drive.google.com/drive/folders/1ziTKLSEpFVodnIaGFnDfglIEX_18BSEd?usp=drive_link",
  },
  {
    nama: "MA2075 - Pengenalan Pemodelan Matematika",
    singkatan: "pengpemod",
    link: "https://drive.google.com/drive/folders/1IWJ8kIlsYq69yow0N_en1nPfnd7VTemh?usp=drive_link",
  },
  {
    nama: "MA2111 - Dasar-dasar Matematika",
    singkatan: "dasmat",
    link: "https://drive.google.com/drive/folders/1cYi-k32I_nTAtZMh8GkW4cDWMhAhcPvx?usp=drive_link",
  },
  {
    nama: "MA2121 - Aljabar Linier Elementer",
    singkatan: "ale",
    link: "https://drive.google.com/drive/folders/1-Ex6jD8sGOzWTjDVw9hOFlyJuZUExVc5?usp=drive_link",
  },
  {
    nama: "MA2151 - Simulasi dan Komputasi Matematika",
    singkatan: "sikomat",
    link: "https://drive.google.com/drive/folders/1RT4MN1FM4jPxsXZsxNM5miHMiAC46LiF?usp=drive_link",
  },
  {
    nama: "MA2181 - Analisis Data",
    singkatan: "andat",
    link: "https://drive.google.com/drive/folders/1NOioQCO-3hYSVg0cFCk6aIDUHDHI9qBX?usp=drive_link",
  },
  {
    nama: "MA2231 - Kalkulus Peubah Banyak",
    singkatan: "KPB",
    link: "https://drive.google.com/drive/folders/1rywdb4FGOj_hVzu_nK4fAyOI_vWWDPSo?usp=drive_link",
  },
  {
    nama: "MA2251 - Matematika Diskrit",
    singkatan: "matdis",
    link: "https://drive.google.com/drive/folders/1AlWkAgFwa3DFX3oxYnG76SP4XU__WZmT?usp=drive_link",
  },
  {
    nama: "MA2252 - Pengantar Teori Bilangan",
    singkatan: "ptb",
    link: "https://drive.google.com/drive/folders/1mNTIxmRX9yQh8J9htfVNdHfn0T9gSwdV?usp=drive_link",
  },
  {
    nama: "MA2271 - Pengantar Persamaan Diferensial",
    singkatan: "ppd",
    link: "https://drive.google.com/drive/folders/1x-zOFQET4jA7prfrL5QowPi3rjyaHSCx?usp=drive_link",
  },
  {
    nama: "MA2281 - Statistika non-parametrik",
    singkatan: "statpar", "statnonpar",
    link: "https://drive.google.com/drive/folders/1VYqsJ9W8xhbOiLXlekoA8M8LHgBh-Wq6?usp=drive_link",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  {
    nama: " ",
    singkatan: " ",
    link: " ",
  },
  
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = availableKeywords.filter((keyword) => {
      return (
        keyword.singkatan.toLowerCase().includes(input.toLowerCase()) ||
        keyword.nama.toLowerCase().includes(input.toLowerCase())
      );
    });
  }

  if (result.length) {
    display(result.map((item) => [item.nama, item.link]));
    resultLink = result[0].link;
    resultnama = result[0].nama;
    // resultsBox.innerHTML = "";
  }
};

inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button").click();
  }

  if (!result.length) {
    resultsBox.innerHTML = "";
  }
});

function display(result) {
  const content = result.map((list) => {
    return `<li onclick="jumpToLink('${list[1]}', '${list[0]}')"> ${list[0]}</li>`;
  });

  resultsBox.innerHTML = `<ul>${content.join("")}</ul>`;
}

function jumpToLink(link, text) {
  inputBox.value = text;
  window.open(link, "_blank");
  resultsBox.innerHTML = "";
}

function gotolink() {
  inputBox.value = `${resultnama}`;
  window.open(`${resultLink}`, "_blank");
  resultsBox.innerHTML = "";
}
