let tasks = [
  {
    name: 'Steal bananas from the store.',
    status: 'Finished',
  },
  {
    name: 'Somethink smart and productive',
    status: 'Todo',
  },
  {
    name: 'Record YouTube video.',
    status: 'In-Progress',
  },
]

displayTable()

// Add new task
function addTask() {
  let task = document.querySelector('#task')
  tasks.push({
    name: task.value,
    status: 'Todo',
  })
  task.value = ''
  displayTable()
}

// Update status
function updateStatus(index) {
  let statuses = ['Todo', 'In-Progress', 'Finished']
  let statusIndex = statuses.indexOf(tasks[index].status)
  ++statusIndex
  if (statusIndex > 2) statusIndex = 0
  tasks[index].status = statuses[statusIndex]
  displayTable()
}

//Delete clicked task
function deleteTask(index) {
  tasks.splice(index, 1)
  displayTable()
}

// Render the tasks array using JavaScript
function displayTable() {
  let table = document.querySelector('table')

  while (table.childNodes.length > 2) {
    table.removeChild(table.lastChild)
  }

  let index = 0

  tasks.forEach((task) => {
    let tableRow = document.createElement('tr')
    let name = document.createElement('td')
    let status = document.createElement('td')
    let deleteTask = document.createElement('td')

    name.innerText = task.name
    status.innerText = task.status
    status.classList.add(task.status.toLowerCase())

    deleteTask.classList.add('fa')
    deleteTask.classList.add('fa-trash')

    deleteTask.setAttribute('onclick', 'deleteTask(' + index + ')')
    status.setAttribute('onclick', 'updateStatus(' + index + ')')
    ++index

    tableRow.appendChild(name)
    tableRow.appendChild(status)
    tableRow.appendChild(deleteTask)

    table.appendChild(tableRow)
  })
}
