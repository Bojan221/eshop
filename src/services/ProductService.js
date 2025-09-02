import axios from "axios";
import { GiAnnexation } from "react-icons/gi";

class ProductService {
  static getAllProducts = () => axios.get("products?limit=40&skip=77");
  static getSingleProduct = (id) => axios.get(`products/${id}`);
  static getProductByCategory = (category) => axios.get(`products/category/${category}`);
  static getProductBySearch = (search) => axios.get(`products/search?q=${search}`);
}

export default ProductService;
