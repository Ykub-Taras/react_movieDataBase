import logo from '../userInfo/UserLogo.svg';

export default function UserAccount() {
    return (<div className="pMargin">
            <a href={"#"}><img style={{maxWidth: "35px", background: "none", textDecoration: "none"}} src={logo}
                               alt={"UserAccount"}/>User: Taras</a>
        </div>
    )
}