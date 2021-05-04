import React from 'react'
import Tittle from '../Components/tittle';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'}/>
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'}/>
            <div className="skillContainer">
                <SkillsSection skill={'Javascript'} progress={'70%'} width={'70%'}/>
                <SkillsSection skill={'React'} progress={'60%'} width={'60%'}/>
                <SkillsSection skill={'Angular'} progress={'50%'} width={'50%'}/>
                <SkillsSection skill={'C#'} progress={'50%'} width={'50%'}/>
                <SkillsSection skill={'HTML'} progress={'100%'} width={'100%'}/>
                <SkillsSection skill={'CSS'} progress={'100%'} width={'100%'}/>
                <SkillsSection skill={'Photoshop'} progress={'100%'} width={'100%'}/>
                <SkillsSection skill={'Illustrator'} progress={'70%'} width={'70%'}/>
                <SkillsSection skill={'Figma'} progress={'80%'} width={'80%'}/>
                <SkillsSection skill={'UX Design/Research'} progress={'90%'} width={'90%'}/>
            </div>
            <Tittle title={'Services'} span={'Services'}/>
            <div className="services-container">
                <ServicesSection image={design} title={'Web Design'} text={'Crafting mobile-first web experiences for e-commerce solutions and applying e-mail marketing best practices for the past 7 years.'} />
                <ServicesSection image={intelligence} title={'UX Research'} text={'Using state of the art design tools and research methodologies to transform quantitative & qualitative data into designs.'} />
                <ServicesSection image={gamedev} title={'Gamification'} text={'Having created a multitude of tech demos and even having releases on online stores, game development shaped my coding mindset.'} />
            </div>
        </div>
    )
}

export default AboutPage;
