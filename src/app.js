'use strict'

import React from 'react'
import { render } from 'react-dom'

import TodoList from './components/todoList'
import items from './items'

function renderApp (items) {
  render(<TodoList items={items} />,
    document.getElementById('root')
  )
}

renderApp(items)

// change first item to resolved
setTimeout(() => {
  const newItems = items.setIn([0, 'isResolved'], true)

  renderApp(newItems)
}, 500)
