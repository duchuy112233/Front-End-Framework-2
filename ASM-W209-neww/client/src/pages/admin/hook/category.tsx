import { useState, useEffect } from 'react';
import axios from 'axios';
import { Category } from 'src/types/Product';
import { toast } from 'react-toastify';

const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/categories');
        setCategories(response.data);
      } catch (err) {
        setError('Failed to fetch categories');
        toast.error("Không tìm được danh mục")
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export default useCategories;
