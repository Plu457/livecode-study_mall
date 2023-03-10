import { useQuery } from 'react-query';
import ProductItem from '../../component/product/item';
import { fetcher, QueryKey } from '../../queryClient';
import { Product } from '../../types';

const ProductList = () => {
  const { data } = useQuery<Product[]>(QueryKey.PRODUCTS, () =>
    fetcher({ method: 'GET', path: '/products' }),
  );

  return (
    <div>
      <ul className="products">
        {data?.map(product => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
