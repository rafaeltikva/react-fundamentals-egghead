import React from 'react';
import styles from './utils/styles';
import playerPositionValues from './utils/playerPositionValues.js';
import PlayerRow from './PlayerRow';

var Squad = React.createClass({
    getInitialState: function () {
        return {players: []};
    },
    loadPlayers: function () {
        return this.props.players;
    },
    componentDidMount: function () {
        var playerList = this.loadPlayers();
        playerList.sort(function (player1, player2) {
            return playerPositionValues[player1.position] - playerPositionValues[player2.position];
        });
        this.setState({players: playerList})
    },
    render: function () {
        var playerRows = this.state.players.map(function (player) {
            return (<PlayerRow key={player.id} {...player} />);
        });

        return (
            <table style={styles.table_border}>
                <tbody>
                <tr style={styles.table_cell}>
                    <th style={styles.table_cell}>#</th>
                    <th style={styles.table_cell}>Name</th>
                    <th style={styles.table_cell}>Position</th>
                </tr>
                {playerRows}
                </tbody>
            </table>
        );
    }
});

module.exports = Squad;