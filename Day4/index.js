const items = ["Candles", "Decorations", "Chocolate"]
const checklist = document.getElementById("checklist")
const inputwarning = document.getElementById("inputwarning")

function createChecklistItem(item) {
    const newDiv = document.createElement("div");

    const newCheckbox = document.createElement("input");
    newCheckbox.setAttribute("type", "checkbox");

    const newLabel = document.createElement("label");

    const newContent = document.createTextNode(item);

    newLabel.appendChild(newCheckbox)
    newLabel.appendChild(newContent)
    newDiv.appendChild(newLabel);
    checklist.appendChild(newDiv);
}

function startChecklist(items) {
    items.forEach(item => {
        createChecklistItem(item)
    })
}

function addNewItem() {
    const input = document.getElementById("inputfield")
    if (input.value != '') {
        addItem = createChecklistItem(input.value)
        items.push(addItem)

        inputwarning.classList.contains('hidden') ? "" : inputwarning.classList.add('hidden');
    } else {
        inputwarning.classList.remove('hidden')
    }
}

startChecklist(items)

// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.

