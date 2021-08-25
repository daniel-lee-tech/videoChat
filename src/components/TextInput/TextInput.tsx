import React from 'react';

interface TextInputProps {
    name: string;
    label: string;
    containerClass?: string;
    labelClass?: string;
    inputClass?: string;
}

const TextInput : (props: TextInputProps) => JSX.Element = (props) => {
    const {name, label, labelClass,inputClass,containerClass} = props;

    return <div className={`mb-5 ${containerClass}`}>
        <label className={`block mb-2 ${labelClass}`} htmlFor={name}>{label}</label>
        <input className={`rounded text-black ${inputClass}`} type="text" name={name} />
    </div>
}

export {TextInput};