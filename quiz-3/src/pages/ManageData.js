import React, {useEffect, useState} from "react";
import style from "../../src/App.module.css";
import axios from 'axios';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Button, Label, TextInput, Select, Datepicker } from 'flowbite-react';


const ManageData = () => {
    const [data, setData] = useState(null);

    const [fetchStatus, setFetchStatus] = useState(true)

    const [currentId, setCurrentId] = useState(-1)

    const [input, setInput] = useState(
        {
            category: "",
            description: "",
            image_url: "",
            is_android_app: 0,
            is_ios_app:  0,
            name: "",
            price: 0,
            rating: 0,
            release_year: 0,
            size: 0,
        }
    );
    
    const handleInput = (event) => {
        console.log(event.target);
        let name = event.target.name
        let value = event.target.value
        if(name === "category"){
            setInput({...input, category : value})
         }else if(name === "description"){
            setInput({...input, description : value})
         }else if(name === "image_url"){
            setInput({...input, image_url : value})
         }else if(name === "is_android_app"){
            setInput({...input, is_android_app : value})
         }else if(name === "is_ios_app"){
            setInput({...input, is_ios_app : value})
         }else if(name === "name"){
            setInput({...input, name : value})
         }else if(name === "price"){
            setInput({...input, price : value})
         }else if(name === "rating"){
            setInput({...input, rating : value})
         }else if(name === "release_year"){
            setInput({...input, release_year : value})
         }else if(name === "size"){
            setInput({...input, size : value})
         }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let {
            category,description,image_url,is_android_app,is_ios_app,name,price,rating,release_year,size
        } = input
        console.log(input);

        if(currentId === -1){
            axios.post('https://backendexample.sanbercloud.com/api/mobile-apps', {category,description,image_url,is_android_app,is_ios_app,name,price,rating,release_year,size})
            .then((res) => {
                console.log(res);
                setFetchStatus(true)
            }).catch((err)=> {
                console.log(err);
            })
        }else{
            axios.put(`https://backendexample.sanbercloud.com/api/mobile-apps/${currentId}`, {category,description,image_url,is_android_app,is_ios_app,name,price,rating,release_year,size})
            .then((res)=>{
                console.log(res);
                setFetchStatus(true)
            })
        }
        
        setCurrentId(-1)

        setInput(
            {
                category: "",
                description: "",
                image_url: "",
                is_android_app: 0,
                is_ios_app:  0,
                name: "",
                price: 0,
                rating: 0,
                release_year: 0,
                size: 0,
            }
        )
    }

    const handleDelete = (event) => {
        let idData = parseInt(event.target.value)
        console.log(idData);
        axios.delete(`https://backendexample.sanbercloud.com/api/mobile-apps/${idData}`)
        .then((res)=> {
            console.log(res);
            setFetchStatus(true)
        }).catch((err)=>{
            console.log(err);
        })
    }

    const handleEdit = (event) => {
        let idData = parseInt(event.target.value)
        console.log(idData);
        setCurrentId(idData)
        axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps/${idData}`)
        .then((res)=>{
            let data = res.data
            setInput({
                category: data.category,
                description: data.description,
                image_url: data.image_url,
                name : data.name,
                is_android_app: data.is_android_app,
                is_ios_app:  data.is_ios_app,
                price: data.price,
                rating: data.rating,
                release_year: data.release_year,
                size: data.size,
            })
        }).catch((err)=>{
            console.log(err);
        })
    }


    useEffect( () => {
        if (fetchStatus === true){
            axios.get('https://backendexample.sanbercloud.com/api/mobile-apps')
            .then((res)=>{
                let data = res.data
                console.log(data);
                let resultData = data.map((e)=>{
                    let {
                        category,
                        created_at,
                        description,
                        id,
                        image_url,
                        is_android_app,
                        is_ios_app,
                        name,
                        price,
                        rating,
                        release_year,
                        size,
                        updated_at,
                    } = e
                    return {
                        category,
                        created_at,
                        description,
                        id,
                        image_url,
                        is_android_app,
                        is_ios_app,
                        name,
                        price,
                        rating,
                        release_year,
                        size,
                        updated_at,
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
        <div className={style.container}>
            <h1><b>Manage Data</b></h1>
        </div>
        <div className={style.container}>
            <Table hoverable>
                <TableHead>
                <TableHeadCell className="bg-violet-500 text-white">No</TableHeadCell>
                <TableHeadCell className="bg-violet-500 text-white">Nama</TableHeadCell>
                <TableHeadCell className="bg-violet-500 text-white">Kategori</TableHeadCell>
                <TableHeadCell className="bg-violet-500 text-white">Description</TableHeadCell>
                <TableHeadCell className="bg-violet-500 text-white">Price</TableHeadCell>
                <TableHeadCell className="bg-violet-500 text-white">Rating</TableHeadCell>
                <TableHeadCell className="bg-violet-500 text-white">Release_Year</TableHeadCell>
                <TableHeadCell className="bg-violet-500 text-white">Size</TableHeadCell>
                <TableHeadCell className="bg-violet-500 text-white">Is_Android_App</TableHeadCell>
                <TableHeadCell className="bg-violet-500 text-white">Is_Ios_App</TableHeadCell>
                <TableHeadCell className="bg-violet-500 text-white">Action</TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    {data !== null && data.map((res, index)=>{
                        return (
                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {index + 1}
                            </TableCell>
                            <TableCell>{res.name}</TableCell>
                            <TableCell>{res.category}</TableCell>
                            <TableCell style={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{res.description}</TableCell>
                            <TableCell>{res.price}</TableCell>
                            <TableCell>{res.rating}</TableCell>
                            <TableCell>{res.release_year}</TableCell>
                            <TableCell>{res.size}</TableCell>
                            <TableCell>{res.is_android_app}</TableCell>
                            <TableCell>{res.is_ios_app}</TableCell>
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
        <div className={style.container}>
            <h1><b>Create Data</b></h1>
        </div>
        <div className={style.container6}>
            <form onSubmit={handleSubmit} style={{ marginTop: 50 }}>
            <div className={style.container} style={{ marginBottom:10 }}>
                <h1>Gambar Data Game</h1>
            </div>
            <div className={style.form}>
                <div className="mb-2 block">
                <Label value="Image URL" />
                </div>
                <TextInput onChange={handleInput} value={input.image_url} name="image_url" type="text" required />
            </div>
            <div className={style.container} style={{ marginBottom:10 }}>
                <h1>Data Game</h1>
            </div>
            <div className={style.form}>
                <div className="mb-2 block">
                <Label value="Name" />
                </div>
                <TextInput onChange={handleInput} value={input.name} name="name" type="text" required />
            </div>
            <div className={style.form}>
                <div className="mb-2 block">
                <Label value="Category" />
                </div>
                <TextInput onChange={handleInput} value={input.category} name="category" type="text" required />
            </div>
            <div className={style.form}>
                <div className="mb-2 block">
                <Label value="Description" />
                </div>
                <TextInput onChange={handleInput} value={input.description} name="description" type="text" required />
            </div>
            <div className={style.form}>
                <div className="mb-2 block">
                <Label value="Price" />
                </div>
                <TextInput onChange={handleInput} value={input.price} name="price" type="number" required />
            </div>
            <div className={style.form}>
                <div className="mb-2 block">
                <Label value="Rating" />
                </div>
                <TextInput onChange={handleInput} value={input.rating} name="rating" min={0} max={5} type="number" required />
            </div>
            <div className={style.form}>
                <div className="mb-2 block">
                <Label value="Release Year" />
                </div>
                <TextInput onChange={handleInput} value={input.release_year} min={2007} max={2021} name="release_year" type="number" required />
            </div>
            <div className={style.form}>
                <div className="mb-2 block">
                <Label value="Size" />
                </div>
                <TextInput onChange={handleInput} value={input.size} name="size" type="number" required />
            </div>
            <div className={style.form}>
                <div className="mb-2 block">
                <Label value="Android" />
                </div>
                <TextInput onChange={handleInput} value={input.is_android_app} name="is_android_app" min={0} max={1} type="number" required />
            </div>
            <div className={style.form}>
                <div className="mb-2 block">
                <Label value="IOS" />
                </div>
                <TextInput onChange={handleInput} value={input.is_ios_app} name="is_ios_app" min={0} max={1} type="number" required />
            </div>
            <div className={style.form}>
                <Button type="submit">Submit</Button>
            </div>
            </form>
        </div>
        </>
    )
}

export default ManageData