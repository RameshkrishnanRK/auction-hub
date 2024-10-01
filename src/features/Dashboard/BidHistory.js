import React, { useEffect, useState } from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTable } from "react-table";
import { bids} from '../../components/login/data/dummyData';

const BidHistory = ({ open, onClose, currency, currencyRates }) => {
  const [bidHistory, setBidHistory] = useState([]);

  
  useEffect(() => {
    if (open) {
      const sortedBids =[...bids].sort((a,b)=> b.amount - a.amount);
      setBidHistory(sortedBids); 
    }
  }, [open]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Bidder Name",
        accessor: "bidderName", 
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Time",
        accessor: "time",
      },
      
      {
        Header: "Amount",
        accessor: "amount",
        Cell: ({ value }) => {
          const bid= Number(value);
          const rate= currencyRates && !isNaN(currencyRates) ? currencyRates : 1;

          if (!isNaN(bid) && !isNaN(rate)){
          return `${currency} ${(bid * rate).toLocaleString("en-IN")}`;
          }
          return `${currency} --`
        },
    },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ row }) => {
          const amount = row.original.amount;
          if (amount=== bidHistory[0]?.amount){
            return (
              <span style={{color:"green", fontWeight:'bold'}}>Highest</span>
            );
          }
          if (amount === bidHistory[1]?.amount){
            return (
              <span style={{color:'red', fontWeight:'bold'}}>Outbid</span>
            );
          }
          return "";
        },
      },
    ],
    [currency, currencyRates, bidHistory]
  );
  const data = React.useMemo(() => bidHistory, [bidHistory]);
  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <Modal open={open} onClose={onClose}
    BackdropProps={{
      style:{ pointerEvents:'none'},
    }}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" component="h2">
            Bid History
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <table {...getTableProps()} style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      borderBottom: "2px solid black",
                      padding: "10px",
                      textAlign: "left",
                    }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Box>
    </Modal>
  );
};

export default BidHistory;