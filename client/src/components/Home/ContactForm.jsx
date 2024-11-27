import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

 /** @type {[string | null, function]} */
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // Formspree API endpoint
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/meojzbga";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmissionStatus("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' }); // Reset form after success
      } else {
        setSubmissionStatus("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmissionStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-col">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-3xl font-bold text-center mb-12 text-[#FFD700]"
        >
          Get in Touch
        </motion.h2>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6 flex flex-col justify-center items-center"
          >
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#D4AF37]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 flex w-72 rounded-md bg-[#1d1b1b] text-white"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#D4AF37]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 block w-72 rounded-md bg-[#1d1b1b] text-white"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#D4AF37]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-1 block w-72 rounded-md bg-[#1d1b1b] text-white"
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium bg-[#D4AF37] text-black"
            >
              <Send className="w-4 h-4 mr-2 text-black" />
              Send Message
            </motion.button>
          </motion.form>
        </div>

        {/* Displaying submission status message */}
        {submissionStatus && (
          <p className={`text-center mt-4 ${submissionStatus.includes("success") ? "text-green-500" : "text-red-500"}`}>
            {submissionStatus}
          </p>
        )}
    </section>
  );
}
