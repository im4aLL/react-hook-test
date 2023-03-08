import { createContext, useState } from "react";

export const ThemeContext = createContext({
    theme: '',
    setTheme: () => {},
});

export const ThemeContextProvider = props => {
    const setTheme = theme => {
        setState({...state, theme})
    }

    const initState = {
        theme: "Dark",
        setTheme,
    }

    const [state, setState] = useState(initState);

    return (
        <ThemeContext.Provider value={state}>
            {props.children}
        </ThemeContext.Provider>
    );
};