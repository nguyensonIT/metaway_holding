import Slider from "react-slick";
import img1 from "../../../../assets/imgs/content4-img/card-teacher.png"
import { FacebookeICon, TwisterICon } from "../../../../component/icon"
import "../../../../customSlider/slider.css"

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight,faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faAngleRight,faAngleLeft);

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        
            className={className}
            style={{ ...style, right: '-60px', width: '48px', height: '48px', display: "flex", justifyContent:'center', alignItems: 'center', borderRadius: '50%', background: "#BDBDBD",  }}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faAngleRight} className="text-white text-[20px]"/>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, left: '-60px', width: '48px', height: '48px', display: "flex", justifyContent:'center', alignItems: 'center', borderRadius: '50%',backgroundColor: "#418EFF" } }
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faAngleLeft} className="text-white text-[20px]"/>
        </div>
    );
}

const Content4 = () => {
    const settings = {
        customPaging: function (i) {
            return (
                <a className='block bg-[#999999] rounded-[50%] w-[17px] h-[17px]'>

                </a>
            );
        },
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4.4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1520,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 739,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: false,
                    dots: true,
                }
            }
        ]
    };
    return (
        <div className="mt-[78px] w-[100%]">
            <div className="md:w-[100%] w-[80%] 2xl-min:px-[80px] mx-auto">
                <div className="">
                    <h1 className=" text-center mb-[81px] text-[#49BDA8] text-[38px] font-bold">Đội ngũ của chúng tôi</h1>
                </div>
                <div className="user-slider">
                    <Slider {...settings}>
                        <User
                            img={img1}
                        />
                        <User
                            img={img1}
                        />
                        <User
                            img={img1}
                        />
                        <User
                            img={img1}
                        />
                        <User
                            img={img1}
                        />
                        <User
                            img={img1}
                        />
                    </Slider>
                </div>

            </div>
        </div>
    )
}

export const User = (props) => {
    return (
        <div className="user md:mx-auto relative w-[240px] h-[420px] mx-[12px] rounded-[110px] overflow-hidden">
            <img className="absolute w-full h-full object-cover object-center" src={props.img} />
            <div className="info absolute w-[100%] bottom-[-50px] text-center">
                <div className="">
                    <h1 className="text-[white] text-[20px]">Bulkin Simons</h1>
                    <p className="text-[white] text-[16px]">Web Designer</p>
                </div>
                <div className="w-[240px] h-[50px] bg-[#418EFF] mt-[12px] flex justify-center gap-[33px]">
                    <a href="#" className="block">
                        <FacebookeICon />
                    </a>

                    <a href="#" className="block">
                        <TwisterICon />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Content4