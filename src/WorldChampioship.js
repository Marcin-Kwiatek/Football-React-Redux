import React, {Component} from 'react';
import WorldContainer from './components/WorldContainer';
import WorldForm from './components/WorldForm';


class WorldWinners extends Component {
  render(){
  return (
    <div className="contentContainer">
        <div className="contentText">
          <div className="titleContent">World Championship Winners</div>
            <WorldContainer></WorldContainer>
            <WorldForm></WorldForm>
        </div>
    </div>
  )}
}

export default WorldWinners;
