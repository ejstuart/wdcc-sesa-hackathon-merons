import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScoreSidebar.module.css';
import {Box, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FolderIcon from '@material-ui/icons/Folder';
import { makeStyles, useTheme } from '@material-ui/core/styles';


const ScoreSidebar = (props) => (
    <Box anchor={"left"} open={true} variant={"permanent"}>
        <div className={styles.ScoreSidebar}>
            <ListItem button key={'Sent'} className={styles.menuItem}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary={'Sent'}  />
                <ListItemText primary={props.sentEmails}/>
            </ListItem>

            <ListItem button key={'Starred'} className={styles.menuItem}>
                <ListItemIcon><MailIcon/></ListItemIcon>
                <ListItemText primary={'Starred '} />
            </ListItem>

            <ListItem button key={'Folders'} className={styles.menuItem}>
                <ListItemIcon><FolderIcon/></ListItemIcon>
                <ListItemText primary={'Folders ' + props.folders.filter(value => value.bought === true).length} />
            </ListItem>

            <ListItem button key={'Accounts'} className={styles.menuItem}>
                <ListItemIcon><AccountCircleIcon/></ListItemIcon>
                <ListItemText primary={'Accounts ' + props.accounts.filter(value => value.bought === true).length} />
            </ListItem>

        </div>
    </Box>
);

ScoreSidebar.propTypes = {
    sentEmails: PropTypes.number,
    accounts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        score: PropTypes.number,
        bought: PropTypes.bool
    })),
    folders: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        score: PropTypes.number,
        bought: PropTypes.bool
    }))
};

ScoreSidebar.defaultProps = {};

export default ScoreSidebar;
