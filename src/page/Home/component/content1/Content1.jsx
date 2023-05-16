import imgContent1 from '../../../../assets/imgs/content1-img/unsplash_QdAAasrZhdk.png'
const Content1 = () => {
    return (
        <div className="w-full">
            <h1 className="text-center my-[50px] text-[#49BDA8] text-[38px] font-bold">Về Metaway Med</h1>

            <div className="md:w-screen lg:flex-col lg:items-center w-[80%] mx-auto flex justify-between  ">
                <p className="lg:order-1 lg:w-[100%] lg:mt-5 w-[48%] text-justify text-[16px] text-[#696984] leading-[28.8px]">
                    Ý tưởng thành lập Metaway Med được hình thành từ giai đoạn dịch bệnh Covid-19 bùng phát, thời
                    điểm nhu cầu chăm sóc sức khỏe và chữa bệnh của người dân tăng cao nhưng hệ thống y tế hiện tại
                    chưa thể đáp ứng.<br /><br /><br />

                    Thừa hưởng công thức được nghiên cứu từ năm 2014, sau nhiều năm hoàn thiện ý tưởng và mô hình
                    kinh doanh, Metaway Med chính thức ra mắt vào đầu năm 2023. Metaway Med hướng tới trở thành tập
                    đoàn dẫn đầu trong lĩnh vực y tế, chăm sóc sức khỏe và phát triển hệ sinh thái y tế giúp cải
                    thiện chất lượng cuộc sống con người.
                    Metaway Med quy tụ đội ngũ chuyên gia giàu kinh nghiệm, có tầm nhìn chiến lược, đồng thời kế
                    thừa nền tảng công nghệ hiện đại & ứng dụng vào lĩnh vực y tế; từng bước hiện thực hóa giấc mơ y
                    tế số dựa trên 3 thế mạnh cốt lõi: Con người - Công nghệ & Tự nhiên.

                </p>
                <div className="lg:w-[100%] w-[48%]">
                    <img src={imgContent1} alt="" />
                </div>
            </div>

        </div>
    )
}
export default Content1