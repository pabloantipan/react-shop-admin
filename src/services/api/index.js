const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API_URL}/api/${API_VERSION}/auth/login`,
    profile: `${API_URL}/api/${API_VERSION}/auth/profile`,
  },
  products: {
    getProducts: (limit, offset) => `${API_URL}api/${API_VERSION}/products?${limit}=2&${offset}=2`,
    getProduct: (id) => `${API_URL}/api/${API_VERSION}/product/${id}`,
    addProducts: `${API_URL}/api/${API_VERSION}/products`,
    updateProducts: (id) => `${API_URL}/api/${API_VERSION}/products/${id}/`,
    deleteProducts: (id) => `${API_URL}/api/${API_VERSION}/products/${id}/`,
  },
  users: {
    getUsers: `${API_URL}/api/${API_VERSION}/users`,
    addUsers: `${API_URL}/api/${API_VERSION}/users`,
  },
  categories: {
    getCategoriesList: `${API_URL}/api/${API_VERSION}/categories/`,
    addCategory: `${API_URL}/api/${API_VERSION}/categories/`,
    getCategoryItems: (id) => `${API_URL}/api/${API_VERSION}/categories/${id}/products/`,
    updateCategory: (id) => `${API_URL}/api/${API_VERSION}/categories/${id}/`,
  },
  files: {
    addImage: `${API_URL}/api/${API_VERSION}/files/upload/`,
    getImage: (filename) => `${API_URL}/api/${API_VERSION}/files/${filename}`,
  },
};

export default endPoints;
