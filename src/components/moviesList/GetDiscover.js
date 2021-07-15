import {useSelector} from "react-redux";
import GetMovies from "./GetMovies";

export default function GetDiscover() {
    const ganreStatus = useSelector(({genres}) => genres.setGenre)
    const currentPage = useSelector(({pagination}) => pagination.currentPage);
    return (
        <div>
            <GetMovies id={ganreStatus} currentPage={currentPage}/>
        </div>
    )
}