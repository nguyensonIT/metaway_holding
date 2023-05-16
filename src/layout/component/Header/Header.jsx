import { useState } from 'react'
import Logo from '../../../assets/imgs/logo/Group.png'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faBars);


const Header = () => {
    const [isList, setIsList] = useState(false)
    const handleClickBar = () => {
        setIsList(!isList)
    }

    return (
        <div className="relative h-20 w-full bg-[#49BDA8]">
            <div className=" lg:px-5 xl:w-full xl:px-5 h-full w-[80%] m-auto flex justify-between items-center">
                <div className=" lg:order-1 lg:w-[90%] w-[30%]">
                    <a className='block lg:m-auto w-[186px] h-[44.28px]' href="#"><img className='w-full h-full' src={Logo} alt="" /></a>
                </div>
                <div className=" lg:justify-start lg:w-[10%] w-[70%] h-full flex justify-end items-center">
                    <ul className=" lg:hidden w-full h-full flex items-center justify-between ">
                        <li className=""><a href="" className="header__menu-link whitespace-nowrap text-white text-[20px] " title=" TRANG CHỦ "> TRANG CHỦ
                        </a></li>
                        <li className=""><a href="" className="header__menu-link whitespace-nowrap text-white text-[20px]" title=" GIỚI THIỆU"> GIỚI
                            THIỆU</a></li>
                        <li className=""><a href="" className="header__menu-link whitespace-nowrap text-white text-[20px]" title=" HỆ SINH THÁI"> HỆ SINH
                            THÁI</a></li>
                        <li className=""><a href="" className="header__menu-link whitespace-nowrap text-white text-[20px]" title=" QUAN HỆ CỔ ĐÔNG"> QUAN HỆ
                            CỔ ĐÔNG</a></li>
                        <li className=""><a href="" className="header__menu-link whitespace-nowrap text-white text-[20px]" title=" TIN TỨC"> TIN TỨC</a>
                        </li>
                        <li className=""><a href="" className="header__menu-link whitespace-nowrap text-white text-[20px]" title=" LIÊN HỆ"> LIÊN HỆ</a>
                        </li>
                    </ul>
                    <div className='lg:block'>
                        <div onClick={handleClickBar}>
                            <FontAwesomeIcon icon={faBars} className='lg-min:hidden text-white text-[40px]' />
                        </div>


                    </div>
                </div>
            </div>
            {
                isList === true &&
                <ul className='absolute z-10 w-full top-[85px] bg-[#49BDA8]' >
                    <li className=''><a href="" className='block p-[10px] text-white text-[20px]'> TRANG CHỦ </a></li>
                    <li className=''><a href="" className='block p-[10px] text-white text-[20px]'> GIỚI THIỆU</a></li>
                    <li className=''><a href="" className='block p-[10px] text-white text-[20px]'> HỆ SINH THÁI</a></li>
                    <li className=''><a href="" className='block p-[10px] text-white text-[20px]'> QUAN HỆ CỔ ĐÔNG</a></li>
                    <li className=''><a href="" className='block p-[10px] text-white text-[20px]'> TIN TỨC</a></li>
                    <li className=''><a href="" className='block p-[10px] text-white text-[20px]'> LIÊN HỆ</a></li>
                </ul>
            }
        </div>
    )
}
export default Header