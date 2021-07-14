import {Link} from "react-router-dom"
const Links = () => {
    return (
        <div style={{margin:"0 30px", display:"flex"}}>
            <div style={{margin:"0 30px", textDecoration:"none"}}><Link to={'/popular'}>POPULAR MOVIES</Link></div>
            <div style={{margin:"0 30px", textDecoration:"none"}}><Link to={'/discover'}>DISCOVER MOVIES</Link></div>
        </div>
    )
}

export default Links;