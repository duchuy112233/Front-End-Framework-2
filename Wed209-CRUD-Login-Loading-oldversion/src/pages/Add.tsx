import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Product } from '../types/Product';
import ProductForm from '../components/ProductForm';
import { useLoading } from '../context/Loading'; // Đảm bảo đường dẫn chính xác

type Props = {
  onAdd: (product: Product) => void;
};

const Add: React.FC<Props> = ({ onAdd }) => {
  const [error, setError] = useState<string | null>(null);
  const { setLoading } = useLoading();

  const onSubmit: SubmitHandler<Product> = async (data: Product) => {
    setLoading(true);
    try {
      await onAdd(data);
      alert('Sản phẩm đã được thêm thành công!');
    } catch (error) {
      setError('Có lỗi xảy ra khi thêm sản phẩm.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="space-y-4">
        <h3 className="text-3xl text-center">PRODUCT ADD</h3>
        {error && <div className="text-red-500 text-center">{error}</div>}
        <ProductForm
          onSubmit={onSubmit}
          initialValues={{
            title: '',
            price: 0,
            image: '',
            description: '',
            category: '',
            isShowProduct: true,
          }}
        />
      </div>
    </div>
  );
};

export default Add;
