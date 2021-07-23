import React, {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getGenres} from "../../services/api";
import {setGenre, setListGenres} from "../../redux/actionCreators";
import {Link} from "react-router-dom";

const GetGenres = () => {
    const dispatch = useDispatch();
    const language = useSelector(({language}) => language.listLanguages)
    useEffect(() => {
        getGenres(language).then(value => dispatch(setListGenres([...value.data.genres])))
            .catch(e => console.log('ERROR : ', e))
            .finally(() => console.log('Get genres block passed'))
    }, [dispatch, language])
    const genres = useSelector(({genres}) => genres.listGenres)

    function onSubmit(e) {
        e.preventDefault()
    }

    const genreList = genres.map((item, index) => {
        return (
            <div className="list-inline-item" key={index}>
                <Link to={`/discover`}>
                    <button type="button" className="btn btn-outline-info"
                            onSubmit={onSubmit}
                            onClick={() => {
                                dispatch(setGenre(item.id))
                            }}>
                        {item.name}
                    </button>
                </Link>
            </div>
        );
    });
    return (
        <Fragment>
            {genreList}
        </Fragment>
    )
}
export default GetGenres