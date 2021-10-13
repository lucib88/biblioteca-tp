import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { useStyles } from "./styles"
import { useState, useEffect } from 'react';
import { matchPath, useLocation } from 'react-router';

const titulos = {
  "/libros": "Buscar libros",
  "/libros/add": "Agregar libro",
  "/autores": "Buscar autor",
  "/autores/add": "Agregar autor",
  "/libros/id": "Editar libro",
  "/autores/id": "Editar autor",
  "/usuarios/login": "Iniciar sesión",
  "/usuarios/logout": "Iniciar sesión",
  "/usuarios/login/new": "Iniciar sesión",
  "/usuarios/add": "Registrarse",
  "/": "Buscar libros"
}

export default function Header({ handleDrawerOpen, open }) {
  const classes = useStyles();
  const [titulo, setTitulo] = useState("");
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname;
    const id = matchPath(pathName, { path: "/:nombre/:id" })?.params?.id;
    const path = id !== 'add' && id !== 'login' && id !== 'logout' ? pathName.replace(id, 'id') : pathName;
    setTitulo(titulos[path])

  }, [location]);


  return (
    <div className={classes.rootAppt}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap className={classes.title} >
            {titulo}
          </Typography>

          <Typography variant="h6" noWrap >
            BIBLIOTECA
          </Typography>

        </Toolbar>
      </AppBar>
    </div>
  );
}