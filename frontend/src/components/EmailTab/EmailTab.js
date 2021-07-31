import React from 'react';
import PropTypes from 'prop-types';
import './EmailTab.css';

const EmailTab = () => (
  <div className="EmailTab">
    EmailTab Component
  </div>
);

EmailTab.propTypes = {
    emailTitle: PropTypes.string,
    emailBody: PropTypes.string,
    senderName: PropTypes.string,
    senderEmail: PropTypes.string
};

EmailTab.defaultProps = {"DEFAULT_EMAIL_TITLE": PropTypes.string, "DEFAULT_EMAIL_NAME": PropTypes.string, "DEFAULT_SENDER_NAME": PropTypes.string, "DEFAULT_SENDER_EMAIL": PropTypes.string};

export default EmailTab;
