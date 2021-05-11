import { NextApiRequest, NextApiResponse } from "next";
import Telegram from "node-telegram-bot-api";
const token = "1748634556:AAEXRMyukRB5jvlCTC98Pcj1vfKXi1FEMRg";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email } = req.body;
  const bot = new Telegram(token);

  bot.sendMessage(-593756701, `Novo usuário\nNome: ${name}\nEmail: ${email}`)
    .then(() => res.send({ status: true }))
    .catch((err) => res.send({ status: false, err }))
};
