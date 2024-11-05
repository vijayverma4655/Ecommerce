import React, { useState } from 'react';
import Logo1 from "../../assets/Logo1.png"; 
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping, FaBars } from "react-icons/fa6";
import DarkMode from './DarkMode';

const Menu = [
    { id: 1, name: "Home", link: "/#home" },
    { id: 2, name: "Top Rated", link: "#products" },
    { id: 3, name: "Top Selling", link: "#best" },
    { id: 4, name: "Products Search", link: "#search" },
    { id: 5, name: "Top Shirt", link: "#shirt" },
];

const DropdownLink = [
    { id: 1, name: "Review", link: "#review" },
    { id: 2, name: "Testimonial", link: "#testimonial" },
    { id: 3, name: "Contact Us", link: "#footer" },
];

const Navbar = ({ handleOrderPopup }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            {/* Upper Navbar */}
            <div className='bg-primary/40 py-2'>
                <div className='container flex justify-between items-center'>
                    <div>
                        <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                            <img src={Logo1} alt="Logo" className='w-10' />
                            Shopsy
                        </a>
                    </div>
                    {/* Search bar and order button */}
                    <div className='flex justify-between items-center gap-4'>
                        <div className='relative group hidden sm:block'>
                            <input type="text" placeholder='Search' className='w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800' />
                            <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
                        </div>
                        {/* Order button */}
                        <button onClick={handleOrderPopup} className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                            <span className='group-hover:block hidden transition-all duration-200'>Order</span>
                            <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
                        </button>
                        {/* Darkmode Switch */}
                        <div><DarkMode /></div>
                        {/* Menu Icon */}
                        <div className='block sm:hidden cursor-pointer' onClick={toggleMenu}>
                            <FaBars className='text-2xl text-gray-500' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Lower Navbar */}
            <div className={`sm:flex justify-center ${isMenuOpen ? "block" : "hidden"} transition-all duration-300 ease-in-out`}>
                <ul className='sm:flex items-center gap-4 flex-col sm:flex-row bg-white dark:bg-gray-900 w-full sm:w-auto p-4 sm:p-0'>
                    {Menu.map((data) => (
                        <li key={data.id}>
                            <a href={data.link} className='inline-block px-6 m-2 hover:text-primary duration-200'>{data.name}</a>
                        </li>
                    ))}
                    <li className='group relative cursor-pointer'>
                        <a href="#" className='flex items-center gap-[2px] py-2 px-8'>
                            Review
                            <span><FaCaretDown className='transition-all duration-200 group-hover:rotate-180' /></span>
                        </a>
                        <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md'>
                            <ul>
                                {DropdownLink.map((data) => (
                                    <li key={data.id}>
                                        <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>{data.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
