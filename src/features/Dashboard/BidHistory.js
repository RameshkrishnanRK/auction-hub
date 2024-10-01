import React, { useEffect, useState } from "react";
import { Modal, Box, Typography, IconButton, Grid, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTable } from "react-table";
import { bids} from '../../components/login/data/dummyData';

const BidHistory = ({ open, onClose, currency, currencyRates }) => {
  const [bidHistory, setBidHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage=5;

  const totalPages= Math.ceil(bidHistory.length / entriesPerPage);

  
  useEffect(() => {
    if (open) {
      const sortedBids =[...bids].sort((a,b)=> b.amount - a.amount);
      setBidHistory(sortedBids); 
    }
  }, [open]);
  const handleNextPage=()=>{
    if (currentPage< totalPages){
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePreviousPage=()=>{
    if(currentPage>1){
      setCurrentPage(currentPage-1);
    }
  }

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
  const data = React.useMemo(() => bidHistory.slice((currentPage- 1)* entriesPerPage, currentPage*entriesPerPage), [bidHistory, currentPage]);
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
        <Grid container justifyContent='space-between' mt={2}>
          <Button onClick={handlePreviousPage} disabled={currentPage===1}>Previous</Button>
          <Typography variant="body2">Page {currentPage} of {totalPages}</Typography>
          <Button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</Button>
        </Grid>
      </Box>
    </Modal>
  );
};

export default BidHistory;