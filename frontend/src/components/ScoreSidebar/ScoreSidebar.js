import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScoreSidebar.module.css';

const ScoreSidebar = () => (
  <div className={styles.ScoreSidebar}>
    ScoreSidebar Component
  </div>
);

ScoreSidebar.propTypes = {sentEmails: PropTypes.number, accounts: PropTypes.array, folders: PropTypes.array};

ScoreSidebar.defaultProps = {};

export default ScoreSidebar;
