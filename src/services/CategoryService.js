import axios from "axios";

class CategoryService {
  static getCategoryList() {
    return axios.get("products/category-list");
  }
}

export default CategoryService;
