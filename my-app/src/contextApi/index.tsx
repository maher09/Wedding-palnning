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
            const [showFirstComponent, setShowFirstComponent] = useState(true);
            const [showBuyCart, setShowBuyCart] = useState(true);
            const [conterApp, setconterApp] = useState(null); // Change the initial state value to 0
            const [show, setShow] = useState(false);

            {/*componanetColor*/}

            const [RedImgCounter, setRedImgCounter] = useState(1);

               {/*CART*/}
            const [imgCart, setimgCart] = useState([]);
            const [nameCart, setnameCart] = useState([]);
            const [priceCart, setpriceCart] = useState([]);

                {/*Dark mode*/}
                const [darkMode, setDarkMode] = useState(false);

    return (
        <AppContext.Provider value={{name,setname,
        timee,settimee,
        price,setprice,
        day,setday,
        month,setmonth,
        year,setyear,
        conterApp,setconterApp,
        RedImgCounter,setRedImgCounter,
        imgCart,setimgCart,
        nameCart,setnameCart,
        priceCart,setpriceCart,
        show,setShow,
        showFirstComponent,setShowFirstComponent,
        showBuyCart,setShowBuyCart,
        darkMode,setDarkMode
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
