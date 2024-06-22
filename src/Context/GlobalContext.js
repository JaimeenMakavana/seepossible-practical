'use client'
import React from 'react'
import { createContext, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts';
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [isSignup, setIsSignup, removeIsSignup] = useLocalStorage('isSignup', false);
    const [isSignin, setIsSignin, removeIsSignin] = useLocalStorage('isSignin', false);
    const [userData, setUserData, removeUserData] = useLocalStorage('userData', {});

    // for address section
    const [AddressData, setAddressData] = useState([
        {
            addressId: 1,
            firstName: "Amit",
            lastName: "Sharma",
            address1: "123 MG Road",
            address2: "Near Metro Station",
            city: "Mumbai",
            state: "Maharashtra",
            country: "India",
            telephone: "022-12345678"
        },
        {
            addressId: 2,
            firstName: "Priya",
            lastName: "Nair",
            address1: "456 Brigade Road",
            address2: "Opp. Mall",
            city: "Bengaluru",
            state: "Karnataka",
            country: "India",
            telephone: "080-98765432"
        },
        {
            addressId: 3,
            firstName: "Raj",
            lastName: "Kumar",
            address1: "789 Nehru Place",
            address2: "",
            city: "New Delhi",
            state: "Delhi",
            country: "India",
            telephone: "011-45678901"
        },
        {
            addressId: 4,
            firstName: "Sunita",
            lastName: "Singh",
            address1: "101 Park Street",
            address2: "Flat 5A",
            city: "Kolkata",
            state: "West Bengal",
            country: "India",
            telephone: "033-32165498"
        },
        {
            addressId: 5,
            firstName: "Vijay",
            lastName: "Patel",
            address1: "202 MG Road",
            address2: "Near Railway Station",
            city: "Ahmedabad",
            state: "Gujarat",
            country: "India",
            telephone: "079-65432112"
        }
    ]
    )
    const [SelectedAddressData, setSelectedAddressData] = useState({})


    const contextValue = {
        isSignup,
        setIsSignup,
        removeIsSignup,

        isSignin,
        setIsSignin,
        removeIsSignin,

        userData,
        setUserData,
        removeUserData,

        AddressData,
        setAddressData,
        SelectedAddressData,
        setSelectedAddressData,


    }
    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    )
} 