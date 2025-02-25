import React from 'react';
import '../styles/Privacy.css';

const PrivacyPolicy = () => {
    return (
        <div className="cloud-privacy-container">
            <h1 className="cloud-privacy-title">Privacy Policy</h1>
            <p className="cloud-privacy-text"><strong className="cloud-privacy-strong">Effective Date:</strong> [Insert Date]</p>
            <p className="cloud-privacy-text">
                Welcome to Cloud Connect. Your privacy is important to us, 
                and this Privacy Policy explains how we collect, use, and protect your information 
                when you use our chat website page ("Service").
            </p>

            <h2 className="cloud-privacy-heading">1. Information We Collect</h2>
            <ul className="cloud-privacy-list">
                <li><strong className="cloud-privacy-strong">Personal Information:</strong> We may collect details such as your name, email address, and other identifying information.</li>
                <li><strong className="cloud-privacy-strong">Chat Data:</strong> Messages and content shared through our chat feature.</li>
                <li><strong className="cloud-privacy-strong">Technical Data:</strong> Your IP address, browser type, device information, and usage patterns.</li>
                <li><strong className="cloud-privacy-strong">Cookies and Tracking Technologies:</strong> We may use cookies to enhance your experience.</li>
            </ul>

            <h2 className="cloud-privacy-heading">2. How We Use Your Information</h2>
            <ul className="cloud-privacy-list">
                <li>Provide, maintain, and improve our Service.</li>
                <li>Ensure a secure and safe environment.</li>
                <li>Communicate with you regarding updates and support.</li>
                <li>Analyze user activity to enhance functionality.</li>
                <li>Comply with legal obligations.</li>
            </ul>

            <h2 className="cloud-privacy-heading">3. Sharing of Information</h2>
            <ul className="cloud-privacy-list">
                <li><strong className="cloud-privacy-strong">Service Providers:</strong> With third-party vendors assisting in Service operation.</li>
                <li><strong className="cloud-privacy-strong">Legal Compliance:</strong> When required by law or to protect our rights.</li>
                <li><strong className="cloud-privacy-strong">Business Transfers:</strong> In case of a merger, acquisition, or sale of assets.</li>
            </ul>

            <h2 className="cloud-privacy-heading">4. Data Security</h2>
            <p className="cloud-privacy-text">
                We implement security measures to protect your data, but no method of transmission over 
                the internet is 100% secure. You are responsible for maintaining the confidentiality of your account.
            </p>

            <h2 className="cloud-privacy-heading">5. Your Rights and Choices</h2>
            <ul className="cloud-privacy-list">
                <li>Accessing, correcting, or deleting your information.</li>
                <li>Opting out of certain data collection practices.</li>
                <li>Disabling cookies in your browser settings.</li>
            </ul>

            <h2 className="cloud-privacy-heading">6. Third-Party Links</h2>
            <p className="cloud-privacy-text">
                Our Service may contain links to third-party sites. We are not responsible for their privacy policies or content.
            </p>

            <h2 className="cloud-privacy-heading">7. Changes to This Privacy Policy</h2>
            <p className="cloud-privacy-text">
                We may update this policy from time to time. The latest version will always be posted on our website.
            </p>

            <h2 className="cloud-privacy-heading">8. Contact Us</h2>
            <p className="cloud-privacy-text">
                If you have any questions about this Privacy Policy, please contact us at mannan.puri0052@gmail.com.
            </p>
        </div>
    );
};

export default PrivacyPolicy;
