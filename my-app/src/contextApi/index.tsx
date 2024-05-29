"use client"; // Mark the file as a client component

import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
    // Ensure useState is used in a client component context

   
   //BOOKRESERVATION 
    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [day, setday] = useState("");
    const [month, setmonth] = useState("");
    const [year, setyear] = useState("");
    const [timee, settimee] = useState("");
////////////////////////


// Retrieve initial state from local storage
    const getInitialShowFirstComponent = () => {
        if (typeof window !== "undefined") {
            const savedState = localStorage.getItem("showFirstComponent");
            return savedState !== null ? JSON.parse(savedState) : true;
        }
        return true;
    };

    const [showFirstComponent, setShowFirstComponent] = useState<boolean | null>(null);
    
    
    
    const [showBuyCart, setShowBuyCart] = useState<boolean | null>(null);
            const [conterApp, setconterApp] = useState(null); // Change the initial state value to 0
            const [show, setShow] = useState(false);

            {/*componanetColor*/}

               const [RedImgCounter, setRedImgCounter] = useState(1);

               {/*CART*/}
            const [imgCart, setimgCart] = useState('');
            const [nameCart, setnameCart] = useState('');
            const [priceCart, setpriceCart] = useState('');


            //fetch axios API useState


            // Retrieve and set the initial states from local storage
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedShowFirstComponent = localStorage.getItem("showFirstComponent");
            const initialShowFirstComponent = savedShowFirstComponent !== null ? JSON.parse(savedShowFirstComponent) : true;
            setShowFirstComponent(initialShowFirstComponent);

            const savedShowBuyCart = localStorage.getItem("showBuyCart");
            const initialShowBuyCart = savedShowBuyCart !== null ? JSON.parse(savedShowBuyCart) : true;
            setShowBuyCart(initialShowBuyCart);
        }
    }, []);

    // Save states to local storage whenever they change
    useEffect(() => {
        if (typeof window !== "undefined" && showFirstComponent !== null) {
            localStorage.setItem("showFirstComponent", JSON.stringify(showFirstComponent));
        }
    }, [showFirstComponent]);

    useEffect(() => {
        if (typeof window !== "undefined" && showBuyCart !== null) {
            localStorage.setItem("showBuyCart", JSON.stringify(showBuyCart));
        }
    }, [showBuyCart]);

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
        showBuyCart,setShowBuyCart
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
