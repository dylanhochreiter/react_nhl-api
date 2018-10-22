import React from 'react';

class Teams extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        teams: [],
      };
    }
  
    componentDidMount() {
      fetch('https://statsapi.web.nhl.com/api/v1/teams')
        .then(response => response.json())
        .then(data => this.setState({ teams: data.teams }));
    }

    render() {
        const { teams } = this.state;
        console.log(teams);
        console.log(this.state);
        return (
          <ul>
            {teams.map(team =>
              <li key={team.id}>
                <p>{team.name}</p>
              </li>
            )}
          </ul>
        );
      }
  }
  
  export default Teams;