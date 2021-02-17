import React from 'react';
// Import icons
import clock from '../img/clock.svg';
import team from '../img/teamwork.svg';
import money from '../img/money.svg';
import pcCode from '../img/pcCode.png';

import styled from 'styled-components';
import {About, Description, Image, Hide} from '../styles'

const ServicesSection = () => {
    return(
        <Services>
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock}/>
                            <h3>Efficient</h3>
                        </div>
                        <p>I work efficiently no matter the project!</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={team}/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>I work well with teams and enjoy the collaboration!</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money}/>
                            <h3>Save Money</h3>
                        </div>
                        <p>Help your company save money</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={pcCode} alt="pc with code"/>
            </Image>
        </Services>
    )
}

const Services = styled(About)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 3rem 0rem 4rem 0rem
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display:flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`;

export default ServicesSection;