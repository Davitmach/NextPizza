
import { useFilter } from '@/store';
import { Radio } from '../radio/radio';
export type RadioProps2 = {
  children: React.ReactNode;
  active: string;
  value: string; // Значение текущей радио-кнопки
  onChange: (value: string) => void; // Функция для изменения активного значения
};
export const RadioLabel = ({ children, active, onChange, value }: RadioProps2) => {
    const {setType} = useFilter();
    const isActive = active === value;

    return (
        <div
            className="inline-flex items-center justify-center gap-[12px]"
            onClick={() => {onChange(value)
const type = children == 'Тонкое' ? 1 :2
                setType(type)
            }} // Устанавливаем активное значение при клике
        >
            <Radio isActive={isActive} />
            <span className="text-black-label text-[16px] font-[400]">
                {children}
            </span>
        </div>
    );
};

export type RadioProps = {
    children: React.ReactNode;
    active: string;
    value: string; // Значение текущей радио-кнопки
    onChange: (value: string) => void; // Функция для изменения активного значения
};
