import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Select } from 'antd';
import './EnquiryForm.css';

const { Option } = Select;

function EnquiryForm({ show, handleClose }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        date: '',
        eventtype: '',
        comments: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSelectChange = (value) => {
        setFormData({
            ...formData,
            eventtype: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/enquiries', formData)
            .then(response => {
                console.log('Enquiry submitted successfully:', response.data);
                handleClose();
            })
            .catch(error => {
                console.error('There was an error submitting the enquiry:', error);
            });
    };

    if (!show) {
        return null;
    }

    return (
        <Modal
            visible={show}
            onCancel={handleClose}
            width={570}
            footer={null}
        >
            <h1 className='Enquiry-h1'>Event Enquiry Form</h1>
            <form onSubmit={handleSubmit}>
                <div className=''>
                    <p className='Enquiry-p'>Simply fill in the form below and one of our team will get back to you.</p>
                    <label className='label'>Your Name</label>
                    <div className='name'>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First"
                            value={formData.firstName}
                            onChange={handleChange}
                            className='Inquiry-Form-Input'
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last"
                            value={formData.lastName}
                            onChange={handleChange}
                            className='Inquiry-Form-Input'
                            required
                        />
                    </div>

                    <label className='label'>Your Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className='Inquiry-Form-Input'
                        required
                    /><br />

                    <label className='label'>Your Phone Number</label>
                    <input
                        type="text"
                        name="contactNumber"
                        placeholder='### ### ####'
                        value={formData.contactNumber}
                        onChange={handleChange}
                        className='Inquiry-Form-Input'
                        required
                    /><br />

                    <label className='label'>The Event Date</label>
                    <input
                        type='date'
                        name='date'
                        placeholder=''
                        value={formData.date}
                        onChange={handleChange}
                        className='Inquiry-Form-Input'
                        required
                    /><br />

                    <label className='label' style={{ marginBottom: '10px' }}>Event Type</label>
                    <Select
                        name="eventtype"
                        className="InputFieldDropdown"
                        placeholder="Select Event Type"
                        style={{ width: '100%' }}
                        value={formData.eventtype}
                        onChange={handleSelectChange}
                        required
                    >
                        <Option style={{ color: '#BF9A33' }} disabled defaultValue>Please sSelect One</Option>
                        <Option value="Morning Events">Morning Events</Option>
                        <Option value="Afternoon Events">Afternoon Events</Option>
                        <Option value="Evening Events">Evening Events</Option>
                        <Option value="Night Events">Night Events</Option>
                    </Select><br />

                    <label className='label'>Comments</label><br />
                    <textarea
                        type='text'
                        name='comments'
                        placeholder='Type Here...'
                        value={formData.comments}
                        onChange={handleChange}
                        className='Inquiry-Form-Textarea'
                    /><br />

                </div>
                <button type="submit" className="enquiry-btn">Submit</button>
            </form>
        </Modal>
    );
}

export default EnquiryForm;
