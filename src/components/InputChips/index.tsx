import React, { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler, useState } from 'react';
import Chip from '../Chip';

interface InputChipsProps {
    onSetChip:( chip: Array<string> ) => void;
    placeholder?: string;
}

const InputChips: React.FC<InputChipsProps> = ({ onSetChip, placeholder }) => {
    const [chip, setChip] = useState<Array<string>>([]);
    const [value, setValue] = useState('');

    const handlerChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { value } = e.target;
        const partials = value.split(',');

        if (partials.length > 1 && partials.at(0) != '') {
            chip.push(partials[0].trim());
            setChip(chip);
            setValue('');
            onSetChip(chip);
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
            setChip(chip.concat(value));
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
        <div className="flex items-center gap-2 flex-wrap w-full transition-all px-4 py-4 bg-gray-800 rounded-lg" >
            <div className="transition-all flex-1 flex items-center gap-2 flex-wrap  rounded-lg">

                {chip.map((chip, index) => (
                    <Chip key={index} className="bg-gray-900">{chip}</Chip>
                ))}

                <input
                    className="flex-1 w-auto max-w-full bg-transparent outline-none text-sm"
                    placeholder={placeholder}
                    value={value}
                    type="text"
                    onChange={handlerChange}
                    onKeyDown={handlerKeyDown}
                    onBlur={handlerBlur}
                />

            </div>

        </div>
    );
};

export default InputChips;