import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// Images
import database from '../img/database.png';
import pythonSelenium from '../img/pythonSelenium.png';
import xamarin from '../img/xamarin.png';

const MyWork = () => {
    return(
        <Work>
            <Project>
                <h2>SQL Server & ASP.Net</h2>
                <div className="line"></div>
                <Link to="/work/the-database">
                <img src={database} alt="database"/></Link>
            </Project>
            <Project>
                <h2>Python & Selenium</h2>
                <div className="line"></div>
                <Link to="/work/python-selenium">
                <img src={pythonSelenium} alt="pythonSelenium"/></Link>
            </Project>
            <Project>
                <h2>Xamarin.Forms</h2>
                <div className="line"></div>
                <Link to="/work/the-xamarin">
                <img src={xamarin} alt="xamarin"/></Link>
            </Project>
        </Work>
    );
};

const Work = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
`;

const Project = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem
    }
    img{
        height: 636px;
        width: 100%;
        object-fit: cover;
    }
`

export default MyWork;