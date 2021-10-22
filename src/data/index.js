export const ubicaciones = ["A-1", "A-2", "A-3", "B-1", "B-2", "B-3", "C-1", "C-2", "C-3", "D-1", "D-2", "D-3", "E-1", "E-2", "E-3",];

export const routes = {
    home: "/",
    libros: "/libros",
    libro: "/libros/:id",
    autores: "/autores",
    autor: "/autores/:id",
    registrarse: "/usuarios/:id",
    login: "/login",
    loginNew: "/login/new",
    logout: "/logout"
}

export const getRouteId = (route, id) => {
    return route.replace(':id', id)
}