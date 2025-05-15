import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const ConsultationRequestSectionDE = () => {
  const { toast } = useToast();
  // This is a placeholder implementation since the original file wasn't provided
  // You should replace this with your actual implementation while keeping the toast usage

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Your form submission logic here
      
      // On success
      handleSuccess();
    } catch (error) {
      console.error("Error submitting form:", error);
      handleError();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSuccess = () => {
    toast({
      title: "Erfolg",
      description: "Ihre Beratungsanfrage wurde übermittelt",
      className: "bg-[#004d51] text-white border-[#006064]",
    });
    
    // Redirect after successful submission
    setTimeout(() => {
      window.location.href = "/danke";
    }, 1000);
  };

  const handleError = () => {
    toast({
      title: "Fehler",
      description: "Bei der Übermittlung Ihrer Anfrage ist ein Problem aufgetreten",
      variant: "destructive",
    });
  };
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Beratungsgespräch anfordern</h2>
          <p className="text-lg text-gray-600">
            Füllen Sie das Formular aus, und wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">E-Mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-1">Nachricht</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-primary text-white py-2 px-4 rounded-md hover:bg-brand-primary/90 transition-colors"
            >
              {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationRequestSectionDE;
