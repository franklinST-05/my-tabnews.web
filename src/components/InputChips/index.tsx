import React, { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler, useEffect, useState } from 'react';
import Chip from '../Chip';

interface InputChipsProps {
    onSetChip?: (chip: Array<string>) => void;
    placeholder?: string;
}

const InputChips: React.FC<InputChipsProps> = ({ onSetChip, placeholder }) => {
    const [chip, setChip] = useState<Array<string>>([]);
    const [value, setValue] = useState<string>('');

    if (onSetChip) {

        useEffect(() => {
            onSetChip(chip);
        }, [chip]);
    }

    const handlerChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { value } = e.target;
        const partials = value.split(',');

        if (partials.length > 1 && partials.at(0) != '') {
            setValue('');
            setChip([...chip, partials[0]]);
        } else if (value === ',') {
            setValue('');
        } else {
            setValue(value.toUpperCase());
        }
    };

    const handlerKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
        const { value } = e.currentTarget;

        if (e.key === 'Backspace' && value === '') {
            e.preventDefault();
            setChip(chip.slice(0, -1));
        } else if (e.key === 'Enter' && value.trim() != '') {
            e.preventDefault();
            setChip([...chip, value]);
            setValue('');
        }
    };

    const handlerBlur: FocusEventHandler<HTMLInputElement> = (e) => {
        const { value } = e.currentTarget;
        if (value.trim() != '') {
            setChip(chip.concat(value));
            setValue('');
        }
    };


    return (
        <div className="flex items-center gap-2 flex-wrap w-full transition-all p-2 bg-secondary rounded-lg" >
            {chip.map((chip, index) => (
                <Chip key={index} className="bg-gray-900">{chip}</Chip>
            ))}

            <input
                className="flex-1 w-auto max-w-full h-full bg-transparent outline-none text-sm p-2"
                placeholder={placeholder}
                value={value}
                type="text"
                onChange={handlerChange}
                onKeyDown={handlerKeyDown}
                onBlur={handlerBlur}
            />
        </div>
    );
};

export default InputChips;