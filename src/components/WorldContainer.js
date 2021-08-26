import React from 'react'
import { connect } from 'react-redux'


const WorldContainer = ({world}) => {
    world.list.sort((a,b)=>{
        return b.year - a.year
      })
    return(
    <ul>
        {world.list.map(world => <li style={{margin:'5px', backgroundColor:'#292e39'}} key={world.year}>
        {world.year} {world.country} </li>)}
    </ul>)   
}
const mapStateToProps = state => ({
    world: state.world
})

export default connect(mapStateToProps, {})(WorldContainer)
