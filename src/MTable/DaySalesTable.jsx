import { useMemo, useState, useEffect } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

// Data must be a stable reference (useState, useMemo, useQuery, defined outside of the component, etc.)
const data = [
  {
    itemName: 'Item 1',
    quantity: 5,
    price: 10.99,
  },
  {
    itemName: 'Item 2',
    quantity: 3,
    price: 8.99,
  },
  {
    itemName: 'Item 3',
    quantity: 3,
    price: 8.99,
  },
  {
    itemName: 'Item 4',
    quantity: 3,
    price: 8.99,
  },
  {
    itemName: 'Item 2',
    quantity: 3,
    price: 8.99,
  },
  {
    itemName: 'Item 6',
    quantity: 3,
    price: 8.99,
  },
  {
    itemName: 'Item 2',
    quantity: 3,
    price: 8.99,
  },
  {
    itemName: 'Item 2',
    quantity: 3,
    price: 8.99,
  },
 
  
  // Add more items as needed
];



export default function DaySalesTable() {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'itemName',
        header: 'Item Name',
        muiTableHeadCellProps: { sx: { color: 'green' } },
        Cell: ({ cell }) => <span>{cell.getValue()}</span>,
      },
      {
        accessorKey: 'quantity',
        header: 'Quantity',
      },
      {
        accessorKey: 'price',
        header: 'Price',
        Header: () => <i>Price</i>,
      },
    ],
    [],
  );

  const [rowSelection, setRowSelection] = useState({});

  useEffect(() => {
    // Do something when the row selection changes
  }, [rowSelection]);

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnOrdering: false,
    enableRowSelection: false,
    enablePagination: false,
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
    // enablePagination: true,
    // manualPagination: true,
  });

  const someEventHandler = () => {
    console.log(table.getState().sorting);
  };

  return(
<div  className='w-[600px] p-3'>
  <MaterialReactTable table={table} />

</div>

  )
  
  
}
