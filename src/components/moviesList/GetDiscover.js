import {useSelector} from "react-redux";
import GetMovies from "./GetMovies";

export default function GetDiscover() {
    const ganreStatus = useSelector(({genres}) => genres.setGenre)
    return (
        <div>
            <GetMovies id={ganreStatus}/>
        </div>
    )
}