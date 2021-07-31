import React from 'react';
import PropTypes from 'prop-types';
import styles from './EmailTabContainer.module.css';
import EmailTab from "../EmailTab/EmailTab";
import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const emailList = () => (
    <List>
        {['Sent', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        ))}
    </List>
);

const EmailTabContainer = () => (
  <div className={styles.EmailTabContainer}>
      EmailTabContainer Component
  </div>
);

EmailTabContainer.propTypes = {emailTabArray: PropTypes.arrayOf(PropTypes.shape({
        emailTitle: PropTypes.string,
        emailBody: PropTypes.string,
        senderName: PropTypes.string,
        senderEmail: PropTypes.string
    }))
};

EmailTabContainer.defaultProps = {};

export default EmailTabContainer;
