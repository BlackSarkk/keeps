import { ReactElement } from "react";

type Variants = "primary" | "secondary" | "tertiary"
type Sizes = "xs" | "sm" | "md" | "lg"

const variantStyles = {
    "primary": "bg-purple-550 text-gray-150 border-[#010101] font-Inter",
    "secondary": "bg-gray-350 text-gray-750 border-[#010101] font-Inter",
    "tertiary": "bg-green-550 text-gray-150 border-[#010101] font-Inter",
}

const defaultStyles = " flex cursor-pointer items-center justify-between"

const sizeStyles = {
    "xs": "py-[6px] px-[10px] rounded-xl border-[3px] text-[11px] font-semibold",
    "sm": "py-[9px] px-[16px] rounded-2xl border-[3px] text-[16px] font-semibold",
    "md": "py-[10px] px-[18px] rounded-2xl border-[4px] text-[21px] font-semibold",
    "lg": "py-[11px] px-[21px] rounded-3xl border-[5px] text-[28px] font-semibold",
}

interface ButtonProps {
    variant: Variants;
    size: Sizes;
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick: () => void;
}



export const Button = (props: ButtonProps) => {
    return (
        <button className={`
            ${variantStyles[props.variant]}
            ${defaultStyles}
            ${sizeStyles[props.size]}
            `}

        >
            {props.startIcon ? <div className="pr-1">{props.startIcon}</div> : null}
            {props.text}
            {props.endIcon ? <div className="pl-1">{props.endIcon}</div> : null}

        </button>
    )
}
