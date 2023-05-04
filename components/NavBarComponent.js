import React from 'react'
import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import Image from "next/image";

export default function NavBarComponent() {
  return (
    <>
      <Navbar className={'bg-danger '} >
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src="https://www.nicepng.com/png/full/84-847341_bower-logo-bower-png.png"
              width={50}
              height={50}
              className="d-inline-block align-top "
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <div className={'d-flex justify-content-center'}>
            <Nav className="me-auto  ">
              <Link href='/' className='nav-link text-light'>
                Home
              </Link>
              <Link href='/about' className='nav-link text-light'>
                About Us
              </Link>

              <Link href='/movie' className='nav-link text-light'>
                Movies
              </Link>
              <Link href='/product' className='nav-link text-light'>
                Product
              </Link>
            </Nav>

          </div>
          <div className={'align-items-end'}>
            <Button variant="outline-light ">Login</Button>
            <Button variant="outline-light m-2">Sign Up</Button>
          </div>

        </Container>
      </Navbar>

    </>
  )
}
