import bannerImg from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className='pb-80 border-1'>
                    <div className="bg-[#9538E2] text-center h-80">
            <h1 className="text-5xl font-bold text-[#FFFFFF]">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="text-[#FFFFFF] mt-3">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <button className="btn btn-outline btn-primary bg-[#FFFFFF] rounded-full mt-5">Shop Now</button>
            <img src={bannerImg} alt="" className='max-w-6xl h-96 flex justify-center mx-auto mt-7 rounded-3xl border-8 border-[#FFFFFF4D]'/>
        </div>
        </div>
    )
}
export default Banner;