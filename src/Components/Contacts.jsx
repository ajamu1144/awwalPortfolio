import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { MdDriveFileRenameOutline, MdEmail } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";

const Contacts = () => {
    const navigate = useNavigate();
    const [errorLog, setErrorLog] = useState({
        name: '',
        number: '',
        email: '',
        note: ''
    });

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\d{10,15}$/;

    const [input, setInput] = useState({
        name: '',
        number: '',
        email: '',
        note: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = {};

        if (!input.name.trim()) {
            errors.name = 'A name is required to submit the form';
        }
        if (!input.number.trim() || isNaN(input.number) || !phoneRegex.test(input.number.trim())) {
            errors.number = 'A valid phone number is needed to submit the form';
        }
        if (!input.email.trim() || !emailRegex.test(input.email)) {
            errors.email = 'Please enter a valid email address';
        }
        if (!input.note.trim()) {
            errors.note = 'Please enter a message';
        }

        setErrorLog(errors);

        if (Object.keys(errors).length === 0) {
            window.alert('Form submitted successfully');
            console.log("Form submitted successfully:", input);
            navigate('/todo');
        }
    };

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-container">

                {/* Name */}
                <label>
                    <span className="form-label">
                        <MdDriveFileRenameOutline /> Name
                    </span>
                    <input
                        type="text"
                        name="name"
                        className="form-input"
                        value={input.name}
                        onChange={handleChange}
                    />
                </label>
                <p className="error">{errorLog.name}</p>

                {/* Number */}
                <label>
                    <span className="form-label">
                        <IoCall /> Number
                    </span>
                    <input
                        type="text"
                        name="number"
                        className="form-input"
                        value={input.number}
                        onChange={handleChange}
                    />
                </label>
                <p className="error">{errorLog.number}</p>

                {/* Email */}
                <label>
                    <span className="form-label">
                        <MdEmail /> Email
                    </span>
                    <input
                        type="text"
                        name="email"
                        className="form-input"
                        value={input.email}
                        onChange={handleChange}
                    />
                </label>
                <p className="error">{errorLog.email}</p>

                {/* Message */}
                <label>
                    <span className="form-label">
                        <FaRegMessage /> Message
                    </span>
                    <textarea
                        className="form-textarea"
                        rows="4"
                        name="note"
                        value={input.note}
                        onChange={handleChange}
                    ></textarea>
                </label>
                <p className="error">{errorLog.note}</p>

                {/* Submit */}
                <button type="submit" className="submit-btn">
                    Send Message
                </button>
            </div>
        </form>
    );
};

export default Contacts;
