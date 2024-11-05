
const Dashboard=()=>{
    return(
        <div className="text-center bg-[#9538E2] pb-14">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <div className="flex gap-5 justify-center">
            <button className="btn">Cart</button>
            <button className="btn btn-outline btn-primary">Wishlist</button>
            </div>

        </div>
    )
}
export default Dashboard;