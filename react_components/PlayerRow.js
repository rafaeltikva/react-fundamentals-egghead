import React from 'react';
import styles from './utils/styles';

var PlayerRow = function (props) {
    return (
        <tr>
            <td style={styles.table_cell}>{props.jersey}</td>
            <td style={styles.table_cell}>{props.name}</td>
            <td style={styles.table_cell}>{props.position}</td>
        </tr>
    );
};

module.exports = PlayerRow;