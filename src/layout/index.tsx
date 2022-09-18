import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import {Link as RouterLink, Outlet} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    marginRight: '8px'
  }
}))

const MainLayout: React.FC = (): JSX.Element => {
  const classes = useStyles()

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Link to="/" component={RouterLink} color="inherit" className={classes.title}>
            Search
          </Link>
          <Link to="/history" component={RouterLink} color="inherit" className={classes.title}>
            History
          </Link>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  )
}

export default MainLayout
