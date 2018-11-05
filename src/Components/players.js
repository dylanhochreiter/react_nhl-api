import React from 'react';

class Players extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            players: []
        }
    }

    componentDidUpdate() {
      // DH: Calls NHL records API
      var selectedTeam = 1;

      if(this.props.teamSelected >=1){
        selectedTeam = this.props.teamSelected;
      }

      fetch('https://statsapi.web.nhl.com/api/v1/teams/' + selectedTeam + '/roster')
       .then(response => response.json())
       .then(data => this.setState({ players: data.roster }));
   }

    render() {
        const { players } = this.state;

        return (
          <ul>
            {players.map(player =>
              <li key={player.person.id}>
                #{player.jerseyNumber} {player.person.fullName}
              </li>
            )}
          </ul>
        );
      }
}

export default Players;