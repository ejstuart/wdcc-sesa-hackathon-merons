import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScoreSidebar.module.css';
import {Drawer, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const menuList = () => (
    <List>
        {['Sent', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text} className={styles.menuItem}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        ))}
    </List>
);

const ScoreSidebar = () => (
    <Drawer anchor={"left"} open={true} variant={"permanent"}>
        <div className={styles.ScoreSidebar}>
          {menuList()}
        </div>
    </Drawer>
);

ScoreSidebar.propTypes = {sentEmails: PropTypes.number, accounts: PropTypes.array, folders: PropTypes.array};

ScoreSidebar.defaultProps = {};

export default ScoreSidebar;
