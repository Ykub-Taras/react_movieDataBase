// Icons are copied from fontawesome.com and flaticon.com
import {ButtonGroup, Dropdown} from "react-bootstrap";
import logo from "../languageSwitcher/language-solid.svg"
import uk from "../languageSwitcher/united-kingdom.svg"
import ua from "../languageSwitcher/ukraine.svg"
import ru from "../languageSwitcher/russia.svg"
import {useDispatch} from "react-redux";
import {setLanguage} from "../../redux/actionCreators";


const Languages = () => {
    const dispatch = useDispatch();
    return (<div>
            <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle split variant="outline-primary" id="dropdown-split-basic"><img src={logo}
                                                                                                style={{width: "30px"}}
                                                                                                alt={"languageSwitcher"}/><b>LANGUAGE
                    : </b></Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#" onClick={() => (dispatch(setLanguage('en-US')))}><img src={uk}
                                                                                                  style={{width: "30px"}}
                                                                                                  alt={"languageSwitcher"}/> English
                    </Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => (dispatch(setLanguage('uk-UA')))}><img src={ua}
                                                                                                  style={{width: "30px"}}
                                                                                                  alt={"languageSwitcher"}/> Українська</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => (dispatch(setLanguage('ru-RU')))}><img src={ru}
                                                                                                  style={{width: "30px"}}
                                                                                                  alt={"languageSwitcher"}/> Руский</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
export default Languages