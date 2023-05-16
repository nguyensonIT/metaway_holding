

import '../../../../customSlider/slider.css'

import img1 from '../../../../assets/imgs/content2-img/Group 79.png'
import img2 from '../../../../assets/imgs/content2-img/Group 80.png'
import img3 from '../../../../assets/imgs/content2-img/Group 505.png'

import Slider from 'react-slick'
import { EyeIcon } from '../../../../component/icon'
const Content2 = () => {
    const settings = {
        customPaging: function (i) {
            return (
                <a className='block bg-[#999999] rounded-[50%] w-[17px] h-[17px]'>

                </a>
            );
        },
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            }
        ]
    };

    return (
        <div className="w-full">
            <div className="w-full">
                <h1 className="text-center mt-[87px] text-[#49BDA8] text-[38px] font-bold">Câu chuyện thương hiệu</h1>
            </div>

            <div className="w-full ">
                <div className="slider md:w-screen w-[80%] mx-auto py-[158px]   overflow-hidden ">
                    <Slider {...settings} >
                        <StoryItem
                            img={img1}
                            title={"Tầm nhìn"}
                            desc={"Trở thành tập đoàn dẫn đầu trong lĩnh vực y tế và chăm sóc sức khỏe thông qua việc phát triển hệ sinh thái y tế giúp cải thiện và nâng cao chất lượng cuộc sống."}
                        />
                        <StoryItem
                            img={img2}
                            title={"Sứ mệnh"}
                            desc={"Ứng dụng công nghệ tiên tiến vào sản xuất các sản phẩm từ thiên nhiên và cung cấp các dịch vụ chăm sóc sức khỏe chất lượng cao nhằm cải thiện, nâng tầm chất lượng cuộc sống cho công dân toàn cầu."}
                        />
                        <StoryItem
                            img={img3}
                            title={"Sứ mệnh"}
                            desc={"Ứng dụng công nghệ tiên tiến vào sản xuất các sản phẩm từ thiên nhiên và cung cấp các dịch vụ chăm sóc sức khỏe chất lượng cao nhằm cải thiện, nâng tầm chất lượng cuộc sống cho công dân toàn cầu."}
                        />
                        <StoryItem
                            img={img3}
                            title={"Lời hứa thương hiệu"}
                            desc={"Ứng dụng công nghệ tiên tiến vào sản xuất các sản phẩm từ thiên nhiên và cung cấp các dịch vụ chăm sóc sức khỏe chất lượng cao nhằm cải thiện, nâng tầm chất lượng cuộc sống cho công dân toàn cầu."}
                        />

                    </Slider>
                </div>
            </div>
        </div>
    )
}

const StoryItem = ({ img, title, desc }) => {
    return (
        <div className=" relative h-[490.92px] rounded-[20px] shadow-lg mx-[32px]">
            <div className=" px-[52px] py-[90px]">
                <div className="absolute left-[50%] top-[-57px] translate-x-[-50%]  w-[114px] h-[114px] rounded-[50%] flex justify-center items-center bg-[#5B72EE] ">
                    <EyeIcon />
                </div>

                <h1 className="text-[30px] text-[#2F327D] text-center font-[600]">{title}</h1>
                <p className="mt-[35.62px] text-[20px] leading-[30px] text-[#696984] text-justify">
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default Content2

