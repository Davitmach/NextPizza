'use client';
import { useEffect, useRef, useState } from 'react';
import Style from './select.module.scss';
import { useMenuState, useSortState } from '@/store';
export const Select = ()=> {
    const [active,setActive] = useState<string>('');
     const {setSort,sortState} = useSortState();
const SelectRef = useRef<HTMLSelectElement>(null);
    useEffect(()=> {
        if (SelectRef.current) {
            setActive(SelectRef.current.value);
        }
    },[])

    const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setActive(event.target.value); 
      };
useEffect(()=> {
setSort(active);
},[active])
    return(<div className={Style.Option_box}>
        <label className={Style.Label} >Сортировка:</label>
        <select id="menu" className={Style.Select} ref={SelectRef}  onChange={handleChange}>
        <option value="rating">рейтингу</option>
        <option value="price">по цене</option>
        <option value="popular">популярные</option>
      </select>

      </div>
    )
}