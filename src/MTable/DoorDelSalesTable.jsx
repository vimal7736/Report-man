import React, { useMemo, useState, useEffect } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { newDataArray } from "../Service/Sales";

export default function DoorDelSalesTable() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "deliveryBoy",
        header: "Delivery Boy",
      },
      {
        accessorKey: "billNumber",
        header: "Bill Number",
      },
      {
        accessorKey: "customerName",
        header: "Customer Name",
      },
      {
        accessorKey: "items",
        header: "Items",
      },
      {
        accessorKey: "value",
        header: "Value",
      },
    ],
    []
  );

  const [rowSelection, setRowSelection] = useState({});

  useEffect(() => {
    // do something when the row selection changes
  }, [rowSelection]);

  const table = useMaterialReactTable({
    columns,
    data: newDataArray, // Use the new data array here
    enableColumnOrdering: true,
    enableRowSelection: true,
    enablePagination: true,
    onRowSelectionChange: setRowSelection,
    enablePagination: true,
    manualPagination: true,
    state: { rowSelection },
  });

  const someEventHandler = () => {
    // read the table state during an event from the table instance
    console.log(table.getState().sorting);
  };

  return (
    <div className="w-[700px] p-3 ">
      <MaterialReactTable table={table} />
    </div>
  );
}
