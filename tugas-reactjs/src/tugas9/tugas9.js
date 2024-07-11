
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';
import { Button } from 'flowbite-react';
import style from "../../src/App.module.css";


const Tugas9 = () => {
  return (
    <div className={style.container3}>
      <Table>
        <TableHead>
          <TableHeadCell className="bg-violet-500 text-white">No</TableHeadCell>
          <TableHeadCell className="bg-violet-500 text-white">Nama</TableHeadCell>
          <TableHeadCell className="bg-violet-500 text-white">Mata Kuliah</TableHeadCell>
          <TableHeadCell className="bg-violet-500 text-white">Nilai</TableHeadCell>
          <TableHeadCell className="bg-violet-500 text-white">Index Nilai</TableHeadCell>
          <TableHeadCell className="bg-violet-500 text-white">Action</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              1
            </TableCell>
            <TableCell>John</TableCell>
            <TableCell>Algoritma</TableCell>
            <TableCell>80</TableCell>
            <TableCell>A</TableCell>
            <TableCell className="flex">
            <Button color="light" style={{ marginRight: 10, width:60, height:40 }}>Edit</Button>
            <Button color="failure" style={{ width:60, height:40 }}>Delete</Button>
            </TableCell>
          </TableRow>
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              2
            </TableCell>
            <TableCell>Doe</TableCell>
            <TableCell>Matematika</TableCell>
            <TableCell>70</TableCell>
            <TableCell>B</TableCell>
            <TableCell className="flex">
            <Button color="light" style={{ marginRight: 10, width:60, height:40 }}>Edit</Button>
            <Button color="failure" style={{ width:60, height:40 }}>Delete</Button>
            </TableCell>
          </TableRow>
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              3
            </TableCell>
            <TableCell>Frank</TableCell>
            <TableCell>Kalkulus</TableCell>
            <TableCell>60</TableCell>
            <TableCell>C</TableCell>
            <TableCell className="flex">
            <Button color="light" style={{ marginRight: 10, width:60, height:40 }}>Edit</Button>
            <Button color="failure" style={{ width:60, height:40 }}>Delete</Button>
            </TableCell>
          </TableRow>
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              4
            </TableCell>
            <TableCell>Jason</TableCell>
            <TableCell>Basis Data</TableCell>
            <TableCell>90</TableCell>
            <TableCell>A</TableCell>
            <TableCell className="flex">
            <Button color="light" style={{ marginRight: 10, width:60, height:40 }}>Edit</Button>
            <Button color="failure" style={{ width:60, height:40 }}>Delete</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
export default Tugas9;