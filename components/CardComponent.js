import Link from 'next/link';
import React from 'react'
import { Card } from 'react-bootstrap';
import {BASE_PATH} from "@/lib";
import Button from "react-bootstrap/Button";
import {useRouter} from "next/router";


export default function CardComponent({ title,des,imagePath,id}) {
  const router=useRouter();
  const handleClick = () =>{
    router.push(`/movie/${id}`);
  }
  return (
    <>
      <div className="m-4">
        <div className="card" >
          <Card.Img  className='w-100 h-100 g-3' style={{ objectFit: "cover" }}
                    src={imagePath? BASE_PATH + imagePath : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRzI8fv3708mkWciodUc8J80WQTBtXftdWXUjDTTSvgWnPwHBiDgRE3n_9kNmKoWH4DZ4&usqp=CAU"} />            <div className="card-body text-center">
              <h5 className="card-title">{title ? title : "Card Title"}</h5>
          <Card.Footer className={'bg-white'}>
            <Button variant="outline-danger" onClick={handleClick}>View Details</Button>
          </Card.Footer>
            </div>

        </div>
      </div>


    </>


  )
}
