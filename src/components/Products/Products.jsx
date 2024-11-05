import React from 'react'
import Img1 from "../../assets/Women/Img1.jpg"
import Img2 from "../../assets/Women/Img2.jpg"
import Img3 from "../../assets/Women/Img3.jpg"
import Img4 from "../../assets/Women/Img4.jpg"
import Img5 from "../../assets/Women/Img5.jpg"
import { FaStar } from 'react-icons/fa'


const ProductsData =[
    {
      id: 1,
      img: Img1,
      title : "Women Ethnic",
      rating: 4.5,
      color:  "white",
      aosDelay: "0", 
    },
    {
        id: 2,
        img: Img2,
        title : "Goggles",
        rating: 4.7,
        color:  "Red",
        aosDelay: "200", 
      },
    {
        id: 3,
        img: Img3,
        title : "Printed T-Shirt",
        rating: 4.4,
        color:  "Brown",
        aosDelay: "400", 
      },
    {
        id: 4,
        img: Img4,
        title : "Women western",
        rating: 4.7,
        color:  "Yellow",
        aosDelay: "600", 
      },
    {
        id: 5,
        img: Img5,
        title : "Fashin T-Shirt",
        rating: 4.5,
        color:  "Pink",
        aosDelay: "800", 
      },
]

const Products = () => {
  return (
    <div className='mt-14 mb-12' id='products'>
     <div className='container'>
        {/* Hearder Section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p data-aos="fade-up" className='text-sm text-primary '>
            Top Selling Products for you
            </p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel incidunt in labore quidem repellat nihil ea quo. Impedit ut eum tenetur quo, voluptatem cupiditate quae qui illum doloribus at ipsum!</p>
        </div>
        {/* Body section */}
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                {/* card section */}
                {
                    ProductsData.map((data) => (
                        <div 
                        data-aos="fade-up"
                        data-aos-delay={data.aosDelay}
                        key={data.id} className='space-y-3'>
                        <img src={data.img} 
                        
                        alt="" 
                        className='h-[200px] w-[200px] object-cover rounded-md'
                        />
                        <div>
                          <h3 
                          
                          className='font-semibold'>{data.title}</h3>
                          <p className='text-sm text-gray-600'>{data.color}</p>
                          <div className='flex items-center gap-1'>
                            <FaStar className='text-yellow-400'/>
                            <span>{data.rating}</span>
                          </div>
                        </div>
                        </div>
                    ))
                }
            </div>
           
        </div>
     </div>
    </div>
  )
}

export default Products
