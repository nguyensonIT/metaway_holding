
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faAngleRight);
const Nav = () => {
    return (
        <div className='lg:hidden w-[80%] mt-[14px] mx-auto'>
            <span className='text-[#838383] text-[16px]'>Trang chủ</span>
            <FontAwesomeIcon icon={faAngleRight} className='mx-[10px] text-[12px]'/>
            <span className='text-[16px] text-[#212529]'>Giới thiệu</span>
        </div>
    )
}
export default Nav