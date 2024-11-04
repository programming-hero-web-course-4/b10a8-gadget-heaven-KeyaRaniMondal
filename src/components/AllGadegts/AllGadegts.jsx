
const AllGadegts = ({ gadgets }) => {
    if (!gadgets) {
        return null;
    }
    const { product_id, product_title, category,price } = gadgets;
    console.log(gadgets)
    return (
<div className="card bg-base-100 w-72 mt-5 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product_title}</h2>
    <p>{price}</p>
    <div className="card-actions justify-start">
    <button className="btn btn-outline btn-secondary rounded-full">View Details</button>
    </div>
  </div>
</div>
    )
}
export default AllGadegts


