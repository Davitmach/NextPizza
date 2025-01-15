'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default  function Log() {
    const {push} = useRouter();
    useEffect(()=> {
push('/')
    },[])
    return(<></>)
}