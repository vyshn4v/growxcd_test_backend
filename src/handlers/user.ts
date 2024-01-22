import { Request, Response } from "express";
import { getAllProduct } from "../controllers/product";
import { createOrder, getOrderDetails } from "../controllers/order";

export const getProduct = (req: Request, res: Response) => {
  getAllProduct()
    .then((product) => {
      res.status(200).json(product);
    })
    .catch(() => {
      res.status(404).json({ error: "Something went wrong" });
    });
};

export const orderProduct = async (req: Request, res: Response) => {
  try {
    const { orders } = req.body;
    console.log(orders);

    if (!orders?.length) {
      return res.status(422).json({ message: "Params required" });
    }
    let ordersArray = orders?.map(
      ({
        product,
        quantity,
        total_price,
        discount,
      }: {
        product: number;
        quantity: number;
        total_price: number;
        discount: number;
      }) => {
        return [product, quantity, total_price, discount];
      }
    );
    const order = await createOrder(ordersArray);
    res.status(200).json(order);
  } catch (err) {
    console.log(err);

    res.status(404).json({ error: "Something went wrong" });
  }
};

export const getOrders = (req: Request, res: Response) => {
  getOrderDetails().then((orders) => {
    res.status(200).json(orders);
  });
};
