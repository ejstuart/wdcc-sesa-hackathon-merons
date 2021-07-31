import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './FolderTab.module.css';
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";

const FolderTab = (props) => {

    const [score, setScore] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            if (props.bought) {
                setScore(score + 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.FolderTab}>
            <ListItem button key={'Accounts'} className={styles.menuItem}>
                <ListItemIcon><FolderIcon/></ListItemIcon> <ListItemText primary={props.name} />
            </ListItem>
        </div>
    );
};

FolderTab.propTypes = {name: PropTypes.string, bought: PropTypes.bool};

FolderTab.defaultProps = {};

export default FolderTab;
