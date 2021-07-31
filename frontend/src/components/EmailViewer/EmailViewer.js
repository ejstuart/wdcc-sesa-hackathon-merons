import React from 'react';
import PropTypes from 'prop-types';
import styles from './EmailViewer.module.css';

const EmailViewer = () => (
  <div className={styles.EmailViewer}>
    EmailViewer Component
  </div>
);

EmailViewer.propTypes = {email:PropTypes.};

EmailViewer.defaultProps = {};

export default EmailViewer;
