import React from 'react';
import PropTypes from 'prop-types';
import styles from './EmailViewer.module.css';
import {Button} from "@material-ui/core";

const EmailViewer = (props) => (
  <div className={styles.EmailViewer}>
    EmailViewer Component
      <Button variant="contained" onClick={props.replyFunction}>Reply</Button>
  </div>
);

EmailViewer.propTypes = {
    email:PropTypes.shape({
        emailTitle: PropTypes.string,
        emailBody: PropTypes.string,
        senderName: PropTypes.string,
        senderImageURL: PropTypes.string,
        senderEmail: PropTypes.string
    }),
    replyFunction:PropTypes.func
};

EmailViewer.defaultProps = {};

export default EmailViewer;
