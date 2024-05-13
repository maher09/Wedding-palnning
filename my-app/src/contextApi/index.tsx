"use client"; // Mark the file as a client component

import { createContext, useState, useContext } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
    // Ensure useState is used in a client component context

    const [name, setname] = useState("no reservation yet");
    const [price, setprice] = useState("");
    const [day, setday] = useState("");
    const [month, setmonth] = useState("");
    const [year, setyear] = useState("");
    const [timee, settimee] = useState("");
    const [conterApp, setconterApp] = useState("");

    {/*componanetColor*/}

   const [RedImgCounter, setRedImgCounter] = useState(1);

    return (
        <AppContext.Provider value={{name,setname,timee,settimee,price,setprice,day,setday,month,setmonth,year,setyear,conterApp,setconterApp,RedImgCounter,setRedImgCounter}}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
