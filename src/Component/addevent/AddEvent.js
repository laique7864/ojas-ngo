import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import KeepMountedModal from './KeepMountedModal';
import { getEventAll } from '../../services/admin.service';

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'location', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'img',
        label: 'Image',
        minWidth: 170,
        align: 'right',
        format: (value) =>{
            console.log(value,'data');
            return <img src={value} width='50px' height='50px'/>
        }  ,
    },
    
    {
        id: 'date',
        label: 'Date',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'Status',
        label: 'Status',
        minWidth: 170,
        align: 'right'
        },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}
const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
];


const AddEvent = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [dataRow,setDataRow] = React.useState([])

    const fetchData = async() =>{
        const data = await getEventAll()
        console.log(data.data);
        setDataRow(data.data.Events);
       }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    React.useEffect(() => {
        fetchData()
    },[])
    return (
        <>
            <div className="isolate bg-white px-6 py-24 sm:py-3 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-1C6FB sm:text-4xl font-sans mb-2">Events LIst</h2>
                </div>
                <div className='addCategoryDiv' style={{ textAlign: 'right', marginBottom: '1rem', marginRight: '1.4rem' }}>
                    <div className='addCategoryButton'>
                        <  KeepMountedModal />
                    </div>
                </div>
                {/* <div className="mt-10 flex justify-end">
                    <button
                        type="submit"
                        className="block  rounded-md bg-1C6FB px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add Event
                    </button>
                </div> */}
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dataRow
                                    ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        console.log(row);
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {column.format 
                                                                ? column.format(value)
                                                                : value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={dataRow?.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
        </>
    )
}

export default AddEvent;