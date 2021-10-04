import React from 'react';
// import { useDispatch } from 'react-redux';
import Home from '../pages/Home';
// import { themeChange } from '../redux/ThemeRedux';

function HomeContainer({name}){    
    // const dispatch = useDispatch();
    // const onThemeChange = dispatch(themeChange(name));
    return (
        <Home />
    );
}

export default HomeContainer;