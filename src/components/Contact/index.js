import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');


    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement

            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`A ${e.target.name} is required in order to submit.`);
            } else {
              setErrorMessage('');
            }
          }

          console.log('errorMessage', errorMessage);
        setFormState({ ...formState, [e.target.name]: e.target.value })
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }

    }

    // console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }


    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="contact-form-label"></label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" size="45" className="contact-labels" placeholder="Please enter your name."/>
                </div>
                <div>
                    <label htmlFor="email" className="contact-form-label" size="45"></label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" size="45" className="contact-labels" placeholder="Please enter your email."/>
                </div>
                <div>
                    <label htmlFor="message" className="contact-form-label" ></label>

                    

                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" className="contact-labels" placeholder="Please enter a message." />

                    {errorMessage && (
  <div>
    <p className="error-text">{errorMessage}</p>
  </div>
)}
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );



}

export default ContactForm;