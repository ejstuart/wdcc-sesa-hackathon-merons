import React from 'react';
import PropTypes from 'prop-types';
import styles from './EmailViewer.module.css';
import {Button} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const EmailViewer = (props) => (
  <div className={styles.EmailViewer}>

      <div className={styles.sender_head}>
          <div className={styles.circle}></div>

          <div className={styles.sender_info}>
              <Typography className={styles.email_text} variant={"h5"}>{props.email.senderName}</Typography>
              <Typography className={styles.email_text}>{props.email.senderEmail}</Typography>
          </div>
      </div>
      <div className={styles.email_body}>
          <Typography className={styles.email_text} paragraph>
              {props.email.emailBody}
          </Typography >

          <TextField variant={"outlined"} fullWidth multiline rows={3} disabled>

          </TextField>
          <div>
              <ButtonGroup variant="text" color="primary" style={{float: 'left'}}>
                  <Button><b>Bold</b></Button>
                  <Button><i>Italic</i></Button>
                  <Button><u>Underline</u></Button>
              </ButtonGroup>
              <Button style={{float: 'right'}} onClick={props.replyFunction}>Reply</Button>
          </div>

      </div>


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