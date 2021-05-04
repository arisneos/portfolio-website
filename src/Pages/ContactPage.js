import React from 'react';
import Tittle from '../Components/tittle';
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';


function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact Me'} span={'Contact Me'}/>
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100621.22950640314!2d23.668128103436963!3d37.99081633106556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1f067043f1%3A0x2736354576668ddd!2sAthens!5e0!3m2!1sen!2sgr!4v1619541788746!5m2!1sen!2sgr" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+30 6974131697'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'arisneos@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Pallini, Attiki, Athens'} text2={'Greece'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
