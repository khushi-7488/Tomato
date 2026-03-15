import { createContext, StoreContext, useState } from "react";
import { food_list } from "../assets/assets"
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const contextValue = {
        food_list
    }
}
return (
    <StoreContext.provider value={contextValue}>
        {props.children}
    </StoreContext.provider>
)

export default StoreContextProvider;