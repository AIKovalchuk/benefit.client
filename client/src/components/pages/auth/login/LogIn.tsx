import React from 'react'
import Modal from '../../../base/Modal'
import Header from '../../../layout/Header'
import Form from './Form'

interface Props {}

const LogIn = (props: Props) => {
    return (
        <div className="page">
            <Header />
            <Modal
                title={'Войти'}
                isOpen={true}
                onCancel={() => {
                    alert('cancel')
                }}
                onSubmit={() => {
                    alert('submit')
                }}>
                <Form />
            </Modal>
        </div>
    )
}

export default LogIn
