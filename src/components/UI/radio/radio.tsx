import Style from './radio.module.scss';

export const Radio = ({ isActive }: { isActive: boolean }) => {
    return (
        <div
          
        >
            <input
                id="customCheckbox"
                className={Style.radio}
                type="radio"
                checked={isActive}
                readOnly
            />
        </div>
    );
};
