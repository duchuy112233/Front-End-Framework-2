import { Link } from "react-router-dom";
import useProduct from "../hooks/useProduct";

const List = () => {
  const { products, handleDelete } = useProduct();
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">title</th>
            <th scope="col">price</th>
            <th scope="col">image</th>
            <th scope="col">isNew</th>
            <th scope="col">stalus</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <th scope="row">{product.title}</th>
              <td>{product.price}</td>
              <td>
                <img src={product.image} alt="" width={100} />
              </td>
              <td>{product.isNew.toString()}</td>
              <td>{product.status}</td>

              <th>
                <Link to={`/admin/product/edit/${product.id}`}>
                     <button className=" btn btn-success me-2">Edit</button>
                </Link>
           
                <button
                  onClick={() => handleDelete(product.id)}
                  className=" btn btn-danger"
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
