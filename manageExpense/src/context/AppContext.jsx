import { Children, createContext, useContext, useState } from "react";


export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
    
    const [expense,setExpense] = useState(true)
    const [amount, setAmount] = useState("");
    const [selected, setSelected] = useState("Expense Type"); // default text
    const [savedata, setSavedata] = useState()
    const[openacknowlagebox,setOpenacknowlagebox] = useState(false)
    const [isLoading,setIsLoading] = useState(false)
    const [clerkUserId,setclerkUserId] = useState()
    const[expensedata,setExpensedata] = useState()

    const value = {expense,setExpense,amount, setAmount,selected, setSelected,savedata, setSavedata,openacknowlagebox,setOpenacknowlagebox,isLoading,setIsLoading,clerkUserId,setclerkUserId,expensedata,setExpensedata}
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext)
}