import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScoreSidebar.module.css';

const ScoreSidebar = () => (
  <div className={styles.ScoreSidebar}>
    ScoreSidebar Component
  </div>
);

ScoreSidebar.propTypes = {
    sentEmails: PropTypes.number,
    accounts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        score: PropTypes.number,
        bought: PropTypes.boolean
    })),
    folders: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        score: PropTypes.number,
        bought: PropTypes.boolean
    }))
};

ScoreSidebar.defaultProps = {};

export default ScoreSidebar;
