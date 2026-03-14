import { createContext, StoreContext, useState } from "react";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [foodList, setFoodList] = useState("");
    const contextValue = {
        foodList, setFoodList
    }
}
return (
    <StoreContext.provider value={contextValue}>
        {props.children}
    </StoreContext.provider>
)

export default StoreContextProvider;