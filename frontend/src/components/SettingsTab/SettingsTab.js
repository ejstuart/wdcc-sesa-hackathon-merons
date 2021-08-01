import React from 'react';
import PropTypes from 'prop-types';
import styles from './SettingsTab.module.css';
import {Button} from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';

const SettingsTab = (props) => (
  <div className={styles.SettingsTab}>
      <div className={styles.flexRow}>
          <SettingsIcon style={Object.assign({}, {fill: "dimgray"}, {height: "70px"}, {width: "70px"}, {'margin-right': "2vw"})}/>
          <h1>Settings</h1>
      </div>

      <div className={styles.flexRow}>
          <div className={styles.FlexContainer}>
              <div className={styles.flexRow}>
                  <p style={{'margin-right': "100px"}}>Add folder</p>
                  <Button variant="contained" onClick={props.buyFolderFunction}><AddIcon/></Button>
              </div>
              <div className={styles.flexRow}>
                  <p style={{'margin-right': "86px"}}>Add account</p>
                  <Button variant="contained" onClick={props.buyAccountFunction}><AddIcon/></Button>
              </div>
          </div>

          <div className={styles.FlexContainer}>
              <div className={styles.flexRow}>
                  <p style={{'margin-right': "100px"}}>Add coffee</p>
                  <Button variant="contained"><AddIcon/></Button>
              </div>
              <div className={styles.flexRow}>
                  <p style={{'margin-right': "107px"}}>Add sleep</p>
                  <Button variant="contained"><AddIcon/></Button>
              </div>
          </div>
      </div>
  </div>
);

SettingsTab.propTypes = {buyFolderFunction: PropTypes.func, buyAccountFunction: PropTypes.func};

SettingsTab.defaultProps = {};

export default SettingsTab;
