import imgBanner from '../../assets/imgs/banner/Rectangle 3.png'
const Banner = () => {
    return (
        <div className='relative w-full '>
            <img className='w-full h-full object-contain object-center bg-[rgba]' src={imgBanner} />
            <div className='absolute bg-white bg-opacity-30 top-0 right-0 bottom-0 left-0'></div>
        </div>
    )
}
export default Banner