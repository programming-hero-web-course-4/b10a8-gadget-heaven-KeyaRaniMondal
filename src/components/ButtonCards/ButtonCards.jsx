const ButtonCards=({gadget})=>{
  const { product_id, product_title, category, price, product_image } = gadget;
    return(
        <div>{product_title}</div>
    )
}
export default ButtonCards;