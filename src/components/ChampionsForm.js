import React from "react";
import { connect } from 'react-redux'
import actions from '../championsLeagueWinners/duck/actions'

const ChampionsForm = (props) => {

    const addClub = React.createRef()
    const addTrophie = React.createRef()


    const addChampions = (event) => {
        event.preventDefault()
        let newChampionsWinner = {}
        newChampionsWinner.club = addClub.current.value
        newChampionsWinner.trophies = addTrophie.current.value
        if(newChampionsWinner.club!==""&&newChampionsWinner.trophies!==""){
            props.add(newChampionsWinner)
            addClub.current.value=""
            addTrophie.current.value=""
        }
    }


    return <>
        <input style={{width:'30%'}} placeholder='club name' className="addInput" ref={addClub}></input>
        <input style={{width:'15%'}} placeholder='trophy amount' type="number" min='1' className="addInput" ref={addTrophie}></input>
        <button onClick={addChampions} className='addButton' type='submit'>ADD ANOTHER CLUB</button>
    </>
}

const mapDispatchToProps = dispatch => ({
    add: champions => dispatch(actions.add(champions))
})

export default connect(null, mapDispatchToProps)(ChampionsForm)