import React from 'react'
import { render } from 'reagent'
import { fromJS } from 'immutable'
import { expect } from 'chai'

import TodoItem from './TodoItem'

describe('<TodoItem /> e2e', () => {
  it('to have color', () => {
    const props = {
      color: '#ccc',
      item: fromJS({
        id: 1,
        name: 'My Item',
        isResolved: true
      }),
      toggleItemResolve: () => {}
    }
    const wrapper = render(<TodoItem {...props} />)
    expect(wrapper.html()).to.contain('#ccc')
  })
})
