import React from 'react';
import PropTypes from 'prop-types';
import styles from './EmailTabContainer.module.css';
import EmailTab from "../EmailTab/EmailTab";

const EmailTabContainer = () => {
    <div className={styles.EmailTabContainer}>
        EmailTabContainer Component
    </div>
};

EmailTabContainer.propTypes = {emailTabArray: PropTypes.arrayOf(PropTypes.shape({
        emailTitle: PropTypes.string,
        emailBody: PropTypes.string,
        senderName: PropTypes.string,
        senderEmail: PropTypes.string
    }))};

EmailTabContainer.defaultProps = {};

export default EmailTabContainer;
