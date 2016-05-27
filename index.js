function getFirstSelector(s) {
  return document.querySelector(s)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function fixRankedList() {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    let numbers = []
    let inOrder = true
    for (let j = 0, k = children.length; j < k; j++) {
      let number = parseInt(children[j].innerHTML)

      if (number < numbers[j - 1]) {
        inOrder = false
      }

      numbers.push(number)
    }

    if (!inOrder) {
      for (let j = 0, end = children.length - 1; end > -1; end--, j++) {
        children[j].innerHTML = numbers[end]
      }
    }
  }
}
