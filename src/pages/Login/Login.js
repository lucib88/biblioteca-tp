import { useEffect } from "react";
import { useLocation } from "react-router";
import { AlertMessage } from "../../components/common";
import LoginForm from "../../components/Forms/LoginForm";
import { signOut } from '../../actions/logged';
import { useDispatch } from "react-redux";
import { routes } from "../../data";

const Login = () => {
    const location = useLocation();
    const registered = location.pathname === routes.loginNew;
    const dispatch = useDispatch()

    useEffect(() => {
        if (location.pathname === routes.logout) {
            dispatch(signOut())
        }
    }, [location, dispatch]);


    return (
        <>
            {registered && <AlertMessage severity="success" title="" message="Usuario registrado exitosamente. Inicie sesión." />}
            <LoginForm />
        </>
    );
};

export default Login;