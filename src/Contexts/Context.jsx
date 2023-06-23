import { createContext, useContext, useEffect, useState } from "react";
import { snacks } from "../Data/Data";

const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [products_data, set_products_data] = useState([])
    useEffect(() => {
        set_products_data(snacks)
    })
    return (
        <DataContext.Provider value={{ products_data }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)