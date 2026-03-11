import { createContext, StoreContext } from "react";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const contextValue = {

    }
}
return (
    <StoreContext.provider value={contextValue}>
        {props.children}
    </StoreContext.provider>
)

export default StoreContextProvider;