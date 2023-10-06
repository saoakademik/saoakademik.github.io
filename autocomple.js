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
    singkatan: "mattiga & matig & mat3 & mat iii & mat 3",
    link: "https://drive.google.com/drive/folders/1ziTKLSEpFVodnIaGFnDfglIEX_18BSEd?usp=drive_link",
  },
  {
    nama: "MA2075 - Pengenalan Pemodelan Matematika",
    singkatan: "pengpemod & pengmod",
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
    singkatan: "kpb",
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
    singkatan: "statpar & statnonpar",
    link: "https://drive.google.com/drive/folders/1VYqsJ9W8xhbOiLXlekoA8M8LHgBh-Wq6?usp=drive_link",
  },
  {
    nama: "AK2163 - Mikroekonomi",
    singkatan: "mikro",
    link: "https://drive.google.com/drive/folders/1P-md_yUVyNxCRTfCWjwoajMra52bDMqC?usp=drive_link",
  },
  {
    nama: "AK2171 - Metode Numerik Aktuaria",
    singkatan: "metnum", 
    link: "https://drive.google.com/drive/folders/11XNO1UpcczY8rWG7j8U5rl5P3TX6ca50?usp=drive_link",
  },
  {
    nama: "AK2263 - Makroekonomi",
    singkatan: "makro",
    link: "https://drive.google.com/drive/folders/1E2RQcPcQbD8xrXCGJh3thah4R3F8_v90?usp=drive_link",
  },
  {
    nama: "AK2264 - Akuntansi",
    singkatan: "akun",
    link: "https://drive.google.com/drive/folders/1jKfFUOCvjja-YZjM0pdOvXlUrZ1Hdbhm?usp=drive_link",
  },
  {
    nama: "AK2281 - Analisis Deret Waktu",
    singkatan: "adw",
    link: "https://drive.google.com/drive/folders/1LLyiKAOEBVEjKOUCjWl3MieKz0llFbzL?usp=drive_link",
  },
  {
    nama: "MA3021 - Struktur Aljabar",
    singkatan: "strukal",
    link: "https://drive.google.com/drive/folders/1ZJ2uQ0s3Jp4j-Tyhf7VOBNmUoirvG35E?usp=drive_link",
  },
  {
    nama: "MA3022 - Aljabar Linear",
    singkatan: "alin",
    link: "https://drive.google.com/drive/folders/1XWV9DKzAZqlVuKArlzLVNsqO-ZQYQQW3?usp=drive_link",
  },
  {
    nama: "MA3041 - Pengantar Geometri Diferensial",
    singkatan: "pgd",
    link: "https://drive.google.com/drive/folders/10VCh_BvnXVe98DSvmtmd9rpK_GiMRJCW?usp=drive_link",
  },
  {
    nama: "MA3042 - Geometri",
    singkatan: "geom",
    link: "https://drive.google.com/drive/folders/1N3IiHsQ5UvQdE6S8VDUm58hkNrIzComN?usp=drive_link",
  },
  {
    nama: "MA3051 - Pengantar Teori Graf",
    singkatan: "ptg",
    link: "https://drive.google.com/drive/folders/1UNxJI_rmz64aF8ljvqLBJp42FHwRV5lv?usp=drive_link",
  },
  {
    nama: "MA3053 - Pembelajaran Mesin",
    singkatan: "ml",
    link: "https://drive.google.com/drive/folders/1jTl0Hfdvs5kSA1H3jXDZiF7I0ugdZdZG?usp=drive_link",
  },
  {
    nama: "MA3071 - Pengantar Optimisasi",
    singkatan: "pengoptim",
    link: "https://drive.google.com/drive/folders/1ktq-dtLfUe19bkC__vC5_P3KWK1FYwQF?usp=drive_link",
  },
  {
    nama: "MA3073 - Persamaan Diferensial Parsial",
    singkatan: "pdp",
    link: "https://drive.google.com/drive/folders/11EaS_tPFljwCQbJiTEn-fbB7zqCSk2dX?usp=drive_link",
  },
  {
    nama: "MA3131 - Pengantar Analisis Real",
    singkatan: "penganril",
    link: "https://drive.google.com/drive/folders/1Oplq4iCI9FmQM-ur13v4Q-iTDECC8FMS?usp=drive_link",
  },
  {
    nama: "MA3161 - Pengantar Teori Suku Bunga",
    singkatan: "ptsb",
    link: "https://drive.google.com/drive/folders/1UXuR0Sd24pC3HW9mOqk_QjhP8Sz3g6ko?usp=drive_link",
  },
  {
    nama: "MA3171 - Matematika Numerik",
    singkatan: "matnum",
    link: "https://drive.google.com/drive/folders/1VJiJDcMtMkeX2MQvHfT9YcCs-egoBSU5?usp=drive_link",
  },
  {
    nama: "MA3181 - Teori Peluang",
    singkatan: "tp",
    link: "https://drive.google.com/drive/folders/1ALxXfaARtrsYL_-IOmwie3PvGOHQUbkB?usp=drive_link",
  },
  {
    nama: "MA3182 - Analisis Variansi dan Regresi",
    singkatan: "anvareg",
    link: "https://drive.google.com/drive/folders/1-dvramj4YGG8NR_zZFlhT_lS2Xqw87x-?usp=drive_link",
  },
  {
    nama: "MA3231 - Pengantar Analisis Kompleks",
    singkatan: "pengankom",
    link: "https://drive.google.com/drive/folders/15YTGxuXYwsjqHfHswB3EThLg9wU11X5B?usp=drive_link",
  },
  {
    nama: "MA3261 - Pengantar Matematika Keuangan",
    singkatan: "pmk",
    link: "https://drive.google.com/drive/folders/1rImYfCHxWTtJRlidecwR0ouiqSNiv8pJ?usp=drive_link",
  },
  {
    nama: "MA3271 - Pemodelan Matematika",
    singkatan: "pemod & model matematika",
    link: "https://drive.google.com/drive/folders/1B9AEBby9XAYXZ8Ob-XwyrmQYGPlfqDeD?usp=drive_link",
  },
  {
    nama: "MA3272 - Metode Optimisasi",
    singkatan: "metop",
    link: "https://drive.google.com/drive/folders/1ZE10IR_axhjr8x3UkQ4WPTZU7cju8bDf?usp=drive_link",
  },
  {
    nama: "MA3281 - Statistika Matematika",
    singkatan: "statmat",
    link: "https://drive.google.com/drive/folders/1ifB-WgktHmF2bOtYgqtsnA4IYN6pn7jO?usp=drive_link",
  },
  {
    nama: "AK3081 - Pengantar Model Kesintasan",
    singkatan: "sintas",
    link: "https://drive.google.com/drive/folders/14rNPjSOZ7Ckdvp8iMGl_UgcRnNWM4yNC?usp=drive_link",
  },
  {
    nama: "AK3182 - Model Linear",
    singkatan: "modlin",
    link: "https://drive.google.com/drive/folders/1M29NVGNh0APlWkvTE70oHzweGbdUo9eI?usp=drive_link",
  },
  {
    nama: "AK3251 - Simulasi dan Pemodelan Aktuaria",
    singkatan: "spa",
    link: "https://drive.google.com/drive/folders/18V2NXEg7xr6u8FGRCgwfxPhYVmOQw1ts?usp=drive_link",
  },
  {
    nama: "AK3283 - Model Risiko I",
    singkatan: "modris & modris1 & modris 1 & modris i",
    link: "https://drive.google.com/drive/folders/1kNtXLOKohegSO62hJUQDJPyGlEbymWwd?usp=drive_link",
  },
  {
    nama: "MA4031 - Fungsi Real",
    singkatan: "fungril & fungreal",
    link: "https://drive.google.com/drive/folders/195mh9RJJDPjAtm6GOZlBQkd0UpywCSIz?usp=drive_link",
  },
  {
    nama: "MA4071 - Pengantar Sistem Dinamik",
    singkatan: "pengsisdin",
    link: "https://drive.google.com/drive/folders/1VogxHkQ3TQflIK7gjcixYpFCTUhYusFh?usp=drive_link",
  },
  {
    nama: "MA4072 - Pembelajaran Mendalam",
    singkatan: "dl",
    link: "https://drive.google.com/drive/folders/1suGaGdz0CnZ1RRYpawu3Hb3REx0xKsg1?usp=drive_link",
  },
  {
    nama: "MA4151 - Kriptografi",
    singkatan: "kripto",
    link: "https://drive.google.com/drive/folders/1qqIPVQQcBP2hUFhwFk3_760ze3a0eZ-u?usp=drive_link",
  },
  {
    nama: "MA4171 - Teori Kontrol Linear",
    singkatan: "tkl & tekon",
    link: "https://drive.google.com/drive/folders/1Yfh_pC7OmvOr9HafUQAg6kR6tMjpJCK0?usp=drive_link",
  },
  {
    nama: "MA4181 - Pengantar Proses Stokastik",
    singkatan: "prostok & pengprostok",
    link: "https://drive.google.com/drive/folders/1EXozBOUcOcjUqKaSHC8byWnpVyDBxrf5?usp=drive_link",
  },
  {
    nama: "MA4251 - Teori Koding",
    singkatan: "tekod",
    link: "https://drive.google.com/drive/folders/1eOwdRuiJ2NieNhFpee_dG3IgTk3zwU4K?usp=drive_link",
  },
  {
    nama: "MA4282 - Analisis Multivariat",
    singkatan: "anmul",
    link: "https://drive.google.com/drive/folders/1lbzNbBDQJ2Qa9jVpeoTeggHoSIejm808?usp=drive_link",
  },
  {
    nama: "AK4061 - Keuangan Korporasi",
    singkatan: "kekorp & kk",
    link: "https://drive.google.com/drive/folders/1cBNTkxBXXAPZbArO0ocCEKUpMEN8itsS?usp=drive_link",
  },
  {
    nama: "AK4062 - Investasi dan Manajemen Aset",
    singkatan: "ima",
    link: "https://drive.google.com/drive/folders/1FSrSu5bQVGyjQC3BwznqYDJdBZ1kmZv-?usp=drive_link",
  },
  {
    nama: "AK4082 - Model Linear Lanjut",
    singkatan: "modlin & glm",
    link: "https://drive.google.com/drive/folders/1wUk08DoKifsZKeVvjsrBlHNiDwINUKYW?usp=drive_link",
  },
  {
    nama: "AK4131 - Kalkulus Stokastik",
    singkatan: "kalstok",
    link: "https://drive.google.com/drive/folders/1si7vq4LiMa-qQbfeYcm0dVlU1Fj8Vt6Y?usp=drive_link",
  },
  {
    nama: "AK4183 - Model Risiko II dan Simulasi",
    singkatan: "modris & modris2 & modris 2 & modris ii",
    link: "https://drive.google.com/drive/folders/1Zq-cux9WUFdmsgBua4QSCIvAkWSE5VSn?usp=drive_link",
  },
  {
    nama: "AK4185 - Asuransi Jiwa I",
    singkatan: "asji & asji1 & asji 1 & asji i",
    link: "https://drive.google.com/drive/folders/1d8ysSq2I72Ir-J4uI0AYsp6kmRz-hRn-?usp=drive_link",
  },
  {
    nama: "AK4262 - Optimisasi Matematika Keuangan",
    singkatan: "omk",
    link: "https://drive.google.com/drive/folders/1wp29mQGkcWYNONE7or_1eRuSXlBNOcKP?usp=drive_link",
  },
  {
    nama: "AK4285 - Asuransi Jiwa II",
    singkatan: "asji & asji2 & asji 2 & asji ii",
    link: "https://drive.google.com/drive/folders/1tv-TjajGUy8ChEPoXOAUw16ra99Y53-0?usp=drive_link",
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
