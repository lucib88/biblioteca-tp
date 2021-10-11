import Loading from "../../components/common/Loading";
import Divider from "../../components/common/Divider";
import Error from "../../components/common/Error";
import { useSearch } from "../../hooks/useSearch";

const initialState = {
    url: "autores",
    page: 1,
    rowsPerPage: 20,
    params: {}

}

const Autores = () => {
    //   const [state, dispatch] = useReducer(searcurl, params, page, rowsPerPagehReducer, initialState);

    const { data, loading, error } = useSearch(initialState);
    const { results: autores, total } = data;

    if (loading) return <Loading />;
    if (error) return <Error />;

    return (
        <>
            <p>Cantidad de elementos: {total}</p>

            <Divider></Divider>
            {autores?.length > 0 && autores.map((autor) => <p key={autor.id}>{autor.nombre}</p>)}

        </>
    );
}

export default Autores;