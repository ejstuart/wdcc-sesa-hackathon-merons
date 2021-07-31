import React from 'react';
import PropTypes from 'prop-types';
import styles from './EmailTab.module.css';

const EmailTab = (props) => (
    <div className="EmailTab">
        <div className={styles.emailBox}>
            <div className={styles.circle}>
                <img src={props.email.senderImageURL} className={styles.circle}/>
            </div>
            <div className={styles.senderInfo}>
                <h4 className={styles.tabText}>{props.email.emailTitle}</h4>
                <p className={styles.tabText}>{props.email.emailBody}</p>
            </div>
        </div>
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

EmailTab.defaultProps = {};

export default EmailTab;
