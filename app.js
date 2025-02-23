const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");

addBtn.addEventListener("click", () => {
    const newList = document.createElement("li");
    newList.style.backgroundColor = "lightgrey";
    newList.style.height = "200px";
    newList.style.width = "200px";
    newList.style.listStyle = "none";
    newList.style.borderRadius = "10px";
    newList.style.padding = "10px";
    newList.style.display = "flex";
    newList.style.alignItems = "center";
    newList.style.justifyContent = "center";

    list.appendChild(newList);

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "Todo list...";
    inputField.style.width = "80%";
    inputField.style.padding = "8px";
    inputField.style.border = "1px solid #ccc";
    inputField.style.borderRadius = "5px";
    inputField.style.fontSize = "16px";

    newList.appendChild(inputField);

    list.appendChild(newList);

    inputField.focus();
})
