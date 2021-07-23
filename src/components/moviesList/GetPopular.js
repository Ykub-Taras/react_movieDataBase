import GetMovies from "./GetMovies";
import {useDispatch} from "react-redux";
import {setSearch} from "../../redux/actionCreators";

export default function GetPopular() {
    const popular = null;
    const dispatch = useDispatch();
    dispatch(setSearch(''))
    return (
        <div>
            <GetMovies id={popular}/>
        </div>
    )
}
