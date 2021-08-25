import React, {ButtonHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<any>{
    text: string;
}

const Button: (props: ButtonProps) => JSX.Element = (props: ButtonProps) => {
    return (
        <button
            type={props.type ? props.type : 'button'}
            className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 text-left">
            {props.text}
        </button>
    )
}

export {Button};
