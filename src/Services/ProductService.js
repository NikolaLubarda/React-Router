import axios from "axios";

class ProductService {
  static getAllProducts() {
    return axios.get("/products");
  }
}

export default ProductService;
