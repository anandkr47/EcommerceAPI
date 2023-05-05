# EcommerceAPI 

hosted link https://ecommerceapi-production-2da9.up.railway.app

This is a ecommerce api which you can use to manage your products on inventory.
we are using mongodb database to store the data

products{
id: Number,
  name: String,
  quantity: Number,
  }

it has several features like insert delete update and get:

1.add product
 send a post request to the server link https://ecommerceapi-production-2da9.up.railway.app/addproducts
 this request will add the product to the database.
 
 2.get product
 send a get request to the server link https://ecommerceapi-production-2da9.up.railway.app/getproducts
 this request will fetch the database from the server.
 
 3.update product
 send a put request to the server link https://ecommerceapi-production-2da9.up.railway.app/updateproducts/:id
 here the /:id is the unique id token given by the api which is the id of the product which you want to update. 
 this request will update the product in your datbase.
 
 4 delete product
 send a delete request to the server link https://ecommerceapi-production-2da9.up.railway.app/deleteproducts/:id
 here the /:id is the unique id token given by the api which is the id of the product which you want to delete. 
 this request will delete the product in your datbase.
 
