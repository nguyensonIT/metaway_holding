import img1 from '../../../../assets/imgs/content5-img/Photo (1).png'
import img2 from '../../../../assets/imgs/content5-img/Photo (3).png'
import img3 from '../../../../assets/imgs/content5-img/Photo (2).png'
import img4 from '../../../../assets/imgs/content5-img/Photo.png'

const Content5 = () => {
    return (
        <div className="mt-[81px] pb-[84px] w-[100%] bg-[#EDEDED]">
            <div className="">
                <h1 className="text-center py-[55px] text-[#49BDA8] text-[38px] font-bold">Danh hiệu & Giải thưởng</h1>
            </div>
            <div className="relative 3xl:flex-col 3xl:items-center md:w-full flex justify-end w-[80%] mx-auto">
                <p className="absolute xl:w-full xl:top-0 left-0 top-[160px] w-[487px] text-[16px] text-justify text-[#3C3C3C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
                    sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor,
                    ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper
                    aliquet. Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices
                    in, congue sed ex.</p>
                <div className="3xl:mt-[250px] xl:mt-[600px] xl:grid-cols-[repeat(1,1fr)] grid grid-cols-[666px_441px] gap-[38px]">
                    <div className='relative'><img className="absolute xl:w-full right-0
                    bottom-0" src={img1} alt="" /></div>
                    <div className=''>
                        <img className="xl:w-full" src={img2} alt="" />
                    </div>
                    <div>
                        <img className="xl:w-full" src={img3} alt="" />
                    </div>
                    <div>
                        <img className="xl:w-full" src={img4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Content5