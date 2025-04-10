import React, { useState } from 'react';
import { Supabase } from '../config/supabase-config';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }

    setLoading(true);

    const { data, error } = await Supabase
      .from('rachel')
      .insert([{ name, email, message }]);

    if (error) {
      console.error('Submission error:', error);
      setError('Something went wrong. Please try again.');
      setLoading(false);
    } else {
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setError('');
      setLoading(false);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    }
  };

  return (
    <div className='contact' id='contacts'>
      <div className="dk">
        <div className="cont-c">
          <h3>Let’s Get In touch</h3>
          <form className='c-form' onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
              type="text"
              name="name"
              placeholder='Full name'
              value={formData.name}
              onChange={handleChange}
              style={{ color: '#fff' }}
            />
            <input
              type="email"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              style={{ color: '#fff' }}
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder='Type Message'
              value={formData.message}
              onChange={handleChange}
              style={{ color: '#fff' }}
            />
            <button
              type="submit"
              style={{ cursor: 'pointer' }}
              disabled={loading || success}
            >
              {loading ? 'Sending...' : success ? 'Done!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
