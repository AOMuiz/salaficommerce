const ProductDetailsCard = ({ url, url1 }) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="grid grid-rows-3 gap-5">
        <div>
          <img src={url} alt="" />
        </div>
        <div>
          <img src={url1} alt="" />
        </div>
        <div>1</div>
      </div>
      <div>2</div>
      <div>3</div>
    </div>
  );
};

export default ProductDetailsCard;
