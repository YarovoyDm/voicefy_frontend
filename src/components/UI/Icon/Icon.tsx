import Hide from '../../../assets/hideIcon.svg?react';
import Show from '../../../assets/showIcon.svg?react';

import { SHOW, HIDE } from '../../../constants/icons';

type IProps = {
    name: string;
    width?: string;
    height?: string;
    onClick: () => void;
};

const Icons = {
    [HIDE]: Hide,
    [SHOW]: Show,
};

const Icon = ({ name, width, height, onClick }: IProps) => {
    const Component = Icons[name as keyof typeof Icons];

    return (
        <Component
            style={{
                width: width,
                height: height,
            }}
            onClick={onClick}
        />
    );
};

export default Icon;
