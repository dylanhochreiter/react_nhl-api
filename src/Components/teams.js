import React from 'react';

class Teams extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        teams: [],
        valSelected: "Select"
      };
    }

    handleChange(event){
      this.setState({
          valSelected: event.target.value
      });
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
          <select value={this.state.valSelected} onChange={this.handleChange.bind(this)}>
            {teams.map(team =>
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            )}
          </select>
        );
      }
  }
  
  export default Teams;