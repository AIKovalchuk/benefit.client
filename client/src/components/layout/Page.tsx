import React from 'react'
import Header from './Header'

const Page: React.FC = (props) => {
    return (
        <div className="page">
            <Header />
            {props.children}
        </div>
    )
}

export default Page
