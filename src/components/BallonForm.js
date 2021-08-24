import React from "react";
import { connect } from 'react-redux'
import actions from '../ballonWinners/duck/actions'

const BallonForm = (props) => {

    const addName = React.createRef()
    const addYear = React.createRef()
    const addPoints = React.createRef()


    const addBallon = (event) => {
        event.preventDefault()
        let newBallonWinner = {}
        newBallonWinner.name = addName.current.value
        newBallonWinner.year = addYear.current.value
        newBallonWinner.points = addPoints.current.value
        if(newBallonWinner.name!==""&&newBallonWinner.year!==""&&newBallonWinner.points!==""){
            props.add(newBallonWinner)
            addName.current.value=""
            addYear.current.value=""
            addPoints.current.value=""
        }
    }


    return <>
        <input style={{width:'30%'}} placeholder='first name and last name player' className="addInput" ref={addName}></input>
        <input placeholder='year' type="number" min='2020' className="addInput" ref={addYear}></input>
        <input placeholder='points' type="number" min="1" className="addInput" ref={addPoints}></input>
        <button onClick={addBallon} className='addButton' type='submit'>ADD BALLOM D'OR WINNER</button>
    </>
}

const mapDispatchToProps = dispatch => ({
    add: ballon => dispatch(actions.add(ballon))
})

export default connect(null, mapDispatchToProps)(BallonForm)