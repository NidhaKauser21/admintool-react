import TableComponent from '../Components/Table'
import Asserts_data from '../Data/Assets.json'
import React from 'react'

const Asserts = () => {
  const tableHeaders = ["Asset_user", "Asset_Name", "Asset_Id", "Purchase_date", "Warrenty", "warrenty_end", "Amount", "Status1"];

  return (
    <div>
       <TableComponent tableData={Asserts_data} tableHeaders={tableHeaders} />
    </div>
  )
}

export default Asserts;



