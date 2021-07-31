import React from 'react';
import PropTypes from 'prop-types';
import styles from './EmailTabContainer.module.css';
import EmailTab from "../EmailTab/EmailTab";

const EmailTabContainer = () => (
  <div className={styles.EmailTabContainer}>
    EmailTabContainer Component
  </div>
);

EmailTabContainer.propTypes = {emailTabList: PropTypes.array};

EmailTabContainer.defaultProps = {};

export default EmailTabContainer;
