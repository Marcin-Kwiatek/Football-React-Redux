import React from 'react'
import { connect } from 'react-redux'


const BallonContainer = ({ballons}) => 
    <ul>
        {ballons.list.map(ballon => <li style={{margin:'5px', backgroundColor:'#292e39'}} key={ballon.year}>{ballon.year} {ballon.name} {ballon.points} points</li>)}
    </ul>   

const mapStateToProps = state => ({
    ballons: state.ballons,
})

export default connect(mapStateToProps, {})(BallonContainer)
