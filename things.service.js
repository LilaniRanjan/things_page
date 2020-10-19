import axios from 'axios';

const API_URL = 'http://localhost:8080/petProducts';

class thingsService {

  getAllThings(){
    return axios.get(API_URL);
  }

  getProductsByTypeAndPet(type, pet) {
    return axios.get(API_URL + '?type=' + type + '&pet=' + pet);
    // return axios.get(API_URL + '?type=Toys&?pet=dog');
  }


  createPetProducts(thing) {
    return axios.post(""+API_URL, thing);
  }

  getProductById(thingId) {
    return axios.get(API_URL + '/' + thingId);
  }

  getAllThingsInPage(pageNo,pageSize, sortBy){
    return axios.get(API_URL + '/page?pageNo=' + pageNo + '&pageSize=' + pageSize + '&sortBy=' + sortBy);
  }

  deleteProductById(Id) {
    return axios.delete(API_URL + '/' + Id);
  }

  updateProduct(id, product) {
    return axios.put(API_URL + '/' + id, product);
  }

  getSearchThings(pageNo,pageSize, sortBy, searchText) {
    return axios.get(API_URL + '?pageNo=' + pageNo +  '&pageSize=' + pageSize + '&sortBy=' + sortBy + '&searchText=' + searchText);
  }

  
}

export default new thingsService();
