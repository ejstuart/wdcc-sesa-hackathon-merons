import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScoreSidebar.module.css';
import {Box, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FolderIcon from '@material-ui/icons/Folder';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FolderTab from "../FolderTab/FolderTab";
import AccountTab from "../AccountTab/AccountTab";


const ScoreSidebar = (props) => (
    <Box anchor={"left"} open={true} variant={"permanent"}>
        <div className={styles.ScoreSidebar}>
            <img src={"./images/clickmaillogo.png"} style={{"max-height": "100px"}}/>
            <ListItem button key={'Sent'} className={styles.menuItem}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary={'Sent '}  />
                <ListItemText primary={props.sentEmails}/>
            </ListItem>

            <ListItem button key={'Starred'} className={styles.menuItem}>
                <ListItemIcon><MailIcon/></ListItemIcon>
                <ListItemText primary={'Starred '} />
            </ListItem>

            <ListItem button key={'Folders'} className={styles.menuItem}>
                <ListItemIcon><FolderIcon/></ListItemIcon>
                <ListItemText primary={'Folders '} />
            </ListItem>
            <ListItem button key={'Folders'} className={styles.menuItem}>
                <FolderTab name={props.folders[0].name} bought={props.folders[0].bought}/>
            </ListItem>
            <ListItem button key={'Folders'} className={styles.menuItem}>
                <FolderTab name={props.folders[1].name} bought={props.folders[1].bought}/>
            </ListItem>
            <ListItem button key={'Folders'} className={styles.menuItem}>
                <FolderTab name={props.folders[2].name} bought={props.folders[2].bought}/>
            </ListItem>
            <ListItem button key={'Folders'} className={styles.menuItem}>
                <FolderTab name={props.folders[3].name} bought={props.folders[3].bought}/>
            </ListItem>
            <ListItem button key={'Folders'} className={styles.menuItem}>
                <FolderTab name={props.folders[4].name} bought={props.folders[4].bought}/>
            </ListItem>

            <ListItem button key={'Accounts'} className={styles.menuItem}>
                <ListItemIcon><AccountCircleIcon/></ListItemIcon>
                <ListItemText primary={'Accounts '} />
            </ListItem>
            <ListItem button key={'Accounts'} className={styles.menuItem}>
                <AccountTab name={props.accounts[0].name} bought={props.accounts[0].bought}/>
            </ListItem>
            <ListItem button key={'Accounts'} className={styles.menuItem}>
                <AccountTab name={props.accounts[1].name} bought={props.accounts[1].bought}/>
            </ListItem>
            <ListItem button key={'Accounts'} className={styles.menuItem}>
                <AccountTab name={props.accounts[2].name} bought={props.accounts[2].bought}/>
            </ListItem>

        </div>
    </Box>
);

ScoreSidebar.propTypes = {
    sentEmails: PropTypes.number,
    accounts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        bought: PropTypes.bool
    })),
    folders: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        bought: PropTypes.bool
    }))
};

ScoreSidebar.defaultProps = {};

export default ScoreSidebar;
