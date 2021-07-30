import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScoreSidebar.module.css';
import {Box, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles, useTheme } from '@material-ui/core/styles';

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
    <Box anchor={"left"} open={true} variant={"permanent"}>
        <div className={styles.ScoreSidebar}>
          {menuList()}
        </div>
    </Box>
);

ScoreSidebar.propTypes = {sentEmails: PropTypes.number, accounts: PropTypes.array, folders: PropTypes.array};

ScoreSidebar.defaultProps = {};

export default ScoreSidebar;
