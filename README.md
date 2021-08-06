# E-Commerce-Back-End
[![License](https://img.shields.io/badge/license-MIT-green) ](https://img.shields.io/badge/license-MIT-green)

## Description
Simple e-commerce backend application with CRUD api calls that allows the user to modify the database through API design platforms such as Insomnia Core. This application was designed with a structure similar to those used by big e-commmerce business in such a way that it is possible to make CRUD API calls for the **products**, **categories** and **tags** models.

## Table of Contents
<!-- - [Live URL](#live-url) -->
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)

# 
## Installation
In order to be able to run the application:

    In the root folder
    1. Create a .env file with the following variables
        DB_USER=<mysql username>
        DB_PW=<mysql password>
        DB_NAME='ecommerce_db'
    2. npm install
    3. npm run seed
    4. npm start

# 
## Usage
Through the use of an API design platform such as Insomnia Core we can make API calls to **Create**, **Read**, **Update** and **Delete** elements on the 3 available models.

Routes:
> Products
>
>1. Get all products
>
>>* GET: localhost:3001/api/products/
>
>2. Get a single product by id
>
>>* GET: localhost:3001/api/products/:id
>
>3. Create a new product
>
>>* POST: localhost:3001/api/products/
>
>4. Update a single product
>
>>* PUT: localhost:3001/api/products/:id
>
>5. Delete a product
>
>>* DELETE: localhost:3001/api/products/:id

> Categories
>
>1. Get all categories
>
>>* GET: localhost:3001/api/categories/
>
>2. Get a single category by id
>
>>* GET: localhost:3001/api/categories/:id
>
>3. Create a new category
>
>>* POST: localhost:3001/api/categories/
>
>4. Update a single category
>
>>* PUT: localhost:3001/api/categories/:id
>
>5. Delete a category
>
>>* DELETE: localhost:3001/api/categories/:id

> Tags
>
>1. Get all tags
>
>>* GET: localhost:3001/api/tags/
>
>2. Get a single tag by id
>
>>* GET: localhost:3001/api/tags/:id
>
>3. Create a new tag
>
>>* POST: localhost:3001/api/tags/
>
>4. Update a single tag
>
>>* PUT: localhost:3001/api/tags/:id
>
>5. Delete a tag
>
>>* DELETE: localhost:3001/api/tags/:id

Elements required to create new elements of each model:
>Products Route
>
>* product_name
>
>* price
>
>* stock
>
>* tagIds
>
>Categories Route
>
>* category_name
>
>Tags Route
>
>* tag_name

POST methods used to create a new element of each of the models
```javascript

POST: localhost:3001/api/products/
{
    "product_name": "Basketball",
    "price": 200.00,
    "stock": 3,
    "tagIds": [1, 2, 3, 4]
}


POST: localhost:3001/api/categories/
{
    "category_name": "Top Sellers"
}


POST: localhost:3001/api/tags/
{
	"tag_name": "Test create tag"
}

```

Example:
![API tags Image](/assets/images/api-tags.JPG "API Tags")

<!-- ## Live URL -->
# 
## Questions
For further inquires, please contact me through Github or E-mail
* [Github profile](https://github.com/Erickcc)
<br>
* <a href="mailto:Erick@erick.com">E-mail</a>
