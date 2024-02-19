import { useMemo, useState } from 'react';
import styles from './Input.module.scss';
import Icon from '../Icon/Icon';
import { HIDE, SHOW } from '../../../constants/icons';

interface IInput {
    placeholder?: string;
    name?: string;
    value: string;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
    hiddenValue?: boolean;
}

const Input = ({ placeholder, name, value, onChange, hiddenValue }: IInput) => {
    const [valueIsHidden, setValueIsHidden] = useState(hiddenValue ?? false);

    const onVisibilityChange = () => {
        setValueIsHidden((prev) => !prev);
    };

    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                type={valueIsHidden ? 'password' : 'text'}
            />
            <div className={styles.inputTitle}>{name}</div>
            {hiddenValue && (
                <Icon
                    name={valueIsHidden ? HIDE : SHOW}
                    height="25px"
                    width="25px"
                    onClick={onVisibilityChange}
                />
            )}
        </div>
    );
};

export default Input;
