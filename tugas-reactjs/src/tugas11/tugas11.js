
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';
import style from "../../src/App.module.css";
import { useEffect, useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import axios from 'axios';


const Tugas11 = () => {

    const [data, setData] = useState(null);

    const [fetchStatus, setFetchStatus] = useState(true)

    const [currentId, setCurrentId] = useState(-1)

    const [input, setInput] = useState(
        {
            name : "",
            course : "",
            score : 0,
        }
    );
    
    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value
        if(name === "name"){
            setInput({...input, name : value})
         }else if(name === "course"){
            setInput({...input, course : value})
         }else if(name === "score"){
            setInput({...input, score : value})
         }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let {
            name,course,score
        } = input

        if(currentId === -1){
            axios.post('https://backendexample.sanbercloud.com/api/student-scores', {name, course, score})
            .then((res) => {
                console.log(res);
                setFetchStatus(true)
            }).catch((err)=> {
                console.log(err);
            })
        }else{
            axios.put(`https://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {name, course, score})
            .then((res)=>{
                console.log(res);
                setFetchStatus(true)
            })
        }
        
        setCurrentId(-1)

        setInput(
            {
                name : "",
                course : "",
                score : 0, 
            }
        )
    }

    const handleDelete = (event) => {
        let idData = parseInt(event.target.value)
        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
        .then((res)=> {
            setFetchStatus(true)
        }).catch((err)=>{
            console.log(err);
        })
    }

    const handleEdit = (event) => {
        let idData = parseInt(event.target.value)
        setCurrentId(idData)
        axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
        .then((res)=>{
            let data = res.data
            setInput({
                name : data.name,
                course : data.course,
                score : data.score
            })
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect( () => {
        if (fetchStatus === true){
            axios.get('https://backendexample.sanbercloud.com/api/student-scores')
            .then((res)=>{
                let data = res.data
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
    <>
    <div className={style.container5}>
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
                            <TableCell className="flex">
                                <button onClick={handleEdit} value={res.id} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Edit</button>
                                <button onClick={handleDelete} value={res.id} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ms-2">Delete</button>
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    </div>
    <form onSubmit={handleSubmit}>
        <div className={style.form}>
            <div className="mb-2 block">
            <Label htmlFor="name" value="Nama" />
            </div>
            <TextInput onChange={handleInput} value={input.name} name="name" type="text" required />
        </div>
        <div className={style.form}>
            <div className="mb-2 block">
            <Label htmlFor="mata_kuliah" value="Mata Kuliah" />
            </div>
            <TextInput onChange={handleInput} value={input.course} name="course" type="text" required />
        </div>
        <div className={style.form}>
            <div className="mb-2 block">
            <Label htmlFor="score" value="Nilai" />
            </div>
            <TextInput onChange={handleInput} value={input.score} name="score" type="number" required />
        </div>
        <div className={style.form}>
            <Button type="submit">Submit</Button>
        </div>
    </form>
    </>
  );
}
export default Tugas11;