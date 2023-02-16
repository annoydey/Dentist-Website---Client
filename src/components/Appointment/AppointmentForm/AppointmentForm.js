import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";


const customStyles = {
    content: {
        width: '50%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        closeModal();
    }
    return (
        <div className='appointmentmodal'>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='text-center text-primary'>{appointmentOn}</h2>
                    <h5 className='text-center text-normal'>{date.toDateString()}</h5>
                    <div class="form-group mb-3">
                        <input type="text" id="form12" class="form-control" placeholder='Your name'/>
                    </div>
                    <div class="form-group mb-3">
                        <input type="text" id="form12" class="form-control" placeholder='Phone Number'/>
                    </div>
                    <div class="form-group mb-3">
                        <input type="text" id="form12" class="form-control" placeholder='Email'/>
                    </div>
                    <div class="form-group mb-3">
                        <input type="text" id="form12" class="form-control" placeholder='Age'/>
                    </div>
                    <div class="form-group mb-3">
                        <input type="text" id="form12" class="form-control" placeholder='Gender'/>
                    </div>
                    <button type="submit" className='btn btn-success' onClick={closeModal}>Send</button>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;