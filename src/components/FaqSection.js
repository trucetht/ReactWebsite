import React from 'react';
import styled from 'styled-components';
import {About, Description, MainImage, Hide} from '../styles'

const FaqSection = () => {
    return(
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Contact me and we can discuss what you are looking for, I will be more than glad to discuss what would be the best route for you.</p>
                </div>
                <div className="faq-line"/>
            </div>
            <div className="question">
                <h4>What Do I Offer?</h4>
                <div className="answer">
                    <p>I offer services in the .NET stack, React, and Python.</p>
                </div>
                <div className="faq-line"/>
            </div>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;
export default FaqSection;