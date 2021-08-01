import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './FolderTab.module.css';

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
            FolderTab Component
        </div>
    );
};

FolderTab.propTypes = {name: PropTypes.string, bought: PropTypes.bool};

FolderTab.defaultProps = {};

export default FolderTab;
