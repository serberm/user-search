import React from 'react'
import {render, RenderResult} from '@testing-library/react'
import {BrowserRouter as Router} from 'react-router-dom'
import {GithubContext} from '../../context'
import Component from '.'
import {mockData} from '../../jest/utils'

describe('HistoryPage', () => {
  let component: RenderResult

  beforeEach(() => {
    component = renderComponent()
  })

  context('test history page', () => {
    beforeEach(() => {})

    it('find success history item', () => {
      expect(component.queryByTestId('history-list')).toBeTruthy()
      expect(component.queryByTestId('test1')).toBeTruthy()
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
