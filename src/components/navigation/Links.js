import {Link} from "react-router-dom"
import React from "react";

const Links = () => {
    return (
        <div className="pMargin reactStar">
            <div className="pMargin textNone"><Link to={'/popular'}>POPULAR MOVIES</Link></div>
            <div className="pMargin textNone"><Link to={'/discover'}>DISCOVER MOVIES</Link></div>
        </div>
    )
}
export default Links;