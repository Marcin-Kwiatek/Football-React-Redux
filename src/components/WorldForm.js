import React from "react";
import { connect } from 'react-redux'
import actions from '../WorldChampionshipWinners/duck/actions'

const WorldForm = (props) => {

    const addCoutry = React.createRef()

    let addYear = 2022

    const addWorld = (event) => {
        event.preventDefault()
        let newWorldWinner = {}
        newWorldWinner.country = addCoutry.current.value.toUpperCase()
        newWorldWinner.year = addYear
        if(newWorldWinner.country!==""){
            props.add(newWorldWinner)
            addCoutry.current.value=""
            addYear +=4
        }
    }


    return <>
        <input style={{width:'30%'}} placeholder='country name' className="addInput" ref={addCoutry}></input>
        <button onClick={addWorld} className='addButton' type='submit'>ADD NEW WINNER</button>
    </>
}

const mapDispatchToProps = dispatch => ({
    add: world => dispatch(actions.add(world))
    
})

export default connect(null, mapDispatchToProps)(WorldForm)