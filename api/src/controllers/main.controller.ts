import { Request, Response, NextFunction } from "express";

export const contactUs = async ( req: Request, res: Response, next: NextFunction ) => {
  return res.json({
    msg: "Sent Mail"
  })
}

