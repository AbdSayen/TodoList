let list = document.getElementById('tasksList');
let textInput = document.getElementById('inputTask');

document.getElementById('addDoBtn').onclick = function() {
    if (textInput.value != "") {
        let listItem = document.createElement('div');
        listItem.classList.add('task');
        let listTitle = document.createElement('li');
        listTitle.innerText = textInput.value;
        let listRemove = document.createElement('div');

        listRemove.innerHTML = `<i class="fas fa-trash"></i>`;
        listRemove.classList.add("removeBtn");

        listItem.addEventListener("click", () => {

            listTitle.classList.toggle("completedTask");
        })

        listItem.appendChild(listTitle);
        listTitle.appendChild(listRemove);

        textInput.value = "";

        list.appendChild(listItem);
    } else {
        alert("Type something");
    }
}

list.onclick = function(e) {
    let item = e.target;
    if (item.classList[0] === 'removeBtn') {
        item.parentElement.remove();
    }
}