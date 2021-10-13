import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../../components/Menu/Header';
import MenuItems from '../../components/Menu/MenuItems';
import { useStyles } from "../../components/Menu/styles"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Libros from "../Libros"
import Autores from "../Autores"
import Libro from '../Libro';
import Autor from '../Autor';
import Usuario from '../Usuario';
import Login from '../Login';

export default function Home() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <BrowserRouter>
            <div className={classes.root}>
                <CssBaseline />
                <Header handleDrawerOpen={handleDrawerOpen} open={open} />
                <MenuItems handleDrawerClose={handleDrawerClose} open={open} />
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
                    <Switch>
                        <Route exact path="/" component={Libros} />
                        <Route path="/libros" exact component={Libros} />
                        <Route path="/libros/:id" component={Libro} />
                        <Route path="/autores" exact component={Autores} />
                        <Route path="/autores/:id" component={Autor} />
                        <Route path="/usuarios/login" exact component={Login} />
                        <Route path="/usuarios/login/new" exact component={Login} />
                        <Route path="/usuarios/logout" exact component={Login} />
                        <Route path="/usuarios/:id" component={Usuario} />


                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    );
}