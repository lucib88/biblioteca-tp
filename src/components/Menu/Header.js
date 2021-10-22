import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { useStyles } from "./styles"
import { useState, useEffect } from 'react';
import { matchPath, useLocation } from 'react-router';
import { routes } from "../../data";

const titulos = {
  [routes.libros]: "Buscar libros",
  [routes.autores]: "Buscar autor",
  [routes.libro]: " libro",
  [routes.autor]: " autor",
  [routes.login]: "Iniciar sesión",
  [routes.logout]: "Iniciar sesión",
  [routes.loginNew]: "Iniciar sesión",
  [routes.registrarse]: "usuario",
  [routes.home]: "Buscar libros"
}

export default function Header({ handleDrawerOpen, open }) {
  const classes = useStyles();
  const [titulo, setTitulo] = useState("");
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname;
    const id = matchPath(pathName, { path: "/:nombre/:id" })?.params?.id;

    let prefijo = "";
    let path = pathName;

    if (id === 'add') {
      prefijo = "Agregar ";
      path = pathName.replace(id, ':id')
    } else if (id && id !== 'new') {
      prefijo = "Editar "
      path = pathName.replace(id, ':id')
    }
    setTitulo(prefijo + titulos[path])

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