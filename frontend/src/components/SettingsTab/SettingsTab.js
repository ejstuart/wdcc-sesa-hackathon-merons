import React from 'react';
import PropTypes from 'prop-types';
import styles from './SettingsTab.module.css';

const SettingsTab = () => (
  <div className={styles.SettingsTab}>
    SettingsTab Component
  </div>
);

SettingsTab.propTypes = {buyFolderFunction: PropTypes.func, buyAccountFunction: PropTypes.func};

SettingsTab.defaultProps = {};

export default SettingsTab;
