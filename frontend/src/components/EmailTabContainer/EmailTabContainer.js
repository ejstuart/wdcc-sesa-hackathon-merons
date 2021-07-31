import React from 'react';
import PropTypes from 'prop-types';
import styles from './EmailTabContainer.module.css';
import EmailTab from "../EmailTab/EmailTab";
import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";



const EmailTabContainer = (props) => (
  <div className={styles.EmailTabContainer}>
      <p>Inbox</p>
      <EmailTab email={props.emailTabInfoArray[0]} className={styles.EmailTab}/>
      <EmailTab email={props.emailTabInfoArray[1]} className={styles.EmailTab}/>
      <EmailTab email={props.emailTabInfoArray[2]} className={styles.EmailTab}/>
      <EmailTab email={props.emailTabInfoArray[3]} className={styles.EmailTab}/>
      <EmailTab email={props.emailTabInfoArray[4]} className={styles.EmailTab}/>
      <EmailTab email={props.emailTabInfoArray[5]} className={styles.EmailTab}/>
      <EmailTab email={props.emailTabInfoArray[6]} className={styles.EmailTab}/>
      <EmailTab email={props.emailTabInfoArray[7]} className={styles.EmailTab}/>
      <EmailTab email={props.emailTabInfoArray[8]} className={styles.EmailTab}/>
      <EmailTab email={props.emailTabInfoArray[9]} className={styles.EmailTab}/>

  </div>
);

EmailTabContainer.propTypes = {emailTabInfoArray: PropTypes.arrayOf(PropTypes.shape({
        emailTitle: PropTypes.string,
        emailBody: PropTypes.string,
        senderName: PropTypes.string,
        senderImageURL: PropTypes.string,
        senderEmail: PropTypes.string
    }))
};

EmailTabContainer.defaultProps = {};

export default EmailTabContainer;
