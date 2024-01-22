import database from "../config/dbConnection";

export const createProduct = ({
  name,
  quantity,
  price,
  discount = null,
  imageUrl,
}: {
  name: string;
  quantity: number;
  price: number;
  discount: number | null;
  imageUrl: string;
}) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO products (name,quantity,price,discount,image) VALUES (?,?,?,?,?)`;
    database.query(
      query,
      [name, quantity, price, discount, imageUrl],
      (err, result) => {
        if (err) reject(err);
        resolve(result);
      }
    );
  });
};

export const getAllProduct = () => {
  return new Promise((resolve, reject) => {
    const query = `SELECT
    p.*,
    d.id as discount_id,
    d.type as discount_type,
    d.discount_price as discount_price,
    d.percentage as discount_percentage,
    d.free_product as freeproduct,
     freeproduct.id as freeproduct_id,
     freeproduct.name as freeproduct_name,
     freeproduct.quantity as freeproduct_quantity,
     freeproduct.price as freeproduct_price,
     freeproduct.discount as freeproduct_discount,
      freeproduct.image as freeproduct_image,
       freeproduct.createdAt as freeproduct_createdAt
  FROM
      products p
  LEFT JOIN
      discounts d ON p.discount = d.id
  LEFT JOIN
      products freeproduct ON d.free_product = freeproduct.id;`;
    // `SELECT * FROM products`;
    database.query(query, (err, result) => {
      if (err) reject(err);
      console.log(result);

      resolve(result);
    });
  });
};

export const editProductDetails = ({
  id,
  image,
  name,
  price,
  quantity,
  discount,
}: {
  id: number;
  image?: string;
  name?: string;
  price?: number;
  quantity?: number;
  discount?: number;
}) => {
  const query = `UPDATE products SET 
  image = COALESCE(?, image),
  name = COALESCE(?, name),
  price = COALESCE(?, price),
  quantity = COALESCE(?, quantity),
  discount = COALESCE(?, discount)
  WHERE id = ?`;
  return new Promise((resolve, reject) => {
    database.query(
      query,
      [image, name, price, quantity, discount, id],
      (err, result) => {
        if (err) reject(err);
        resolve(result);
      }
    );
  });
};
