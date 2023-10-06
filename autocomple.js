const availableKeywords = [
  {
    nama: "MA2011 - Topik Wawasan Matematika",
    singkatan: "topwaw",
    link: "https://drive.google.com/drive/folders/1GC5kEEcruSPcWZYwvcUsxqxCkt70gDbN?usp=drive_link",
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
