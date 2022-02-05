const university = document.getElementById("university");
const job = document.getElementById("job");
const basketball = document.getElementById("basketball");
const hiphop = document.getElementById("hiphop");
const main = document.getElementById("main");
const press = document.getElementById("press");
const aho = document.getElementById("aho");
const home = document.getElementById("home");
university.onclick = function () {
  main.textContent = "大阪大学人間科学部";
};

home.onclick = function () {
  main.textContent = "";
};
job.onclick = function () {
  main.textContent = "天下一品";
};

basketball.onclick = function () {
  main.textContent = "バスケサークル";
};

hiphop.onclick = function () {
  main.textContent = "Hiphop";
};

press.onclick = function () {
  const apaa = document.createElement("div");
  aho.prepend(apaa);
  apaa.className = "apaa";
  apaa.textContent = "まぁ何も起こらんけど。";
};
