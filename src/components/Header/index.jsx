import React, {useState} from "react";
import * as C from './styles';
import {FaBars} from 'react-icons/fa';
import Sidebar from '../Sidebar/index'; 

const Header = () =>{
    const [sidebar, setSidebar] = useState(false);

    const showSiderbar = () => setSidebar(!sidebar)

    return(
        <C.Container>
            <FaBars onClick={showSiderbar}/>
            {sidebar && <Sidebar active={setSidebar}/>}
        </C.Container>
    )
}

export default Header;

