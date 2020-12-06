import React, { HTMLAttributes, LinkHTMLAttributes, ReactChild } from 'react'
import classNames from 'classnames'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactChild
    onClick?: () => void
    className?: string
    disabled?: boolean
    active?: boolean
    href?: string
}

const Button: React.FC<Props> = ({
    children = 'Default Button',
    onClick,
    className = null,
    disabled = false,
    active = false,
    ...attrs
}) => {
    const classes = classNames('btn', className, { active })

    // TODO: any ->  normal interface | type
    const Tag: any = attrs.href ? 'a' : 'button'

    return (
        <Tag {...attrs} className={classes} disabled={disabled} onClick={onClick}>
            {children}
        </Tag>
    )
}

export default Button
