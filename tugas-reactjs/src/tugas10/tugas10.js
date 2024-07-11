
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';
import style from "../../src/App.module.css";
import { useEffect, useState } from 'react';
import axios from 'axios';


const Tugas10 = () => {

    const [data, setData] = useState(null);

    const [fetchStatus, setFetchStatus] = useState(true)

    useEffect( () => {
        console.log('nilai fetch = '+fetchStatus);
        if(fetchStatus === true){
            axios.get('https://backendexample.sanbercloud.com/api/student-scores')
            .then((res)=>{
                let data = res.data
                console.log(data);
                let resultData = data.map((e)=>{
                    let {
                        id,
                        course,
                        name,
                        score,
                    } = e
                    return {
                        id,
                        course,
                        name,
                        score,
                    }
                })
                setData([...resultData])
            })
            .catch((err) => {
            })
            setFetchStatus(false)
        }
    }, [fetchStatus, setFetchStatus])

  return (
    <div className={style.container4}>
      <Table>
        <TableHead >
          <TableHeadCell className="bg-violet-500 text-white">No</TableHeadCell>
          <TableHeadCell className="bg-violet-500 text-white">Nama</TableHeadCell>
          <TableHeadCell className="bg-violet-500 text-white">Mata Kuliah</TableHeadCell>
          <TableHeadCell className="bg-violet-500 text-white">Nilai</TableHeadCell>
          <TableHeadCell className="bg-violet-500 text-white">Nilai Index</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
            {data !== null && data.map((res, index)=>{
                const handleIndexScore = (score) => {
                    if(score >= 80){
                        return 'A';
                    }else if(score >= 70 && score < 80){
                        return 'B';
                    }else if(score >= 60 && score < 70){
                        return 'C';
                    }else if(score >= 50 && score < 60){
                        return 'D';
                    }else if(score <= 50){
                        return 'E';
                    }
                }
                return(
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {index+1}
                        </TableCell>
                        <TableCell>{res.name}</TableCell>
                        <TableCell>{res.course}</TableCell>
                        <TableCell>{res.score}</TableCell>
                        <TableCell>{handleIndexScore(res.score)}</TableCell>
                    </TableRow>
                )
            })}
        </TableBody>
      </Table>
    </div>
  );
}
export default Tugas10;