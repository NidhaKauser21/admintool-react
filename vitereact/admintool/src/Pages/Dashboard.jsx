import TableComponent from '../Components/Table';
import data from '../Data/Mock_data.json'

const DataTable = () => {
  const tableHeaders = ["Avather", "name", "role", "project name", "start_date", "last_date", "status"];

  return (
    <TableComponent tableData={data} tableHeaders={tableHeaders} />
  );
};

export default DataTable;