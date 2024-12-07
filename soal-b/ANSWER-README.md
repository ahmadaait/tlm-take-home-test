# Assessment Point B

## Installation Requirements

1. Node.js
2. MySQL
3. NPM or Yarn (optional)
4. GraphQL Playground or Postman (optional)

### MySQL

1.  Go to `soal-b/1-5` directory.
2.  Create a new database.
3.  Execute `scheme.sql` to create database and tables.
4.  Try queries from answer section below. (1-5)

### GraphQL

1. Go to `soal-b/6-10/graphql-server` directory.
2. Install dependencies

   ```bash
   yarn install
   ```

3. Run the server

   ```bash
   yarn start
   ```

4. Open `http://localhost:4000` in your browser to access GraphQL Playground or you can use Postman to send GraphQL queries.
5. Try queries from answer section below. (6-10)

## Answer

1. Get all users - MySQL Query

   ```sql
   SELECT * FROM users;
   ```

2. Insert data user - MySQL Query

   ```sql
   INSERT INTO users (namaLengkap, email, noHandphone, password)
   VALUES ('John Doe', 'johndoe@example.com', '081234567890', 'password123');
   ```

3. Update user - MySQL Query

   ```sql
   UPDATE users
   SET namaLengkap = 'John Doe Updated',
        email = 'johndoeupdated@example.com',
        noHandphone = '081298765432',
        password = 'newpassword123'
   WHERE id = 1;
   ```

4. Delete user - MySQL Query

   ```sql
   DELETE FROM users
   WHERE id = 1;
   ```

5. Get data with joining table users and orders - MySQL Query

   ```sql
   SELECT
    orders.order_id,
    orders.total,
    orders.shipping_cost,
    orders.discount,
    users.namaLengkap,
    users.email,
    users.noHandphone
   FROM orders
   JOIN users ON orders.user_id = users.id;
   ```

6. Get data products with pagination - GraphQL Query

   ```graphql
   query {
     getProducts(page: 2, limit: 10) {
       id
       name
       price
       stock
       discount
       thumbnail
       createdAt
       updatedAt
     }
   }
   ```

7. Get data product by id - GraphQL Query

   ```graphql
   query {
     getProduct(id: "1") {
       id
       name
       price
       stock
       discount
       thumbnail
       createdAt
       updatedAt
     }
   }
   ```

8. Insert data product - GraphQL Mutation

   ```graphql
   mutation {
     createProduct(
       name: "Product 21"
       price: 10000
       stock: 30
       discount: 0
       thumbnail: "thumbnail21.jpg"
     ) {
       id
       name
       price
       stock
       discount
       thumbnail
       createdAt
       updatedAt
     }
   }
   ```

9. Update data product - GraphQL Mutation

   ```graphql
   mutation {
     updateProduct(
       id: "1"
       name: "Product 21 Updated"
       price: 20000
       stock: 60
       discount: 10
       thumbnail: "thumbnail-21.jpg"
     ) {
       id
       name
       price
       stock
       discount
       thumbnail
       createdAt
       updatedAt
     }
   }
   ```

10. Delete data product - GraphQL Mutation

    ```graphql
    mutation {
      deleteProduct(id: "1") {
        id
        name
        price
        stock
        discount
        thumbnail
        createdAt
        updatedAt
      }
    }
    ```
