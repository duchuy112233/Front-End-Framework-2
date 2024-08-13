import { Link } from "react-router-dom";
import useProduct from "../hooks/useProduct";

const List = () => {
  const { products, HandleDalete } = useProduct();

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">price</th>
            <th scope="col">brand</th>
            <th scope="col">show product</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <th scope="row">{product.name}</th>
              <th scope="row">{product.price}</th>
              <th scope="row">{product.isShow.toString()}</th>
              <th scope="row">{product.brand}</th>
              <th scope="row">
                <Link to={`/admin/product/edit/${product.id}`}>
                  <button className=" btn btn-success me-2">Edit</button>
                </Link>
                <button
                  className=" btn btn-danger"
                  onClick={() => HandleDalete(product.id)}
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
