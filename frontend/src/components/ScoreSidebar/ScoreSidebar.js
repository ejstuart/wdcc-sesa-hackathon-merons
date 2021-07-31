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
                <ListItemText primary={'Sent '}  style={{"padding-right":"30px"}}/>
                <ListItemText primary={props.sentEmails}/>
            </ListItem>

            <ListItem button key={'Starred'} className={styles.menuItem}>
                <ListItemIcon><MailIcon/></ListItemIcon>
                <ListItemText primary={'Starred '} />
            </ListItem>

            {props.folderList.map((item) => {
                return (
                    <FolderTab name={item}></FolderTab>
                )
            })}

            {props.accountList.map((item) => {
                return (
                    <AccountTab name={item}></AccountTab>
                )
            })}

        </div>
    </Box>
);

ScoreSidebar.propTypes = {
    sentEmails: PropTypes.number,
    accountList: PropTypes.arrayOf(PropTypes.string),
    folderList: PropTypes.arrayOf(PropTypes.string)
};

ScoreSidebar.defaultProps = {};

export default ScoreSidebar;
