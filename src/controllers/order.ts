import database from "../config/dbConnection";

export const createOrder = (data: Array<number[]>) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO orders (product, quantity, total_price, discount) VALUES ?`;
    
    database.query(query, [data], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

export const getOrderDetails=()=>{
  return new Promise((resolve, reject) => {
    const query = `SELECT
    p.*,
    d.name as product_name
   FROM
       orders p
   LEFT JOIN
       products d ON p.product = d.id`;
    
    database.query(query, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
}
