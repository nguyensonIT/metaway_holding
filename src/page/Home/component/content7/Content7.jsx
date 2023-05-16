import { Heart } from "../../../../component/icon"
import img from '../../../../assets/imgs/content7-img/Vector.png'

const Content7 = () => {
    return (
        <div className="w-full">
            <div className="">
                <h1 className="text-center py-[78px] text-[#49BDA8] text-[38px] font-bold">
                    Đối tác của chúng tôi
                </h1>
            </div>
            <div className="3xl:grid-cols-[repeat(3,1fr)] 2xl:w-[100%] w-[80%] gap-x-[9px] grid grid-cols-[repeat(4,1fr)] mx-auto ">
                <Partner />
                <Partner/>
                <Partner/>
                <Partner/>
                <Partner/>
                <Partner/>
                <Partner/>
                <Partner/>
                <Partner/>
                <Partner className="3xl:hidden"/>
                <Partner className="3xl:hidden"/>
                <Partner className="3xl:hidden"/>
            </div>
        </div>
    )
}

const Partner = ({className}) => {
    return (
        <div className={`partner ${className} h-[250px] flex flex-col justify-center items-center border-solid border-[#8A8A8A] border-[1px] rounded-[5px]`}>
            <img className="partner-img" src={img}/>
            <p className="partner-name text-[16px] text-[#3A3A3A]">Bones</p>
        </div>
    )
}

export default Content7