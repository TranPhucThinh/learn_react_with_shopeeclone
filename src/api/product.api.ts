import { Product, ProductList, ProductListConfig } from 'src/types/product.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const URL = 'products'

const productApi = {
  getProducts: (params: ProductListConfig) => http.get<SuccessResponse<ProductList>>(URL, { params }),
  getProductDetail: (id: string) => http.get<SuccessResponse<Product>>(`${URL}/${id}`)
}

export default productApi
