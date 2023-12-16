import React from 'react';
import '../UI/Section.css';

function Section(props) {
    const Icon = props.Icon;

    return (
        <div className='section-container'>
            <div className="section-left">
                <div className="section-Heading">
                    < Icon />
                    <span className='section-title'>{props.SectionTitle}</span>
                </div>
                <div className="section-content">
                    {props.children}
                </div>
            </div>

            <div className="section-right">
                <div className="section-Heading">
                    <span className='section-title'>Anaylytics</span>
                </div>
                <div className="analytics">

                </div>
            </div>
        </div>
    )
}

export default Section;