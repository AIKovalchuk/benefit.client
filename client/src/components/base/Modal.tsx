import React from 'react'

import { AiOutlineClose } from 'react-icons/ai'
import Button from './Button'

interface Props {
    title: string
    isOpen: boolean
    onCancel: () => void
    onSubmit: () => void
    children: React.ReactNode
}

const Modal: React.FC<Props> = ({ title, isOpen, onCancel, onSubmit, children }: Props) => {
    if (!isOpen) {
        return null
    }

    return (
        <div className="modal">
            <div className="windows">
                <div className="header">
                    <div className="title">{title}</div>
                    <AiOutlineClose />
                </div>
                <div className="body">{children}</div>
                <div className="footer">
                    <Button className={'medium blue'} onClick={onCancel}>
                        Отменить
                    </Button>
                    <Button className={'medium blue'} onClick={onSubmit}>
                        Отправить
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Modal
