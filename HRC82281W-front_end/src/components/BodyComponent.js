import React from 'react'
import PredictButton from './buttons/PredictButton'
import AnalyticsViewButton from './buttons/AnalyticsViewButton'
import AdvanceSearchButton from './buttons/AdvanceSearchButton'
import Search from './buttons/Search'
import AddButton from './buttons/AddButton'
import EditButton from './buttons/EditButton'
import DeleteButton from './buttons/DeleteButton'
import TableComponent from './TableComponent'

function BodyComponent() {
  return (
    <div className='bodyComponent'>
        <div>
        <PredictButton/>
        <AnalyticsViewButton/>
        <AdvanceSearchButton/>
        <Search/>
        <AddButton/>
        <EditButton/>
        <DeleteButton/>
        </div>
        <div className='tableComponent'>
          <TableComponent/>
        </div>
    </div>
  )
}

export default BodyComponent