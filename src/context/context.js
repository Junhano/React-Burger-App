import React from 'react';

const Context = React.createContext({
    amount: {},
    addItem: ()=>{},
    removeItem: ()=>{},
    control: [],
    deleteorder: ()=>{}

})

export default Context