import img1 from '../../../../assets/imgs/content6-img/Rectangle 18.png'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faPlus);

const Content6 = () => {
    return (
        <div className="w-full">
            <div className="">
                <h1 className="text-center py-[78px] text-[#49BDA8] text-[38px] font-bold">Văn hóa doanh nghiệp</h1>
            </div>
            <div className="xl:w-full lg:flex-col items-center w-[80%] flex mx-auto">

                <Culture img={img1} />
                <Culture img={img1} />
                <Culture img={img1} />

            </div>
            <div className="cursor-pointer mx-auto mt-[78px] rounded-[6px] w-[193px] h-[48px] bg-[#FFB342] flex justify-center items-center">
                <p className="text-[#1C2752] text-[20px]">Xem thêm</p>
            </div>
        </div>
    )
}

const Culture = ({ img }) => {
    return (
        <div className="lg:mb-[30px] box-item-relative relative w-[490px] h-[636px] mr-[24px] rounded-[10px] overflow-hidden">
            <img src={img} alt="" className='w-full h-full object-cover object-center' />
            <div className="box-item-absolute absolute pt-[50%] top-0 right-0 bottom-0 left-0 bg-[#49BDA8D9]">
                <p className="text-[30px] text-white text-center">Văn hóa trong công ty</p>
                <div className="w-[90px] h-[90px] bg-white mx-auto mt-[20px] flex justify-center items-center">
                    <FontAwesomeIcon icon={faPlus} className='text-[#49BDA8] text-[38px]' />
                </div>
            </div>
        </div>
    )
}

export default Content6