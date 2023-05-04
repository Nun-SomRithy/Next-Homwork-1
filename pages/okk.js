import Table from 'react-bootstrap/Table';
import CardComponent from "@/components/CardComponent";

export default function ProductList({products,name,price,cate,photo,Action}){
    const data = products?.results || [];

    console.log("product fetch :",products);
    return(

    )
}

export async function  getStaticProps(context){
    const url=  `https://api.escuelajs.co/api/v1/products`
    const res = await fetch(url);

    if (!res){
        console.log("Error Fetch ")
    }

    const products= await res.json();

    if (!products){
        console.log("Error");

    }

    return{
        props:{
            products,
        },
    }
}