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
import { useStyles } from "./styles"
import { useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

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
            <MenuItem titulo="Libros" url="/libros" icon={MenuBookIcon} />
            <MenuItem titulo="Autores" url="/autores" icon={EmojiPeopleIcon} />
        </List>


    </Drawer>
}