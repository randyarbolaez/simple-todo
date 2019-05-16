const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

function newTodo() {
  // ask user question
  let userInputPrompt = prompt('What do you have to do?');

  // check if user canceled prompt
  if (userInputPrompt === null) {
    return null;
  }

  // create orderedList
  let item = document.createElement('ol');
  let userInputCreateTextNode = document.createTextNode(userInputPrompt);
  item.appendChild(userInputCreateTextNode);

  // create checkBox
  let checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  item.appendChild(checkBox);

  // create delete button
  let deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'X';
  item.appendChild(deleteButton);

  // delete item
  deleteButton.onclick = function() {
    itemCountSpan.innerHTML--;
    uncheckedCountSpan.innerHTML--;
    return list.removeChild(item);
  };

  // add item to list
  list.appendChild(item);

  //increase number of items
  itemCountSpan.innerHTML++;

  // decrease number of unchecked(when radio is clicked )

  console.log(Number(uncheckedCountSpan.textContent) + 1);
  checkBox.onclick = function() {
    if (checkBox.checked) {
      if (Number(uncheckedCountSpan.textContent) - 1 === -1) {
        return uncheckedCountSpan;
      }
      return uncheckedCountSpan.innerHTML--;
    }
  };

  // increase number of unchecked
  return uncheckedCountSpan.innerHTML++;
}
