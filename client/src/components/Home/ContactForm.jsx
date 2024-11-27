import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
    console.log(formData);
  };

  return (
    <section 
      id="contact" 
      className="bg-[#121212] text-[#F5F5F5] py-16 px-4"
    >
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl text-center mb-8 text-[#D4AF37]">
          Contact Us
        </h2>
        <form 
          onSubmit={handleSubmit} 
          className="space-y-6 bg-[#1E1E1E] p-8 rounded-2xl shadow-lg"
        >
          <div>
            <label 
              htmlFor="name" 
              className="block mb-2 text-[#D4AF37]"
            >
              Name
            </label>
            <input 
              type="text" 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#121212] border border-[#D4AF37] rounded-lg text-white"
            />
          </div>
          <div>
            <label 
              htmlFor="email" 
              className="block mb-2 text-[#D4AF37]"
            >
              Email
            </label>
            <input 
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#121212] border border-[#D4AF37] rounded-lg text-white"
            />
          </div>
          <div>
            <label 
              htmlFor="message" 
              className="block mb-2 text-[#D4AF37]"
            >
              Message
            </label>
            <textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#121212] border border-[#D4AF37] rounded-lg text-white h-32"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#D4AF37] text-[#121212] py-3 rounded-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;