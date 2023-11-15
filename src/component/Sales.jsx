import React from 'react'
import DaySales from './DaySales'
import DoorDeliverySales from './DoorDeliverySales'
import SalesGraph from './SalesGraph'

const Sales = () => {
  return (
    <div className='flex  flex-wrap gap-1'>
        <div> <DoorDeliverySales/></div>
        <div> <DaySales/></div>
        <SalesGraph/>
    </div>
  )
}

export default Sales