import React from "react";
import Main from "../components/Main";
import ThemeBtn from "../components/ThemeBtn";
import { ThemeProvider } from "styled-components";
import {GlobalStyle} from '../theme/globalStyle';
import {useSelector,useDispatch } from 'react-redux';
import {themeChange} from '../redux/ThemeRedux';


function Home(){
    const { name, theme } = useSelector(state=>({
        name: state.ThemeRedux.name,
        theme: state.ThemeRedux.theme
    }));

    const dispatch = useDispatch();
    const onThemeChange = (name, theme) => dispatch(themeChange(name, theme));

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Main name={name}/>
            <ThemeBtn onThemeChange={onThemeChange}/>
        </ThemeProvider>
    );
            
}

export default Home;