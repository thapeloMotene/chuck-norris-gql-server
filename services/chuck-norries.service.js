const axios = require('axios');


//GET JOKE CATEGORIES
exports.getCategories = async function() {
 
    try {
        let  response = await axios.get(`${process.env.CHUCK_NORRIS_API_URL}/categories`);

        let responseList = response.data;
        let categoryList = responseList.map( category => { 

           let mappedCategory = { name: category }
           return mappedCategory;
        });
        return  categoryList;
      } catch (error) {
        console.error(error)
      }
}

//GET JOKE BY CATEGORY
exports.getJoke = async function(category){

  try {
    let response = await axios.get(`${process.env.CHUCK_NORRIS_API_URL}/random?category=${category}`);
    return response.data;
  } catch (error) {
    console.error(error)
  }







}

