import { Link } from "react-router-dom";

const AllGadegts = ({ gadgets }) => {
  if (!gadgets) {
    return null;
  }
  const { product_id, product_title, category, price, product_image } = gadgets;
  // console.log(gadgets)
  return (
    <div className="card bg-base-100 w-72 mt-5 shadow-xl">
      <figure>
        <img
          src={product_image}
          alt="Shoes" className="h-48 w-64 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>{price}</p>
        <div className="card-actions justify-start">
          <Link to={`/gadgets/${product_id}`}>
            <button className="btn btn-outline btn-secondary rounded-full">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default AllGadegts


