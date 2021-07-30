import React from 'react';
import PropTypes from 'prop-types';
import styles from './SettingsTab.module.css';
import {Button} from "@material-ui/core";

const SettingsTab = (props) => (
  <div className={styles.SettingsTab}>
      <h3>Settings</h3>
    <div className={styles.FlexContainer}>
        <Button variant="contained" className={styles.FlexItem} onClick={props.buyFolderFunction}>Buy Folder</Button>
        <p className={styles.FlexItem}></p>
        <Button variant="contained" className={styles.FlexItem} onClick={props.buyAccountFunction}>Buy Account</Button>
    </div>
  </div>
);

SettingsTab.propTypes = {buyFolderFunction: PropTypes.func, buyAccountFunction: PropTypes.func};

SettingsTab.defaultProps = {};

export default SettingsTab;
