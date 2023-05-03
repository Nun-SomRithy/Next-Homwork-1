import { Carousel } from "react-bootstrap";

export default function Slider() {
  return (
    <>
      <Carousel style={{ height: "60vh" }} className={"overflow-hidden"}>
        <Carousel.Item >
          <img
            className="d-block w-100 h-50  "
            src="https://www.movienewsletters.net/media/slider/1200x444/342609.jpg"
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50 "
            src="https://docs.madrasthemes.com/vodi/wp-content/uploads/sites/11/2019/02/movies-slider-style-2-output.jpg"
            alt="Second slide"
          />


        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src="https://www.movienewsletters.net/media/slider/1200x444/335197.jpg"
            alt="Third slide"
          />


        </Carousel.Item>
      </Carousel>
      <h1 className="text-center mt-2 text-decoration-underline">WelCome To Our HomePage</h1>
    </>


  )

}