import { lightTheme } from "../theme/theme";

const THEME_CHANGE = 'ThemeRedux/THEME_CHANGE';

export const themeChange = (name,theme) => ({type: THEME_CHANGE, name,theme});

const initialState = {
    name: 'light',
    theme: lightTheme
}

export default function ThemeRedux(state=initialState, action){
    switch(action.type){
        case THEME_CHANGE:
            return ({
                ...state,
                name: action.name,
                theme: action.theme
            })
        default:
            return state;
    }
    
}