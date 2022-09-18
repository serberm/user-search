import React, {useState, useContext, createContext} from 'react'
import axios from 'axios'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import {IUser, IHistory} from '@/types'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}))
type IGithubContext = {
  users: Array<IUser>
  user: IUser | null | undefined
  histories: Array<IHistory>
  setHistories: Function
  isLoading: boolean
  error: Object
  searchGithubUsers: Function
  getGithubUser: Function
}

interface IGithubProvider {
  children: JSX.Element
}

const base_url = 'https://api.github.com/'

export const GithubContext = createContext<IGithubContext>({
  users: [],
  user: null,
  histories: [],
  setHistories: () => {},
  isLoading: false,
  error: {show: false, msg: ''},
  searchGithubUsers: () => {},
  getGithubUser: () => {}
})

export const useGithub = (): IGithubContext => useContext(GithubContext)

const GithubProvider = ({children}: IGithubProvider) => {
  const classes = useStyles()

  const [users, setUsers] = useState<Array<IUser>>([])
  const [user, setUser] = useState<IUser>()
  const [histories, setHistories] = useState<Array<IHistory>>([])
  const [isLoading, setIsLoading] = useState(false)

  // error
  const [error, setError] = useState({show: false, msg: ''})

  const searchGithubUsers = async (query: string) => {
    toggleError()
    setIsLoading(true)
    const response = await axios(`${base_url}search/users?q=${query}&page=0&per_page=100&sort=login`).catch((err) =>
      console.log(err)
    )
    if (response) {
      setUsers(response.data.items)
    } else {
      toggleError(true, 'there is no users')
    }
    setIsLoading(false)
  }

  const getGithubUser = async (username: string) => {
    toggleError()
    setIsLoading(true)
    const response = await axios(`${base_url}users/${username}`).catch((err) => console.log(err))
    if (response) {
      setUser(response.data)
    } else {
      toggleError(true, 'there is no user with that username')
    }
    setIsLoading(false)
  }

  const toggleError = (show = false, msg = '') => {
    setError({show, msg})
  }

  return (
    <GithubContext.Provider
      value={{
        users,
        user,
        histories,
        setHistories,
        isLoading,
        error,
        searchGithubUsers,
        getGithubUser
      }}
    >
      {children}
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </GithubContext.Provider>
  )
}

export default GithubProvider
