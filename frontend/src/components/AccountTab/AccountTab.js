import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './AccountTab.module.css';
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const AccountTab = (props) => {

    const [score, setScore] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setScore(score + 1);
        });
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.AccountTab}>
            <ListItem button key={'Accounts'} className={styles.menuItem}>
                <ListItemIcon><AccountCircleIcon/></ListItemIcon> <ListItemText primary={props.name} />
            </ListItem>
        </div>
    );
}

AccountTab.propTypes = {name: PropTypes.string, bought: PropTypes.bool};

AccountTab.defaultProps = {};

export default AccountTab;
