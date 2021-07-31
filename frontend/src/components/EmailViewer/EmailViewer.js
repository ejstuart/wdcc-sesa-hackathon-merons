import React from 'react';
import PropTypes from 'prop-types';
import styles from './EmailViewer.module.css';

const EmailViewer = () => (
  <div className={styles.EmailViewer}>
    EmailViewer Component
  </div>
);

EmailViewer.propTypes = {
    email:PropTypes.shape({
        emailTitle: PropTypes.string,
        emailBody: PropTypes.string,
        senderName: PropTypes.string,
        senderEmail: PropTypes.string
    }),
    replyFunction:PropTypes.function
};

EmailViewer.defaultProps = {};

export default EmailViewer;
