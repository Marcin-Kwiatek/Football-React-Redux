import React, {Component} from 'react';
import BallonContainer from './components/BallonContainer';
import BallonForm from './components/BallonForm';


class BallonWinners extends Component {
  render(){
  return (
    <div className="contentContainer">
        <div className="contentText">
          <div className="titleContent">Ballon d 'Or Winners</div>
          <BallonContainer></BallonContainer>
          <BallonForm></BallonForm>
        </div>
    </div>
  )}
}

export default BallonWinners;
