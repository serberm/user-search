import React from 'react'
import {useNavigate} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import {useGithub} from '../../context'
import {IHistory} from '@/types'

const HistoryPage: React.FC = (): JSX.Element => {
  const {histories} = useGithub()
  let navigate = useNavigate()

  const searchHistory = (history: string) => {
    navigate(`/?search=${history}`)
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <List data-testid="history-list" component="nav" aria-label="secondary mailbox folders">
          {histories
            .sort((a: IHistory, b: IHistory) => b.date.getTime() - a.date.getTime())
            .map((history: IHistory) => (
              <ListItem
                data-testid={history.value}
                key={history.value}
                button
                onClick={() => searchHistory(history.value)}
              >
                <ListItemText
                  primary={history.value}
                  secondary={`${history.date.toLocaleDateString()}, ${history.date.toLocaleTimeString()}`}
                />
              </ListItem>
            ))}
        </List>
      </Container>
    </React.Fragment>
  )
}

export default HistoryPage
