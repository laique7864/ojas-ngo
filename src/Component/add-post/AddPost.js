import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { jsPDF } from "jspdf";
import KeepMountedModal from './KeepMountedModal';
import { CompleteEvent, deleteEventId, deletePostId, getEventAll, getPostsAll } from '../../services/admin.service';
import { ToastContainer, toast } from 'react-toastify';



const AddPost = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [dataRow, setDataRow] = React.useState([])


    const columns = [
        { id: 'name', label: 'Name', minWidth: 50 },
        {
            id: 'img',
            label: 'Image',
            minWidth: 50,
            align: 'right',
            format: (value) => {
                console.log(value, 'data');
                return <img src={value} width='50px' height='50px' />
            },
        },

        {
            id: 'description',
            label: 'description',
            minWidth: 250,
            align: 'right',
        },
        {
            id: 'date',
            label: 'Created Date',
            minWidth: 10,
            align: 'right'
        },
        {
            id: '_id',
            label: 'Action',
            minWidth: 50,
            align: 'right',
            format: (value) => {
                console.log(value, 'data');
                return (
                        <button className="block  rounded-md bg-red-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={()=> deleteEvent(value)} >Delete</button>
                )
            },
        },
    ];
    const onPageChange =(event)=>{
        if(event === '+'){
            const lastPage = Math.ceil(dataRow.length / itemPerPage);

            if (currentPage < lastPage) {
                setCurrentPage((prev) => prev + 1);
              }
          

        }else{
            setCurrentPage((prev)=> prev === 1 ? 1 : prev - 1); 
        }
    }
    const itemPerPage = 10;
    const indexOfLastItem = itemPerPage * currentPage
    const indexOfFirstItem = indexOfLastItem - itemPerPage
    const CurrentData = dataRow?.slice(indexOfFirstItem ,indexOfLastItem)
    
    const onClickDetails = async (Id) => {
        const data = await CompleteEvent(Id)
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
    const deleteEvent = async (Id) => {
        const data = await deletePostId(Id)
        console.log(data, 'daata');
        if (data.status === 201 || data.status === 200) {
            toast("Event Delete Successfully")

            fetchData()

        } else {
            console.log('something went wrong')
        }

        console.log(data, 'data');
    }
 

    const fetchData = async () => {
        const data = await getPostsAll()
        setDataRow(data.data.Events);
    }




    const exportPdf = async () => {
        const doc = new jsPDF({ orientation: "landscape" });
    
        doc.table(1,1,dataRow, )
    
        // doc.save("mypdf.pdf");
      };
    const createHeaders= (keys) =>{
        const result = [];

        for (let key of keys) {
        result.push({
            id: key,
            name: key,
            prompt: key,
        });
        }
        return result;
    };

    React.useEffect(() => {
        fetchData()
    }, [])
 
    return (
        <>
            <ToastContainer />
            <div className="isolate bg-white px-6 py-24 sm:py-3 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-1C6FB sm:text-4xl font-sans mb-2">Events LIst</h2>
                </div>
                <div className='addCategoryDiv' style={{ textAlign: 'right', marginBottom: '1rem', marginRight: '1.4rem' }}>
                    <div className='addCategoryButton'>
                        <  KeepMountedModal refetch={fetchData} />
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
                {/* <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ width: column.minWidth  ,overflow: 'hidden'}}
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
                                                        <TableCell key={column.id}  align={column.align} title={column.format
                                                            ? " "
                                                            : value}  style={{ maxWidth: column.minWidth ,overflow:'hidden'}} >
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
                </Paper> */}
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Image
                </th>
                <th scope="col" class="px-6 py-3">
                description
                </th>
                <th scope="col" class="px-6 py-3">
                   Date
                </th>
                <th scope="col" class="px-6 py-3">
                   Action
                </th>
               
            </tr>
        </thead>
        <tbody>
            {CurrentData.length > 0 && CurrentData.map((item)=>(
 <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
     {item.name}
 </th>
 <td class="px-6 py-4">
    <img src={item?.img} width='50px'/>
 
 </td>
 <td class="px-6 py-4">
    <p> {item.description}</p>

 </td>
 <td class="px-6 py-4">
 {item.date}
 </td>
 <td class="px-6 py-4">
 <button className="block  rounded-md bg-red-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={()=> deleteEvent(item._id)} >Delete</button>

 </td>
</tr>
            ))

            }
           
        </tbody>
    </table>
    
    </div>
    
    <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
  <div class="flex  sm:items-center sm:justify-between">
    <div>
      <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <a class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" onClick={()=>onPageChange("-")}>
          <span >Previous</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
          </svg>
        </a>

        <a  class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" onClick={()=>onPageChange("+")}>
          <span  >Next</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
          </svg>
        </a>
      </nav>
    </div>
  </div>
</div>
            </div>
        </>
    )
}

export default AddPost;