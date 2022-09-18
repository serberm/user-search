import React from 'react'
import Creatable from 'react-select/creatable'
import {useSearchParams} from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Avatar from '@material-ui/core/Avatar'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'

import {IUser, IHistory} from '@/types'

import {useGithub} from '../../context'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop: '20px'
  },
  select: {
    width: '100%'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  summary: {
    alignItems: 'center',
    display: 'flex',
    marginRight: '8px'
  },
  detail: {
    display: 'flex',
    flexDirection: 'column'
  },
  divider: {
    height: 28,
    margin: 4
  }
}))

const SearchPage: React.FC = (): JSX.Element => {
  const classes = useStyles()
  const [searchParams] = useSearchParams()

  const [username, setUsername] = React.useState<IHistory>()
  const {searchGithubUsers, users, user, getGithubUser, histories, setHistories, isLoading} = useGithub()
  const [expanded, setExpanded] = React.useState<string | boolean>('')
  const handleChange = (username: string) => (_: object, newExpanded: string | boolean) => {
    setExpanded(newExpanded ? username : false)
    if (newExpanded) {
      getGithubUser(username)
    }
  }

  React.useEffect(() => {
    const search = searchParams.get('search')
    if (search) {
      const newOption = createOption(search)
      setUsername(newOption)
      searchGithubUsers(newOption.value)
    }
  }, [searchParams])

  const onChange = (option: IHistory, _: any) => {
    if (!option || option.value === '') {
      return
    }
    setUsername(option)
    searchGithubUsers(option.value)
  }
  const createOption = (label: string) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ''),
    date: new Date()
  })
  const handleCreate = (inputValue: string) => {
    const newOption = createOption(inputValue)
    if (!newOption || newOption.value === '') {
      return
    }
    setUsername(newOption)
    searchGithubUsers(newOption.value)

    let _histories = [...histories]
    if (!_histories.some((el) => el === newOption)) {
      _histories.splice(0, 0, newOption)
      setHistories(_histories)
    }
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <div className={classes.root}>
          <Creatable
            className={classes.select}
            value={username}
            isLoading={isLoading}
            isClearable={true}
            options={histories}
            onChange={onChange}
            onCreateOption={handleCreate}
          />
        </div>

        <List data-testid="search-list" component="nav" aria-label="secondary mailbox folders">
          {users?.map((item: IUser) => (
            <Accordion key={item.id} expanded={expanded === item.login} onChange={handleChange(item.login)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <div className={classes.summary}>
                  <Avatar src={item.avatar_url}></Avatar>
                </div>

                <div className={classes.summary}>
                  <Typography>
                    <a href={item.html_url} target="_blank" rel="noreferrer noopener">
                      {item.login}
                    </a>
                  </Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                {user && (
                  <div className={classes.detail}>
                    <Typography>Name: {user && user.name}</Typography>
                    <Typography>Email: {user && user.email}</Typography>
                    <Typography>Bio: {user && user.bio}</Typography>
                    <Typography>Company: {user && user.company}</Typography>
                    <Typography>Followers: {user && user.followers}</Typography>
                    <Typography>Following: {user && user.following}</Typography>
                    <Typography>Public Repos: {user && user.public_repos}</Typography>
                    <Typography>Public Gists: {user && user.public_gists}</Typography>
                  </div>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </List>
      </Container>
    </React.Fragment>
  )
}

export default SearchPage
