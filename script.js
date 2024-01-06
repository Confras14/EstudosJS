function handleCriarQuest() {
  const quest = document.createElement('span')
  quest.innerHTML = '<div class="quest"><input type="checkbox" class="checkQuest"><input type="text" class="titleQuest" placeholder="Nome da quest"><button class="dellQuest"><p>X</p></button></div>'

  todoList.appendChild(quest)
}

const todoList = document.querySelector('.todoList')
const newQuest = document.querySelector('.newQuest')
newQuest.addEventListener('click', handleCriarQuest)

