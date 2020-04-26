  import React from 'react';

  import clsx from 'clsx';
  
  import MenuIcon from '@material-ui/icons/Menu';
  import NotificationsIcon from '@material-ui/icons/Notifications';
  import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

  import { Typography, Divider, IconButton, Badge, List, Toolbar, Drawer, AppBar } from '@material-ui/core';
  import {Global} from '../../global';
  import { mainListItems, secondaryListItems } from '../ListaMenu';


  const useStyles = Global;

  export default function NavbarMenu(props) {
      const classes = useStyles();

      const [open, setOpen] = React.useState(true);
      
    const handleDrawerClose = () => {
      setOpen(false);
    };
      const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      return(
        <div>
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              {props.titulo}
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
          <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        </div>
      );

  }