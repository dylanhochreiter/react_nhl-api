import React from 'react';
import PropTypes from 'prop-types';

// DH: Teams class. Gets a list of teams, and renders the list into a dropdown.
class Teams extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        teams: [],
        teamSelected: "Select"
      };
    }

    handleChange(event){
      this.props.callback(event.target.value);
    }
  
    componentDidMount() {
      // DH: Call NHL stats API to get a list of teams
      fetch('https://statsapi.web.nhl.com/api/v1/teams')
        .then(response => response.json())
        .then(data => this.setState({ teams: data.teams }));
    }

    render() {
        const { teams } = this.state;

        // DH: Sort teams alphabetically into a new array
        var sortedTeams = teams.sort(function (a, b) {
          if (a.name < b.name) return -1;
          else if (a.name > b.name) return 1;
          return 0;
        });

        return (
          <select onChange={this.handleChange.bind(this)}>
          <option value="" disabled selected>Select a team</option>
            {sortedTeams.map(team =>
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            )}
          </select>
        );
      }
  }

  Teams.protoTypes = {
    callback : PropTypes.func,
  }
  
  export default Teams;