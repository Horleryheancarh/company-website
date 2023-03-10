import { Request, Response, NextFunction } from "express";

export const healthCheck = async ( req: Request, res: Response, next: NextFunction ) => {
  return res.json('Ready')
}

