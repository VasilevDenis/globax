import './card.css';
import phoneImage from './images/phone.png';
import emailImage from './images/email.png';

const Card = ( { name, phone, email }) => {
    return (
        <div className='card'>
            <h2>{name}</h2>
            <div className='phone-email'>
                <div className='icon-text'>
                    <div className='icon'>
                        <img src={phoneImage} alt='phone' width='14' height='24'/>
                    </div>
                    <div className='text'>{phone}</div>
                </div>
                <div className='icon-text'>
                    <div className='icon'>
                        <img src={emailImage} alt='email' width='24' height='24'/>
                    </div>
                    <div className='text'>{email}</div>
                </div>
            </div>
        </div>
    );
};

export default Card;
