import img1 from '../../../../assets/imgs/content3-img/Group 491.png'
import img2 from '../../../../assets/imgs/content3-img/Group 492.png'
import img3 from '../../../../assets/imgs/content3-img/Group 493.png'

const Content3 = () => {
    return (
        <div className=' w-full'>
            <div className='md:w-screen w-[80%] mx-auto'>
                <div className="mt-[120px] text-center my-[84px] text-[#49BDA8] text-[38px] font-bold">
                    <h1 className="">Ưu thế cốt lõi</h1>
                </div>
                <div className="w-full">
                    <div className="lg:flex-col flex justify-between">
                        <div className="lg:w-full w-[48%]">
                            <img src={img1} alt="" className='lg:m-auto' />
                        </div>
                        <div className="lg:w-full w-[48%]">
                            <h1 className="text-[24px] text-[#303030] font-[700] leading-[38.4px]">Cơ sở hạ tầng</h1>
                            <p className="mt-[30px] text-[#3C3C3C] text-[20px] leading-[30px]">Metaway Med được đầu tư kinh phí rất lớn cho cơ sở hạ
                                tầng, trang thiết bị hiện đại, thuê chuyên gia đầu ngành, mua bản quyền công nghệ… như
                                viện nghiên cứu, phòng lab, hạ tầng mặt bằng hệ thống bán lẻ trên toàn quốc, xây dựng
                                bệnh viện chuẩn quốc tế, nhập khẩu thiết bị y tế hiện đại… Đây là nền móng để Metaway
                                Med phát triển mạnh mẽ trong tương lai.</p>
                        </div>
                    </div>
                    <div className="lg:mt-[40px] lg:flex-col flex justify-between">
                        <div className="lg:w-full w-[48%] order-1">
                            <img src={img2} alt="" className='lg:m-auto' />
                        </div>
                        <div className="lg:w-full lg:order-1 w-[48%]">
                            <h1 className="text-[24px] text-[#303030] font-[700] leading-[38.4px]">Con người</h1>
                            <p className="mt-[30px] text-[#3C3C3C] text-[20px] leading-[30px]">Metaway Med quy tụ những con người nhiệt huyết, tận
                                tình, chuyên sâu từ Ban lãnh đạo tập đoàn đến đội ngũ y bác sĩ, dược sĩ, chuyên gia, cán
                                bộ công nhân viên, là những người đang miệt mài nghiên cứu, tìm kiếm phương pháp điều
                                trị hiệu quả cao nhất, chất lượng tốt nhất để mang đến dòng sản phẩm bảo vệ sức khỏe
                                toàn diện cho cộng đồng người Việt.</p>
                        </div>
                    </div>
                    <div className="lg:mt-[40px] lg:flex-col flex justify-between">
                        <div className="lg:w-full w-[48%]">
                            <img src={img3} alt="" className='lg:m-auto' />
                        </div>
                        <div className="lg:w-full w-[48%]">
                            <h1 className="text-[24px] text-[#303030] font-[700] leading-[38.4px]">Công nghệ</h1>
                            <p className="mt-[30px] text-[#3C3C3C] text-[20px] leading-[30px]">Metaway Med thừa hưởng và ứng dụng những công nghệ hiện
                                đại nhất thế giới vào nghiên cứu, vận hành, quản lý và khám chữa bệnh như công nghệ nano
                                trong phát triển đông dược, công nghệ số trong vận hành quản lý chuỗi bán lẻ dược mỹ
                                phẩm, Công nghệ robot, laser trong điều trị thần kinh cột sống…</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Content3