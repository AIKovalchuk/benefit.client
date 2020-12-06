import React from 'react'

import Header from '../layout/Header'

interface Props {
    
}

const Benefits = (props: Props) => {
    return (
        <div>
            <Header />
            <div className="benefit-search"></div>
            <div className="benefit-list">
                <div className="benefit-listt__item"></div>
                <div className="benefit-listt__item"></div>
                <div className="benefit-listt__item"></div>
                <div className="benefit-listt__item"></div>
                <div className="benefit-listt__item"></div>
            </div>
        </div>
    )
}

export default Benefits
