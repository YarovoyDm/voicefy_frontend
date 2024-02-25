import { useMemo, useState } from 'react';
import styles from './Input.module.scss';
import Icon from '../Icon/Icon';
import cn from 'classnames';
import { HIDE, SHOW } from 'constants/icons';

interface IInput {
    placeholder?: string;
    name?: string;
    value: string;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
    hiddenValue?: boolean;
    onBlur: (e: React.FocusEvent<HTMLElement>) => void;
    error: boolean | undefined;
    errorText: string | false | undefined;
}

const Input = ({
    placeholder,
    name,
    value,
    onChange,
    hiddenValue,
    onBlur,
    error,
    errorText,
}: IInput) => {
    const [valueIsHidden, setValueIsHidden] = useState(hiddenValue ?? false);
    const onVisibilityChange = () => {
        setValueIsHidden((prev) => !prev);
    };

    return (
        <div className={styles.wrapper}>
            <input
                className={cn(styles.input, { [styles.error]: error })}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                type={valueIsHidden ? 'password' : 'text'}
                onBlur={onBlur}
            />
            <div className={styles.inputTitle}>{name}</div>
            {errorText && <div className={styles.inputError}>{errorText}</div>}
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
