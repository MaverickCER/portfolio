import React, {useEffect, useRef, useState} from "react";

import { ReactComponent as Fiverr } from '../assets/icons/fiverr.svg';
import { ReactComponent as LinkedIn } from '../assets/icons/linkedin.svg';
import { ReactComponent as Twitter } from '../assets/icons/twitter.svg';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";

const contactList = [
  {
    icon: <Fiverr />,
    name: 'Fiverr',
    link: 'https://www.fiverr.com/maverickcer_',
  },
  {
    icon: <LinkedIn />,
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/maverickmanasco/',
  },
  {
    icon: <Twitter />,
    name: 'Twitter',
    link: 'https://twitter.com/MaverickCER',
  },
];

const Contact = () => {
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showSubmit, setShowSubmit] = useState(true);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    setShowSubmit(false);
    console.log('Message submited: ', data);
    emailjs
      .sendForm(
        'service_hunc5i5',
        'template_02g4929',
        formRef.current,
        'user_9jLdO8H26hYMcdiuTRjOZ'
      )
      .then(() => {
        reset();
        localStorage.setItem('emailsent', 'true');
        setIsLoading(false);
      }
      );
  };

  useEffect(() => {
    let emailSent = localStorage.getItem('emailsent');
    if (emailSent) {
      setIsLoading(false);
      setShowSubmit(false);
    }
  }, [])

  return (
    <div className="container">
      <div className="contact_inner">
        <div className="left" data-aos="fade-right" data-aos-duration="1200">
          <div className="title_holder">
            <span>Contact</span>
            <h2>Let's discuss your project</h2>
          </div>
          <div className="short_list">
            <ul>
              {contactList.map((val, i) => (
                <li key={i}>
                  <a href={val.link} target="_blank" rel="noreferrer">
                    {val.icon}&nbsp;{val.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="right" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="150">
          <div className="title">
            <p>
              I'm always interested to hear about <strong>how I can be of service.</strong>
            </p>
          </div>
          <div className="fields">
            <form className="contact_form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
              <div className="info">
                <div className="left">
                  <input
                    {...register('name', { required: true })}
                    type="text"
                    placeholder="Name *"
                  />
                  {errors.name && errors.name.type === 'required' && (
                    <span className="invalid-feedback">Name is required</span>
                  )}
                </div>
                <div className="right">
                  <input
                    {...register(
                      'email',
                      {
                        required: 'Email is Required',
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: 'Entered value does not match email format',
                        },
                      },
                      { required: true }
                    )}
                    type="email"
                    placeholder="Email *"
                  />
                  {errors.email && <span className="invalid-feedback">{errors.email.message}</span>}
                </div>
              </div>

              <div className="message">
                <textarea
                  {...register('message', { required: true })}
                  placeholder="Message *"></textarea>
                {errors.message && <span className="invalid-feedback">Message is required.</span>}
              </div>

              <div className="button">
                <button type={showSubmit ? 'submit' : 'button'} className="color">
                  <span className="wrapper">
                    <span className="first">{showSubmit ? 'Submit' : isLoading ? 'Sending...' : 'Thank you!'}</span>
                    <span className="second">{showSubmit ? 'Submit' : isLoading ? 'Sending...' : 'Thank you!'}</span>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
