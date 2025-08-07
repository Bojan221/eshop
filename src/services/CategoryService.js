import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/'

class CategoryService { 
    static getCategoryList() { 
      return axios.get('products/category-list')
    }
}

export default CategoryService;