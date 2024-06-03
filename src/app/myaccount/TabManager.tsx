'use client';

import { useState } from "react";

type TabManagerProps ={
    tabs : Tab[];
}
type Tab ={
    name: string
    content: React.ReactNode;
}

export function TabManager(props: TabManagerProps){
    const[currTab,setTab]= useState(0);

    return <div className="flex">
        <div className="flex flex-col">
    {props.tabs.map((tab,idx) => 
    <button key={tab.name} className={`${currTab == idx ? 'text-red-200':''}`} onClick={()=> setTab(idx)}>{tab.name}</button>
        )}
        </div>
        <div>
            {props.tabs[currTab].content}
        </div>

    </div>
}