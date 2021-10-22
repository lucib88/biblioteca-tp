import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { useSelector } from "react-redux";
import { useStyles } from "./styles"
import { useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { routes } from '../../data';

const MenuItem = ({ titulo, url, icon: Icon }) => {
    return <ListItem button>
        <ListItemIcon> <Icon /></ListItemIcon>
        <ListItemText>
            <Link
                to={url}
                style={{ textDecoration: "none", color: "#000" }}
            >
                {titulo}
            </Link>
        </ListItemText>
    </ListItem>
}

export default function MenuItems({ handleDrawerClose, open }) {
    const classes = useStyles();
    const theme = useTheme();

    const usuarioLogeado = useSelector(state => state)

    return <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
            paper: classes.drawerPaper,
        }}
    >
        <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
        </div>
        <Divider />


        <List>
            <MenuItem titulo="Libros" url={routes.libros} icon={MenuBookIcon} />
            <MenuItem titulo="Autores" url={routes.autores} icon={EmojiPeopleIcon} />

            {usuarioLogeado?.nombre &&
                <MenuItem titulo="Cerrar sesión" url={routes.logout} icon={AccountBoxIcon} />
            }

            {!usuarioLogeado?.nombre &&
                <MenuItem titulo="Iniciar sesión" url={routes.login} icon={AccountBoxIcon} />
            }
        </List>


    </Drawer>
}