import searchIcon from "../search/search.svg"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setSearch} from "../../redux/actionCreators";
import {Link} from "react-router-dom";


const SearchInput = () => {
    const dispatch = useDispatch();
    let [inputData, setInputData] = useState('')
    const handleSubmitForm = (e) => {
        e.preventDefault();
        setInputData('');
    }
    return (
        <div>
            <form className="pMargin dFlexJustStart" onSubmit={handleSubmitForm}>
                <input type="text" value={inputData} onChange={({target: {value}}) => setInputData(value)}
                       placeholder="Search ... "/>
                <Link to={'/search'}>
                    <button onClick={() => dispatch(setSearch(inputData))}><img src={searchIcon} alt="searchIcon"/>
                    </button>
                </Link>


            </form>
        </div>
    )
}
export default SearchInput