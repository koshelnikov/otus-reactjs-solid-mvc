import React, {ButtonHTMLAttributes, ReactNode} from "react";

// Liskov Substitution
interface iProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactNode
}
// icon Open-Closed
// children Open-Closed
export const Button: React.FC<iProps> = (props) => {
    const {
        icon,
        children,
        ...restProps} = props

    return (
        <button {...restProps}>
            {icon && icon}
            { children && <span>{children}</span>}
        </button>
    )
}

