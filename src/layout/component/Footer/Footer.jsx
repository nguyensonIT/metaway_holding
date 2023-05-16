import logo from '../../../assets/imgs/logo/Group.png'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationDot, faEnvelope, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FacebookeICon, Linkedin, TwisterICon, Youtube } from '../../../component/icon';

library.add(faLocationDot, faEnvelope, faGlobe, faPhone);

const Footer = () => {
    return (
        <div className="w-full bg-[#49BDA8] mt-[70px]">
            <div className="2xl:grid 2xl:grid-cols-[repeat(2,1fr)] lg:w-[95%] w-[80%] flex justify-between gap-2 mx-auto pt-[60px]">
                <InfoCompany />
                <ItemFooter
                    title='Về chúng tôi'
                    link1=' Appointment '
                    link2=' Doctors '
                    link3=' Services '
                    link4=' About Us'
                />
                <ItemFooter
                    title='Các công ty thành viên'
                    link1=' Vitala Retail '
                    link2=' NeoroCare International Hospital '
                    link3=' Endo Life '
                    hid2=' hidden'
                />
                <ItemFooter
                    title='Quan hệ cổ đông'
                    link1=' Thông báo'
                    link2=' Công bố thông tin '
                    link3=' Báo cáo tài chính '
                    hid2=' hidden'
                />
                <ItemFooter
                    title='Tin tức'
                    link1=' Về Metaway Med'
                    link2=' Báo chí - Truyền thông '
                    hid1=' hidden '
                    hid2=' hidden'
                />
            </div>
            <hr className='lg:w-[95%] md:mt-[80px] w-[80%] mx-auto my-[20px]'/>
            <div className="md:relative lg:w-[95%] w-[80%] mx-auto flex justify-between pb-[60px] ">
                <p className="text-[16px] text-[#FCFEFE]">
                    Bản quyền 2023 Metaway Med | Bảo lưu mọi quyền | Được hỗ trợ thiết kế bởi Metaway Tech.
                </p>
                <div className="md:absolute md:top-[-78px] flex items-center gap-3">
                    <a href="#"><FacebookeICon/></a>
                    <a href="#"><Youtube/></a>
                    <a href="#"><TwisterICon/></a>
                    <a href="#"><Linkedin/></a>
                </div>
            </div>
        </div>
    )
}

const InfoCompany = () => {
    return (
        <div className="">
            <div className="w-[243px] h-[58px] mb-[56px]"><img className='w-full h-full object-cover object-center' src={logo} alt="" /></div>
            <div className="">
                <p className="mb-[8px] text-[20px] text-white font-[400]">CÔNG TY CỔ PHẦN METAWAY MED</p>
                <div className="flex items-center mb-[15px]">
                    <FontAwesomeIcon icon={faLocationDot} className='text-white text-[25px]' />
                    <p className="ml-[14px] text-[white] text-[16px]">Lô CX01, KĐT Văn Khê, P. La Khê, Q. Hà Đông, Hà Nội</p>
                </div>
                <div className="flex items-center mb-[15px]">
                    <FontAwesomeIcon icon={faEnvelope} className='text-white text-[25px]' />
                    <p className="ml-[14px] text-[white] text-[16px]">info@metawaymed.vn</p>
                </div>
                <div className="flex items-center mb-[15px]">
                    <FontAwesomeIcon icon={faGlobe} className='text-white text-[25px]' />
                    <p className="ml-[14px] text-[white] text-[16px]">www.metawaymed.vn</p>
                </div>
                <div className="flex items-center mb-[15px]">
                    <FontAwesomeIcon icon={faPhone} className='text-white text-[25px]' />
                    <p className="ml-[14px] text-[white] text-[16px]">Hotline: ......</p>
                </div>
            </div>
        </div>
    )
}

const ItemFooter = ({...props}) => {
    return (
        <div className="">
            <div className="">
                <h1 className="mb-[44px] text-[20px] text-white font-[400] ">{props.title}</h1>
                <ul className="">
                    <li className="mb-[10px]"><a className='px-[6px] leading-[22px] text-[#FCFEFE] text-[16px]' href="#">{props.link1}</a></li>
                    <li className="mb-[10px]"><a className='px-[6px] leading-[22px] text-[#FCFEFE] text-[16px]' href="#"> {props.link2} </a></li>
                    <li className={`${props.hid1} mb-[10px]`}><a className='px-[6px] leading-[22px] text-[#FCFEFE] text-[16px]' href="#"> {props.link3} </a></li>
                    <li className={`${props.hid2} mb-[10px]`}><a className='px-[6px] leading-[22px] text-[#FCFEFE] text-[16px]' href="#"> {props.link4} </a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer