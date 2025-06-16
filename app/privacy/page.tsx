// app/privacy/page.tsx or components/PrivacyPolicy.tsx
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: June 12, 2025</p>

      <p className="mb-4">
        This Privacy Policy explains how NQ Designs Pvt Ltd collects, uses, and protects your information when you use our website <a href="https://nqdesigns.co" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">nqdesigns.co</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. What We Collect</h2>
      <p className="mb-4">
        We collect information through contact forms, including:
        <ul className="list-disc list-inside ml-4">
          <li>Name</li>
          <li>Phone Number</li>
          <li>Project Type</li>
          <li>Location</li>
          <li>Budget</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use the collected data to:
        <ul className="list-disc list-inside ml-4">
          <li>Respond to inquiries and provide consultations</li>
          <li>Improve our services and website</li>
          <li>Contact you regarding your project</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Data Security</h2>
      <p className="mb-4">
        We implement appropriate measures to protect your personal information but cannot guarantee 100% security over the internet.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
      <p className="mb-4">
        We use third-party services like Cloudinary for media, and may integrate Google Analytics. These tools may collect data according to their own privacy policies.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You can request access to or deletion of your personal data by contacting us at designsnq@gmail.com.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Updates to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy occasionally. Please review this page regularly.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contact</h2>
      <p className="mb-1">Email: designsnq@gmail.com</p>
      <p className="mb-1">Phone: 8853008603</p>
      <p>Address: Near Ekana Stadium, Gomti Nagar, Lucknow, Uttar Pradesh, India</p>
    </div>
  );
};

export default PrivacyPolicy;
