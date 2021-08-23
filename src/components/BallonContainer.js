import React from 'react'
import { connect } from 'react-redux'


const BallonContainer = ({ballons}) => 
    <ul>
        {ballons.list.map(ballon => <li key={ballon}>{ballon}  </li>)}
    </ul>   

const mapStateToProps = state => ({
    ballons: state.ballons,
})

export default connect(mapStateToProps, {})(BallonContainer)
