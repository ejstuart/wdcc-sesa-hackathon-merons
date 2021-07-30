import React from 'react';
import PropTypes from 'prop-types';
import './EmailTab.css';

const EmailTab = (props) => (
    <div className="EmailTab">
        <h4>{props.email.emailTitle}</h4>
        <p>{props.email.emailBody}</p>
    </div>
);

EmailTab.propTypes = {
    email:PropTypes.shape({
        emailTitle: PropTypes.string,
        emailBody: PropTypes.string,
        senderName: PropTypes.string,
        senderImageURL: PropTypes.string,
        senderEmail: PropTypes.string
    })};

EmailTab.defaultProps = {"DEFAULT_EMAIL_TITLE": PropTypes.string, "DEFAULT_EMAIL_NAME": PropTypes.string, "DEFAULT_SENDER_NAME": PropTypes.string, "resources/face1.jpg": PropTypes.string, "DEFAULT_SENDER_EMAIL": PropTypes.string};

export default EmailTab;
