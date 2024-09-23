// Reuseable component

function getId(id) {
  return document.getElementById(id);
}

function getInnerText(id) {
  return document.getElementById(id).innerText;
}

function getValue(id) {
  return document.getElementById(id).value;
}

function getClassList(id) {
  return document.getElementById(id).classList;
}

// blog toggle functionlity starts
const btnBlog = getId("blog-toggle");
btnBlog.addEventListener("click", function () {
  window.location.href = "./blog.html";
});
// blog toggle functionlity ends

// toggle functionality for donate and history

const donate = getId("donate");
const history = getId("history");

history.addEventListener("click", function () {
  const donateContent = getClassList("donateContent");
  const historyContent = getClassList("historyContent");

  donate.classList.remove("text-black");
  donate.classList.add("text-gray-500");
  history.classList.remove("text-gray-500");
  history.classList.add("text-black");
  history.classList.add("bg-[#b4f461]");
  donate.classList.remove("bg-[#b4f461]");

  historyContent.remove("hidden");
  donateContent.add("hidden");
});

donate.addEventListener("click", function () {
  const donateContent = getClassList("donateContent");
  const historyContent = getClassList("historyContent");

  donate.classList.remove("text-gray-500");
  donate.classList.add("text-black");
  history.classList.remove("text-black");
  history.classList.add("text-gray-500");
  donate.classList.add("bg-[#b4f461]");
  history.classList.remove("bg-[#b4f461]");

  donateContent.remove("hidden");
  historyContent.add("hidden");
});

// // toggle functionality for donate and history ends

// Donate card -1 functionality
const card1btn = getId("card-1-btn");

card1btn.addEventListener("click", function () {
  const userBalanceValue = parseFloat(getInnerText("account-balance"));

  const card1Input = parseFloat(getValue("card-1-input"));

  if (
    isNaN(card1Input) ||
    card1Input > userBalanceValue ||
    !card1Input ||
    card1Input < 0 ||
    card1Input === 0
  ) {
    alert("invalid input");
    return;
  }

  const totalBalance = userBalanceValue - card1Input;
  const card1Finalbalance =
    parseFloat(getInnerText("balance-card-1")) + card1Input;

  document.getElementById("account-balance").innerText = totalBalance;
  document.getElementById("balance-card-1").innerText = card1Finalbalance;

  const item = document.createElement("div");
  item.className = "border-2 rounded-md p-5 mb-5";

  item.innerHTML = ` 
    <p class= "text-base font-extrabold mb-2">${card1Input} Taka is Donated for flood-2024 at Nohakhali, Bangladesh </p>
    <p class= "text-xs font-normal mb-2">${new Date().toString()}</p>
  `;

  const historyContainer = getId("historyContent");
  historyContainer.insertBefore(item, historyContainer.firstChild);

  const modal = getId("my_modal_5");
  modal.showModal();
});

// // Donate card -1 functionality ends

// Dontate card-2
const card2Input = getId("card-2-btn");

card2Input.addEventListener("click", function () {
  const userBalanceValue = parseFloat(getInnerText("account-balance"));
  const card2Inputvalue = parseFloat(getValue("card-2-input"));

  if (
    isNaN(card2Inputvalue) ||
    card2Inputvalue > userBalanceValue ||
    !card2Inputvalue ||
    card2Inputvalue < 0 ||
    card2Inputvalue === 0
  ) {
    alert("invalid input");
    return;
  }

  const totalBalance = userBalanceValue - card2Inputvalue;
  const card2Finalbalance =
    parseFloat(getInnerText("balance-card-2")) + card2Inputvalue;

  document.getElementById("account-balance").innerText = totalBalance;
  document.getElementById("balance-card-2").innerText = card2Finalbalance;

  const item = document.createElement("div");
  item.className = "border-2 rounded-md p-5 mb-5";

  item.innerHTML = ` 
    <p class= "text-base font-extrabold mb-2">${card2Inputvalue} Taka is Donated for flood-2024 at Feni, Bangladesh </p>
    <p class= "text-xs font-normal mb-2">${new Date().toString()}</p>
  `;

  const historyContainer = getId("historyContent");
  historyContainer.insertBefore(item, historyContainer.firstChild);

  const modal = getId("my_modal_5");
  modal.showModal();
});

// // Donate card -2 functionality ends

//  Donate card -3

const card3Input = getId("card-3-btn");

card3Input.addEventListener("click", function () {
  const userBalanceValue = parseFloat(getInnerText("account-balance"));
  const card3Inputvalue = parseFloat(getValue("card-3-input"));

  if (
    isNaN(card3Inputvalue) ||
    card3Inputvalue > userBalanceValue ||
    !card3Inputvalue ||
    card3Inputvalue < 0 ||
    card3Inputvalue === 0
  ) {
    alert("invalid input");
    return;
  }

  const totalBalance = userBalanceValue - card3Inputvalue;
  const card3Finalbalance =
    parseFloat(getInnerText("balance-card-3")) + card3Inputvalue;

  document.getElementById("account-balance").innerText = totalBalance;
  document.getElementById("balance-card-3").innerText = card3Finalbalance;

  const item = document.createElement("div");
  item.className = "border-2 rounded-md p-5 mb-5";

  item.innerHTML = ` 
    <p class= "text-base font-extrabold mb-2">${card3Inputvalue} Taka is Donated for Quota Movement-2024 at Dhaka, Bangladesh </p>
    <p class= "text-xs font-normal mb-2">${new Date().toString()}</p>
  `;

  const historyContainer = getId("historyContent");
  historyContainer.insertBefore(item, historyContainer.firstChild);

  const modal = getId("my_modal_5");
  modal.showModal();
});
