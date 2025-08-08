import axios from "axios";

class ProductService {
  static getAllProducts() {
    return axios.get("products?limit=20&skip=77");
  }
  static getSingleProduct(id) {
    return axios.get(`products/${id}`);
  }
}

export default ProductService;
