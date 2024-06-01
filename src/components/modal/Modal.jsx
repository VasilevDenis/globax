import { useRef, useEffect } from 'react';
import './modal.css';

const Modal = ({ name, phone, email, date, jobTitle, department, info, onClose }) => {
    const modalRef = useRef();

    const handleCloseModal = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleCloseModal);
        return () => {
            document.removeEventListener('mousedown', handleCloseModal);
        };
    }, []);

    return (
        <div className='modal'>
            <div ref={modalRef} className='modal-content'>
                <div className='title-close'>
                    <div className='title'>{name}</div>
                    <div className='close' onClick={onClose}>&times;</div>
                </div>
                <div className='data'>
                    <div className='keys'>
                        <span className='key'>Телефон:</span>
                        <span className='key'>Почта:</span>
                        <span className='key'>Дата приёма:</span>
                        <span className='key'>Должность:</span>
                        <span className='key'>Подразделение:</span>
                    </div>
                    <div className='values'>
                        <span className='value'>{phone}</span>
                        <span className='value'>{email}</span>
                        <span className='value'>{date}</span>
                        <span className='value'>{jobTitle}</span>
                        <span className='value'>{department}</span>
                    </div>
                </div>
                <div className='additional-info'>
                    <div className='key'>Дополнительная информация:</div>
                    <div className='value'>{info}</div>
                </div>
            </div>
            <div className='modal-backdrop' onClick={onClose}></div>
        </div>
    );
};

export default Modal;
