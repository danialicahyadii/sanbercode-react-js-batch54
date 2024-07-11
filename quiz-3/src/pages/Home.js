import React, {useEffect, useState} from "react";
import axios from 'axios';


const Home = () => {
    const [data, setData] = useState(null);
    const [fetchStatus, setFetchStatus] = useState(true)
    useEffect( () => {
        if(fetchStatus === true){
            axios.get("https://backendexample.sanbercloud.com/api/mobile-apps")
            .then( (res) => {
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
            }).catch( (err) => {
                console.log(err);
            })
            setFetchStatus(false)
        }
    }, [fetchStatus, setFetchStatus])
    return (
        <>
            <section className="bg-gray-200 p-5">
                <div className="container mx-auto mt-10">
                <h1 className="text-xl font-bold ">Find your data that you need!</h1>
                </div>
                <div className="container mx-auto flex-wrap flex gap-10 items-center justify-start">
                    {data !== null && data.map((res, index)=>{
                        const handleCategory = (android, ios) => {
                            if (android === 1 && ios === 1) {
                                return 'Android & Ios';
                            } else if (android === 1) {
                                return 'Android';
                            } else if (ios === 1) {
                                return 'Ios';
                            }
                        }
                        const handleSize = (size) => {
                            if (size >= 1000) {
                                return (size / 1000) + ' MB';
                            } else {
                                return size + ' MB';
                            }
                        };
                        const handlePrice = (price) => {
                            if(price === 0){
                                return 'Free';
                            }else{
                                return 'Rp ' + price.toLocaleString() + ',-';
                            }
                        }
                        return(
                        <>
                        <div className="mt-10 h-72 flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={res.image_url} className="w-1/3 bg-cover bg-center bg-landscape" alt="" />
                        <div className="w-2/3 p-4">
                        <h1 className="text-gray-900 font-bold text-2xl">
                            {res.name}
                        </h1>
                        <small>{res.release_year}</small>
                        <p className="mt-2 text-gray-600 text-sm">
                            {res.description}
                        </p>
                        <div className=" item-center mt-2 text-gray-500">
                            <span>{res.category} </span>
                            <span>{handleSize(res.size)}</span>
                            <span>, {handleCategory(res.is_android_app, res.is_ios_app)}</span>
                        </div>
                        <div className="flex item-center justify-between mt-3">
                            <h1 className="text-gray-700 font-bold text-xl">
                            {handlePrice(res.price)}
                            </h1>
                            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                            {res.rating} Ratings
                            </button>
                        </div>
                        </div>
                    </div>
                        </>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Home