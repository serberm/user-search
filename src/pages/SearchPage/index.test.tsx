import React from 'react'
import {createMemoryHistory} from 'history'
import {render, RenderResult} from '@testing-library/react'
import {Router} from 'react-router-dom'
import {GithubContext} from '../../context'
import Component from '.'
import {mockData} from '../../jest/utils'

describe('SearchPage', () => {
  let component: RenderResult

  beforeEach(() => {
    component = renderComponent()
  })

  context('test search page', () => {
    beforeEach(async () => {})

    it('search-list', async () => {
      expect(component.queryByTestId('search-list')).toBeTruthy()
      const boxes = await component.findAllByText('user1')
      expect(boxes.length).toBe(1)
      expect(component.getByText('test1')).toBeInTheDocument()
      expect(component.getByText('test123')).toBeInTheDocument()
    })
  })
})

function renderComponent(): RenderResult {
  const history = createMemoryHistory()
  const route = '/?search=user1'
  history.push(route)
  return render(
    <GithubContext.Provider value={mockData}>
      <Router location={history.location} navigator={history}>
        <Component />
      </Router>
    </GithubContext.Provider>
  )
}
