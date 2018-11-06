### React NHL APP ###

## What it does ##

Pulls information from NHL stats api and displays certain information based on the state of the app.

1. Teams component pulls list of NHL teams and displays them in a select.
2. User selects team and handleChange() saves the selected team to the parent components state via callback.
3. App component passes the selected team ID into the PLayers component.
4. Players component componentDidUpdate() func then calls the API with the selected team ID to get a  list of roster players.
5. Players component displays list of roster players and their jersey numbers.