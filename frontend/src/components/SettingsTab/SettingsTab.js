import React from 'react';
import PropTypes from 'prop-types';
import styles from './SettingsTab.module.css';

const SettingsTab = () => (
  <div className={styles.SettingsTab}>
    SettingsTab Component
  </div>
);

SettingsTab.propTypes = {buyFolderFunction: PropTypes.function, buyAccountFunction: PropTypes.function};

SettingsTab.defaultProps = {};

export default SettingsTab;
