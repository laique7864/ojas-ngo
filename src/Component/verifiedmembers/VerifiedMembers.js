import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { ToastContainer, toast } from 'react-toastify';
import { CompleteEvent, CompleteMember, getEventAll, getMembersAll } from '../../services/admin.service';
import Tooltip from '@mui/material/Tooltip';

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'location', label: 'ISO\u00a0Code', minWidth: 100 },
    // {
    //     id: 'img',
    //     label: 'Image',
    //     minWidth: 170,
    //     align: 'right',
    //     format: (value) => {
    //         console.log(value, 'data');
    //         return <img src={value} width='50px' height='50px' />
    //     },
    // },

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
    {
        id: 'Action',
        label: 'Image',
        minWidth: 170,
        align: 'right',
        format: (value) => {
            console.log(value, 'data');
            return (
                <>
                    <button>Complete</button>
                    <button style={{ background: 'red' }} >Delete</button>
                </>
            )
        },
    },
];

function VerifiedMembers() {
    const columns = [
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'email', label: 'ISO\u00a0Code', minWidth: 100 },
        // {
        //     id: 'img',
        //     label: 'Image',
        //     minWidth: 170,
        //     align: 'right',
        //     format: (value) => {
        //         console.log(value, 'data');
        //         return <img src={value} width='50px' height='50px' />
        //     },
        // },

        {
            id: 'mobileNo',
            label: 'Mobile No',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'state',
            label: 'State',
            minWidth: 170,
            align: 'right'
        },
        {
            id: 'profile',
            label: 'Profile',
            minWidth: 10,
            align: 'right',
            format: (value) => {
                console.log(value, 'data');
                return <img src={value} width='50px' height='50px' />
            },
        },
        {
            id: 'adharCard',
            label: 'adharCard',
            minWidth: 170,
            align: 'right'
        },
        {
            id: 'district',
            label: 'district',
            minWidth: 170,
            align: 'right'
        },
        {
            id: 'profession',
            label: 'profession',
            minWidth: 170,
            align: 'right'
        },
        {
            id: 'profession',
            label: 'profession',
            minWidth: 170,
            align: 'right'
        },
        {
            id: '_id',
            label: 'Image',
            minWidth: 170,
            align: 'right',
            format: (value) => {
                console.log(value, 'data');
                return (
                    <div className='flex gap-1'>
                        <button className="block  rounded-md bg-1C6FB px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => onClickDetails(value)} >Verify</button>
                        <button className="block  rounded-md bg-red-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Delete</button>
                    </div>
                )
            },
        },
    ];
    const onClickDetails = async (Id) => {
        const data = await CompleteMember(Id)
        console.log(data, 'daata');
        if (data.status === 201 || data.status === 200) {
            console.log('daata');
            toast("Event Added Successfully")

            fetchData()

        } else {
            console.log('something went wrong')
        }

        console.log(data, 'data');
    }
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [dataRow, setDataRow] = React.useState([])

    const fetchData = async () => {
        const data = await getMembersAll()
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
    }, [])
    return (
        <>
            <ToastContainer />
            <div className="isolate bg-white px-6 py-24 sm:py-3 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                {/* <Tooltip title='value' > hi</Tooltip> */}

                    <h2 className="text-3xl font-bold tracking-tight text-1C6FB sm:text-4xl font-sans mb-2">Verified Members</h2>
                </div>
                {/* <div className='addCategoryDiv' style={{ textAlign: 'right', marginBottom: '1rem', marginRight: '1.4rem' }}>
                    <div className='addCategoryButton'>
                        <  KeepMountedModal refetch={fetchData} />
                    </div>
                </div> */}
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
                                            style={{ width: column.minWidth }}
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
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} width={50} align={column.align} title={column.format
                                                            ? " "
                                                            : value}  style={{ maxWidth: column.minWidth ,overflow:'hidden'}} >
                                                            {column.format
                                                                ? column.format(value)
                                                                : value}
                                                                {/*  Add Tooltip component */}
                      {/* <span>{column.format ? column.format(value) : value}</span> */}
                    {/* </Tooltip> */}
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

export default VerifiedMembers
