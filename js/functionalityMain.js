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

// toggle functionality

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

// // toggle functionality ends

// Donate card -1 functionality
const card1btn = getId("card-1-btn");

card1btn.addEventListener("click", function () {
  const userBalanceValue = parseFloat(getInnerText("account-balance"));

  const card1Input = parseFloat(getValue("card-1-input"));

  if (isNaN(card1Input) || card1Input > userBalanceValue || !card1Input) {
    alert("invalid input");
    return;
  }

  const totalBalance = userBalanceValue - card1Input;

  document.getElementById("account-balance").innerText = totalBalance;
  document.getElementById("balance-card-1").innerText = card1Input;

  const item = document.createElement("div");
  item.className = "border-2 rounded-md p-5 mb-5";

  item.innerHTML = ` 
    <p class= "text-base font-extrabold mb-2">${card1Input} Taka is Donated for flood-2024 at Nohakhali, Bangladesh </p>
    <p class= "text-xs font-normal mb-2">${new Date().toString()}</p>
  `;

  const historyContainer = getId("historyContent");
  historyContainer.insertBefore(item, historyContainer.firstChild);
});

// // Donate card -1 functionality ends
