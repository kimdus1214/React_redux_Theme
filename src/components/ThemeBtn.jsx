import React from "react";
import styled from "styled-components";
import { blueTheme, darkTheme, lightTheme, pinkTheme } from "../theme/theme";

const ThemeBtnBlock = styled.ul`
    width: 300px;
    height: 50px;
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 2%;
    right: 1%;
    border: 1px solid #ddd;
`;

const ThemeBtnAlticle = styled.li`
    height: 50px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
`;

const ThemeVers = [
    {
        name: 'light',
        theme: lightTheme
    },
    {
        name: 'pink',
        theme: pinkTheme
    },
    {
        name: 'blue',
        theme: blueTheme
    },
    {
        name: 'dark',
        theme: darkTheme
    }
];

function ThemeBtn({onThemeChange}){
    return(
        <ThemeBtnBlock>
            {ThemeVers.map(theme=>(
                <ThemeBtnAlticle key={theme.name} onClick={()=>onThemeChange(theme.name,theme.theme)}>{theme.name}</ThemeBtnAlticle>
            ))
            }            
        </ThemeBtnBlock>
    );
}

export default ThemeBtn;