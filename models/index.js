// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL',
  onUpdate: 'CASCADE'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  foreignKey: 'product_id', // replaces `productId`
  otherKey: 'tag_id', // replaces `tagId`
  // Define an alias for when data is retrieved
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  foreignKey: 'tag_id', // replaces `tagId`
  otherKey: 'product_id', // replaces `productId`
  // Define an alias for when data is retrieved
  // as: 'location_travellers'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
