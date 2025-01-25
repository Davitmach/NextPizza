import { RadioLabel } from '@/components/UI/radioLabel/radioLabel';
import { useState } from 'react';

export const FilterTypes = () => {
    const [active, setActive] = useState('');

    const handleChange = (value: string) => {
        setActive(value);
    };

    return (
        <div className='mt-[20px]'>
            <div>
                <RadioLabel active={active} value="traditional" onChange={handleChange}>
                    Традиционное
                </RadioLabel>
            </div>
            <div>
                <RadioLabel active={active} value="thin" onChange={handleChange}>
                    Тонкое
                </RadioLabel>
            </div>
        </div>
    );
};
