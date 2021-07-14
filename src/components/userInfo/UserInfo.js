import logo from '../userInfo/UserLogo.svg';

export default function UserAccount() {
    return(<div  style={{margin:"0 30px"}}>
            <a href={"#"}><img style={{maxWidth:"35px", background:"none", textDecoration:"none"}} src={logo} alt={"UserAccount"}/>User: Taras</a>
        </div>
    )
}