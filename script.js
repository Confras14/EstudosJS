function handleCriarQuest() {
  let quests = document.querySelectorAll('.quest')
  let lastQuest = quests[quests.length - 1]

  
}

const newQuest = document.querySelector('newQuest')
newQuest.addEventListener('click', handleCriarQuest)

const quest = document.createElement
quest.innerHTML = '<div class="quest"><input type="checkbox" class="checkQuest"><input type="text" class="titleQuest" placeholder="Nome da quest"></div>'