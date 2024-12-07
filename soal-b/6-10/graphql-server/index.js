const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');

const products = JSON.parse(fs.readFileSync('data.json', 'utf8'));

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
    stock: Int!
    discount: Float!
    thumbnail: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    getProducts(page: Int!, limit: Int!): [Product!]!
    getProduct(id: ID!): Product
  }

  type Mutation {
    createProduct(
      name: String!
      price: Float!
      stock: Int!
      discount: Float!
      thumbnail: String!
    ): Product
    updateProduct(
      id: ID!
      name: String!
      price: Float!
      stock: Int!
      discount: Float!
      thumbnail: String!
    ): Product
    deleteProduct(id: ID!): Product
  }
`;

const resolvers = {
  Query: {
    getProducts: (_, { page, limit }) => {
      const startIndex = (page - 1) * limit;
      return products.slice(startIndex, startIndex + limit);
    },
    getProduct: (_, { id }) => products.find((product) => product.id === id),
  },
  Mutation: {
    createProduct: (_, { name, price, stock, discount, thumbnail }) => {
      const newProduct = {
        id: `${products.length + 1}`,
        name,
        price,
        stock,
        discount,
        thumbnail,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      products.push(newProduct);
      return newProduct;
    },
    updateProduct: (_, { id, name, price, stock, discount, thumbnail }) => {
      const productIndex = products.findIndex((product) => product.id === id);
      if (productIndex === -1) return null;

      const updatedProduct = {
        ...products[productIndex],
        name,
        price,
        stock,
        discount,
        thumbnail,
        updatedAt: new Date().toISOString(),
      };
      products[productIndex] = updatedProduct;
      return updatedProduct;
    },
    deleteProduct: (_, { id }) => {
      const productIndex = products.findIndex((product) => product.id === id);
      if (productIndex === -1) return null;
      return products.splice(productIndex, 1)[0];
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
