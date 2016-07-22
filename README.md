# JavaScript Hide and Seek

## Objectives

1. Use document.querySelectorAll to find nested nodes
2. Change the value of the correct DOM nodes

## Introduction

In this lab, we're going to practice finding elements in the DOM. To do so, we're going to make use of two methods that are immensely useful for navigating the DOM.

### `querySelector()`

`querySelector()` takes one argument, a string of [selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), and returns the first element that matches these selectors. Given a document like

``` html
<body>
  <div>
    Hello!
  </div>

  <div>
    Goodbye!
  </div>
</body>
```

If we called `document.querySelector('div')`, the method would return the first `div` (whose `.innerHTML` is "Hello!").

Selectors aren't limited to tag names, though (otherwise why not just use `document.getElementsByTagName('div')[0]`?). We can get very fancy.

``` html
<body>
  <div>
    <ul class="ranked-list">
      <li>1</li>
      <li>
        <div>
          <ul>
            <li>2</li>
          </ul>
        </div>
      </li>
      <li>3</li>
    </ul>
  </div>

  <div>
    <ul class="unranked-list">
      <li>6</li>
      <li>2</li>
      <li>
        <div>4</div>
      </li>
    </ul>
  </div>
  <script>
    // get <li>2</li>
    const li2 = document.querySelector('ul.ranked-list li ul li')

    // get <div>4</div>
    const div4 = document.querySelector('ul.unranked-list li div')
  </script>
</body>
```

In the above example, the first query says, "Starting from `document` (the object we've called `querySelector()` on), find a `ul` with a `className` of `ranked-list` (the `.` is for `className`. Then find an `li` that is a child of that `ul`. Then find a `ul` that is a child (but not necessarily a direct descendant) of that `li`. Finally, find an `li` that is a child of that (second) `ul`."

**NOTE**: The HTML property `class` is referred to as `className` in JavaScript. It's... unfortunate.

What, then, does the second call to `querySelector()` say? Puzzle it out for a bit, and then read on.

Puzzle a bit longer!

Just a bit longer!

Okay, the second call says, "Starting from `document`, find a `ul` with a `className` of `unranked-list`. Then find an `li` descended from `ul.unranked-list` and a `div` descended from that `li`."

### Interlude: Selectors

Now is probably a good time to read up on [selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors). They're super important and relatively straightforward to pick up. Play around on the MDN page while you're getting the hang of it! Then come back when you're ready.

### `querySelectorAll()`

`querySelectorAll` works a lot like `querySelector()` -- it accepts a selector as its argument, and it searches starting from the element that it's called on (or from `document`) -- but instead of returning the _first_ match, it returns a NodeList (which, remember, is _not_ an Array) of matching elements.

Given a document like

``` html
<main id="app">
  <ul class="ranked-list">
    <li>1</li>
    <li>2</li>
  </ul>

  <ul class="ranked-list">
    <li>10</li>
    <li>11</li>
  </ul>
</main>
```

If we called `document.getElementById('app').querySelectorAll('ul.ranked-list li')`, we'd get back a NodeList of `<li>1</li>, <li>2</li>, <li>10</li>, <li>11</li>`.

We could change the `.innerHTML` of these `li`s like so:

``` javascript
const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

for (let i = 0, l = lis.length; i < l; i++) {
  lis[i].innerHTML = (i + 1).toString()
}
```

Now our `li`s, even though they're children of two separate `ul`s, will count up from 1 to 4.

Using this loop construct, we could even, say, call `querySelector()` or `querySelectorAll()` on these children to look deeper and deeper into a nested structure... (hint!).

## Instructions

In `index.html`, you'll see that we've set up a basic document for you. We'll be testing against this document, but you should still write your code in `index.js`. We'll handle loading everything up for you.

- Define a function `getFirstSelector(selector)`, which accepts a selector and returns the first element that matches.
- Define a function `nestedTarget()` that pulls a `.target` out of `#nested` (`#` is used for IDs in selectors — but you knew that because you [read the docs](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), right? :) ). (Note that in `index.html` `#nested` and `.target` just _happen_ to be `div`s. This method should work with arbitrary elements.)
- Define a function `increaseRankBy(n)` that increases the ranks in all of the `.ranked-list`s by `n`. (You might need to make use of [`parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- Define a function `deepestChild()` that pulls out the most deeply nested child
from `div#grand-node`. (Remember, you can iterate over elements and call
`querySelector()` and `querySelectorAll()` on them. This is challenging to
implement correctly, but not beyond your ability!)

**HINT 1**: Your solution for `deepestChild()` does not need to be totally
generic; we don't expect it to work in every case. For example, we know that
`div#grand-node` has only one node at each level — for this lab, you can solve
for that case, and not worry about a case where there are sibling nodes.

**HINT**: Remember learning about breadth-first search? A similar technique
might come in handy here.

Have fun, and good luck!

## Resources

- [document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [document.querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [Selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors)
