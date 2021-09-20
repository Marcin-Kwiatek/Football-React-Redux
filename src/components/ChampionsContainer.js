import React from 'react'
import { connect } from 'react-redux'
import { GiTrophyCup } from "react-icons/gi";
import actions from '../championsLeagueWinners/duck/actions';


const ChampionsContainer = ({champions,up}) => {
    champions.list.sort((a,b)=>{
        return b.trophies - a.trophies
      })
    return(
    <ul>
        {champions.list.map(champion => <li style={{margin:'5px', backgroundColor:'#292e39'}} key={champion.club}>
        {champion.trophies}  <GiTrophyCup style={{paddingTop:'10px'}}></GiTrophyCup> {champion.club}
        {<button onClick={() => up(champion.club)} style={{float:'right', backgroundColor:'white', color:'#1e2431', height:'50px',
         fontWeight:'bold'}}>+ ADD A WIN</button>} </li>)}
    </ul>)   
}
const mapStateToProps = state => ({
    champions: state.champions
})
const mapDispatchToProps = dispatch => ({
    up: club => dispatch(actions.up(club))  
}) 

export default connect(mapStateToProps, mapDispatchToProps)(ChampionsContainer)
