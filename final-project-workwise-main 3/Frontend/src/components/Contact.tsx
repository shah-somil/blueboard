import React, { useState, FormEvent } from 'react';

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the submission e.g., sending data to a backend server
    console.log(formData);
    alert('Form submitted');
  };

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Contact us for support and inquiries</p>
        </div>
        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>A108 Huntington Street, Boston, MA O2115</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@blueboard.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 857 123 4567</p>
              </div>
              <iframe title='maps' src="https://www.google.com/maps/embed?pb=" frameBorder="0" style={{ border:0, width: '100%', height: '290px' }} allowFullScreen></iframe>
            </div>
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required onChange={handleChange} />
                </div>
                <div className="form-group col-md-6 mt-3 mt-md-0">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required onChange={handleChange} />
                </div>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="subject">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required onChange={handleChange} />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" name="message" rows={10} required onChange={e => handleChange(e as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)}></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
