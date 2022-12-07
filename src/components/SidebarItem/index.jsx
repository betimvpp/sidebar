import React from "react";
import * as C from './styles';

export const SidebarItem = ({Icon, Text})=>{
    return (
        <C.Container>
            <Icon/>
            {Text}
        </C.Container>
    )
}
