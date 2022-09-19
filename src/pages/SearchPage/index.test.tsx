import React from 'react'
import {render, RenderResult} from '@testing-library/react'
import {BrowserRouter as Router} from 'react-router-dom'
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

    it('search-list', () => {
      expect(component.queryByTestId('search-list')).toBeTruthy()
    })
  })
})

function renderComponent(): RenderResult {
  return render(
    <GithubContext.Provider value={mockData}>
      <Router>
        <Component />
      </Router>
    </GithubContext.Provider>
  )
}
