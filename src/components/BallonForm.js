import React from "react";
import { connect } from 'react-redux'
import actions from '../ballonWinners/duck/actions'

const BallonForm = (props) => {

    const ballonInput = React.createRef()

    const addBallon = (event) => {
        console.log(props.add)
        event.preventDefault()
        props.add(ballonInput.current.value)

        ballonInput.current.value=""
    }

    return <>
        <input className="addInput" ref={ballonInput}></input>
        <button onClick={addBallon} className='addButton' type='submit'>Add ballon</button>
    </>
}

const mapDispatchToProps = dispatch => ({
    add: ballon => dispatch(actions.add(ballon))
})

export default connect(null, mapDispatchToProps)(BallonForm)