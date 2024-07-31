import { Link } from "react-router-dom";
import { Product } from "../types/Product";

type Props = {
  products: Product[];
  onDel: (id: number | undefined) => void;
};
//
const List = ({ products, onDel }: Props) => {
  //
  const handleDelete = (id: number | undefined) => {
    onDel(id);
  };
  //
  return (
    <>
      <h1 className="text-4xl text-center mb-10">Hello, admin</h1>
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        to="/admin/add"
      >
        Thêm mới sản phẩm
      </Link>
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
          <thead>
            <tr>
              <th className="px-4 py-2 font-medium text-gray-900">Title</th>
              <th className="px-4 py-2 font-medium text-gray-900">Category</th>
              <th className="px-4 py-2 font-medium text-gray-900">Is Show</th>
              <th className="px-4 py-2 font-medium text-gray-900">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {products.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2 text-gray-700 text-center">
                  {item.title}
                </td>
                <td className="px-4 py-2 text-gray-900 text-center">
                  {item.category}
                </td>
                <td className="px-4 py-2 text-gray-700 text-center">
                  {item.isShowProduct ? "Yes" : "No"}
                </td>
                <td className="px-4 py-2 text-gray-700 text-center">
                  <button
                    onClick={() => handleDelete(Number(item.id))}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/admin/edit/${item.id}`}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default List;
