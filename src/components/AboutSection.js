import React from 'react';
import TrevorPH from "../img/TrevorPH.png"
// Styled
import styled from 'styled-components';
import {About, Description, MainImage, Hide} from '../styles'

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>Turning ideas</h2>
                    </Hide>
                    <Hide>
                        <h2>into <span> software!</span></h2>
                    </Hide>
                    <p>Contact Me for any business ideas or inquiries</p>
                    <button>Contact Me</button>
                </div>
                <MainImage>
                    <img className="trevorPH" src={TrevorPH} alt='Me crossing my hands' />
                </MainImage>
            </Description>
        </About>
    );
};

export default AboutSection;