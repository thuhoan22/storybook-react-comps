import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { styled } from '@mui/material/styles';

import './table.css';

interface TableProps {
  checkboxcolum?: boolean;
  style?: boolean;
}

function createData(
  name: string,
  position_level: string,
  department: string,
  affiliation: string,
  email: string,
  phone: number,
) {
  return { name, position_level, department, affiliation, email, phone };
}

const rows = [
  createData( '끼_Ky', '팀장_Team Leader/책임_Lead', 'UI Dev.', 'HIVELAB VINA', 'kyph18@hivelab.com', +84978259152,),
  createData( '뀌_Quy', '파트장_Part Leader/책임_Lead', 'UI Dev.', 'HIVELAB VINA', 'quylv@hivelab.com', +84356688339),
  createData( '떰_Tam UIT', '파트장_Part Leader/책임_Lead', 'UI Dev.', 'HIVELAB VINA', 'dotam@hivelab.com', +84388685556),
  createData( 'V.빙_ Vinh', '사원_Staff/선임_Senior', 'UI Dev.', 'HIVELAB VINA', 'vinhntv@hivelab.com', +84911007911),
  createData( '투 환_Thu Hoan', '사원_Staff/선임_Senior', 'UI Dev.', 'HIVELAB VINA', 'hoanntt@hivelab.com', +84989698482),
];

const columnsDataTable: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rowsDataTable = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const TableComponent = ({ checkboxcolum, style }: TableProps) => (
  <>
    {checkboxcolum ? (
      <>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rowsDataTable}
            columns={columnsDataTable}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </>
    ): (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {style ? (
                  <>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="left">Position/Level</StyledTableCell>
                    <StyledTableCell align="left">Department</StyledTableCell>
                    <StyledTableCell align="left">Affiliation</StyledTableCell>
                    <StyledTableCell align="left">Email</StyledTableCell>
                    <StyledTableCell align="left">Phone</StyledTableCell>
                  </>
                ) : (
                  <>
                    <TableCell>Name</TableCell>
                    <TableCell align="left">Position/Level</TableCell>
                    <TableCell align="left">Department</TableCell>
                    <TableCell align="left">Affiliation</TableCell>
                    <TableCell align="left">Email</TableCell>
                    <TableCell align="left">Phone</TableCell>
                  </>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <>
                  {style ? (
                    <>
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                        <StyledTableCell align="left">{row.position_level}</StyledTableCell>
                        <StyledTableCell align="left">{row.department}</StyledTableCell>
                        <StyledTableCell align="left">{row.affiliation}</StyledTableCell>
                        <StyledTableCell align="left">{row.email}</StyledTableCell>
                        <StyledTableCell align="left">{row.phone}</StyledTableCell>
                      </StyledTableRow>
                    </>
                  ) : (
                    <>
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">{row.name} </TableCell>
                        <TableCell align="left">{row.position_level}</TableCell>
                        <TableCell align="left">{row.department}</TableCell>
                        <TableCell align="left">{row.affiliation}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="left">{row.phone}</TableCell>
                      </TableRow>
                    </>
                  )}
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )}
  </>
);

export default TableComponent;
