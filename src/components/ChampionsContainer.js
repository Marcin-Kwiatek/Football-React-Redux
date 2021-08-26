import React from 'react'
import { connect } from 'react-redux'
import { GiTrophyCup } from "react-icons/gi";


const ChampionsContainer = ({champions}) => {
    champions.list.sort((a,b)=>{
        return b.trophies - a.trophies
      })
    return(
    <ul>
        {champions.list.map(champion => <li style={{margin:'5px', backgroundColor:'#292e39'}} key={champion.club}>
         {champion.trophies}  <GiTrophyCup style={{paddingTop:'10px'}}></GiTrophyCup> {champion.club}</li>)}
    </ul>)   
}
const mapStateToProps = state => ({
    champions: state.champions,
})

export default connect(mapStateToProps, {})(ChampionsContainer)
