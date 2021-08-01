import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './AccountTab.module.css';

const AccountTab = (props) => {

    const [score, setScore] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            if (props.bought) {
                setScore(score + 1);
            }
        });
        return () => clearInterval(interval);
    }, []);

    return (
      <div className={styles.AccountTab}>
        AccountTab Component
      </div>
    );
}

AccountTab.propTypes = {name: PropTypes.string, bought: PropTypes.bool};

AccountTab.defaultProps = {};

export default AccountTab;
