import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScoreSidebar.module.css';
import {Drawer, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const menuList = () => (
    <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        ))}
    </List>
);

const ScoreSidebar = () => (
  <div className={styles.ScoreSidebar}>
      <Drawer anchor={"left"} open={true} variant={"permanent"}>
          {menuList()}
      </Drawer>
  </div>
);

ScoreSidebar.propTypes = {};

ScoreSidebar.defaultProps = {};

export default ScoreSidebar;
