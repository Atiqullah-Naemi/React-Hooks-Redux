import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyBycycle } from '../redux'

function BycycleContainer() {
    const numberOfBycycles = useSelector(state => state.numberOfBycycles)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Number of Bycycles: { numberOfBycycles } </h1>
            <button onClick={() => dispatch(buyBycycle())}>Buy Bycycle</button>
        </div>
    )
}

export default BycycleContainer
