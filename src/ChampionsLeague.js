import React, {Component} from 'react';
import ChampionsContainer from './components/ChampionsContainer';
import ChampionsForm from './components/ChampionsForm';


class ChampionsLeagueWinners extends Component {
  render(){
  return (
    <div className="contentContainer">
        <div className="contentText">
          <div className="titleContent">Champions League Winners</div>
            <ChampionsContainer></ChampionsContainer>
            <ChampionsForm></ChampionsForm>
        </div>
    </div>
  )}
}

export default ChampionsLeagueWinners;
