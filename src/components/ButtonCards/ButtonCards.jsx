import { Link, useLoaderData, useParams } from "react-router-dom";

const ButtonCards=({gadget})=>{
  const { product_id, product_title, category, price, product_image } = gadget || {};
    return(
          <div className="card bg-base-100 w-72 mt-5 shadow-xl border-t">
      <figure>
        <img
          src={product_image}
          alt="Shoes" className="h-48 w-64 object-cover pt-5" />
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
export default ButtonCards;