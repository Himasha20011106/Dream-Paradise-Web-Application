import React, { useState } from 'react';
import axios from 'axios';
import './WeddingEnquiryForm.css';
import { Modal } from 'antd';

function WeddingEnquiryForm({ show, handleClose }) {
    const [formData, setFormData] = useState({
        brideName: '',
        groomName: '',
        email: '',
        contactNumber: '',
        weddingDate: '',
        guests: '',
        venuePreference: '',
        ceremonyType: '',
        reception: '',
        catering: '',
        comments: '',
        theme: '',
        photography: '',
        budget: '',
        services: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData(prevState => ({
                ...prevState,
                services: checked
                    ? [...prevState.services, value]
                    : prevState.services.filter(service => service !== value)
            }));
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSelectChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
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
        <div>
            <Modal
                visible={show}
                onCancel={handleClose}
                width={600}
                footer={null}
            >
                <h1 className='Enquiry-h1'>Wedding Ceremony Enquiry Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className='wedding-flex-names'>
                        <div className='wedding-flex-bridename'>
                            <label>Bride's Name</label><br />
                            <input type="text" className='Wedding-Inquiry-Form-Input' name="brideName" value={formData.brideName} onChange={handleChange} required /><br />
                        </div>

                        <div className='wedding-flex-groomname'>
                            <label>Groom's Name</label><br />
                            <input type="text" className='Wedding-Inquiry-Form-Input' name="groomName" value={formData.groomName} onChange={handleChange} required /><br />
                        </div>
                    </div>

                    <label>Contact Number</label>
                    <input type="tel" className='Wedding-Inquiry-Form-Input' name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />

                    <label>Email Address</label>
                    <input type="email" className='Wedding-Inquiry-Form-Input' name="email" value={formData.email} onChange={handleChange} required />

                    <label>Preferred Wedding Date</label>
                    <input type="date" className='Wedding-Inquiry-Form-Input' name="weddingDate" value={formData.weddingDate} onChange={handleChange} required />

                    <label>Number of Guests</label>
                    <input type="number" className='Wedding-Inquiry-Form-Input' name="guests" value={formData.guests} onChange={handleChange} required />

                    <label>Venue Preference</label>
                    <select name="venuePreference" className="InputFieldDropdownVenue" value={formData.venuePreference} onChange={e => handleSelectChange('venuePreference', e.target.value)} required>
                        <option value="" style={{ color: '#BF9A33' }} disabled>Select Venue</option>
                        <optgroup label="Grand Ballroom">
                            <option value="Grand Ballroom - Main Hall">Main Hall</option>
                            <option value="Grand Ballroom - Upper Balcony">Upper Balcony</option>
                            <option value="Grand Ballroom - Private VIP Section">Private VIP Section</option>
                        </optgroup>
                        <optgroup label="Intimate Dining Room">
                            <option value="Intimate Dining Room - Private Dining Area">Private Dining Area</option>
                            <option value="Intimate Dining Room - Wine Cellar Room">Wine Cellar Room</option>
                            <option value="Intimate Dining Room - Chef's Table Area">Chef's Table Area</option>
                        </optgroup>
                    </select>

                    <div className='wedding-flex'>
                        <div>
                            <label>Type of Ceremony</label><br />
                            <select 
                                name="ceremonyType" 
                                className="InputFieldDropdownItem"
                                placeholder="Select Type of Ceremony" 
                                style={{ width: '100%' }}
                                value={formData.ceremonyType}
                                onChange={e => handleSelectChange('ceremonyType', e.target.value)}
                                required
                            >
                                <option value="" style={{ color: '#BF9A33' }} disabled>Please Select One</option>
                                <option value="Religious">Religious</option>
                                <option value="Civil">Civil</option>
                                <option value="Themed">Themed</option>
                            </select><br />
                        </div>

                        <div>
                            <label>Reception Requirement</label><br />
                            <select 
                                name="reception"
                                className="InputFieldDropdownItem"
                                placeholder="Select Your Choice" 
                                style={{ width: '100%' }}
                                value={formData.reception}
                                onChange={e => handleSelectChange('reception', e.target.value)}
                                required
                            >
                                <option value="" style={{ color: '#BF9A33' }} disabled>Please Select One</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div>
                            <label>Catering Preference</label><br />
                            <select 
                                name="catering" 
                                className="InputFieldDropdownItem"
                                placeholder="Select Catering Preference Type" 
                                style={{ width: '100%' }}
                                value={formData.catering}
                                onChange={e => handleSelectChange('catering', e.target.value)}
                                required
                            >
                                <option value="" style={{ color: '#BF9A33' }} disabled>Please Select One</option>
                                <option value="Buffet">Buffet</option>
                                <option value="Plated">Plated</option>
                                <option value="Cocktail">Cocktail</option>
                            </select>
                        </div>
                    </div>

                    <label>Special Requests or Comments</label>
                    <textarea type='text' name="comments" className='Inquiry-Form-Textarea' placeholder='Type Here...' value={formData.comments} onChange={handleChange}></textarea>

                    <div className='wedding-flex'>
                        <div>
                            <label>Wedding Theme</label><br />
                            <select 
                                name="theme"
                                className="InputFieldDropdownItem"
                                placeholder="Select Wedding Theme Type" 
                                style={{ width: '100%' }}
                                value={formData.theme}
                                onChange={e => handleSelectChange('theme', e.target.value)}
                                required
                            >
                                <option value="" style={{ color: '#BF9A33' }} disabled>Please Select One</option>
                                <option value="Rustic">Rustic</option>
                                <option value="Elegant">Elegant</option>
                                <option value="Beach">Beach</option>
                            </select><br />
                        </div>

                        <div>
                            <label>Photography/Videography Requirement</label><br />
                            <select 
                                name="photography" 
                                className="InputFieldDropdownItem"
                                placeholder="Select Your Choice" 
                                style={{ width: '100%' }}
                                value={formData.photography}
                                onChange={e => handleSelectChange('photography', e.target.value)}
                                required
                            >
                                <option value="" style={{ color: '#BF9A33' }} disabled>Please Select One</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select><br />
                        </div>
                    </div>

                    <label>Budget Range</label>
                    <input type="text" className='Wedding-Inquiry-Form-Input' name="budget" value={formData.budget} onChange={handleChange} required />

                    <label>Additional Services</label>
                    <div>
                        <input type="checkbox" name="services" value="DJ" onChange={handleChange}/> DJ
                        <input type="checkbox" name="services" value="Live Band" onChange={handleChange}/> Live Band
                        <input type="checkbox" name="services" value="Decorations" onChange={handleChange}/> Decorations
                    </div><br />

                    <button type="submit">Submit</button>
                </form>
            </Modal>
        </div>
    )
}

export default WeddingEnquiryForm;
