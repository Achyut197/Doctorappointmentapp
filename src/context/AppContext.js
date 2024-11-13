import { createContext } from "react";
import { doctordetails } from "../assets/assets";

export const AppContext=createContext();

const AppContextProvider = (props) =>{
    const currencySymbol='₹'
    const value={
doctordetails,
currencySymbol
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;