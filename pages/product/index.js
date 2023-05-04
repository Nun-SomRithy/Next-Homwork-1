import React from "react";
import DataTable from 'react-data-table-component';
import {useEffect,useState} from "react";
import Button from "react-bootstrap/Button";
import {Form, Modal} from "react-bootstrap";
import Image from "next/image";

export default function ProductList({}){


    const [data,setData]= useState([])
    const [loading, setloading] = useState(false)
    const[perPage,setPage] = useState(10)
    const [list, setList] = useState([]);
    const [search, setSearch] = useState("");

    const columns=[
        {
            name:"Product Name",
            selector : (row) => row.title,
            sortable:true
        },
        {
            name : "Price",
            selector : (row) => row.price
        },
        {
            name : "Category",
            selector : (row) => row.category,
            cell: row =>row.category.name
        },
        {
            name : "Photo",
            selector : (row) => row.images,
            cell : row => (<Image src={row.images[0]}   className={'img-style'}  alt={"thumbnail"}  width={50}
                                  height={50}/>)
        },
        {
            name : "Action",
            selector : (row) => row.action,
            cell :row => (
                <div    className="d-flex gap-2 ">
                    <Button  size="md" variant="outline-danger" >Delete</Button>

                    <Button size="md" variant="outline-primary">Edit</Button>

                </div>

            ),
        },

    ]

    useEffect(() =>{
        fetchdataStatic()
    },[])

    async function  fetchdataStatic(){
        setloading(true)
        const url=  `https://api.escuelajs.co/api/v1/products?limit=20&offet=1`
        const res = await fetch(url);

        const products= await res.json();
        setData(products)
        setList(products)
        setloading(false)


    }

    const filteredList = list.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleSearch = (event)=>{
        setSearch(event.target.value);
    }

    return(
        <>
            <div className='container mt-5 bg-cl'>
                <div>
                    <h1 className={"text-center bg-cl m-2"}>Product Collection - Table</h1>
                    <label htmlFor="search" className="d-flex float-end">
                        <Form.Control
                            type="search"
                            placeholder="Find Product Here"
                            className="me-2"
                            aria-label="Search"
                            onChange={handleSearch}
                        />
                    </label>
                </div>
                <br/>
                <br/>
                <DataTable
                    className={"mt-4"}
                    columns={columns}
                    data={filteredList}
                    progressPending={loading}
                    pagination
                />
            </div>

        </>

    )
}



