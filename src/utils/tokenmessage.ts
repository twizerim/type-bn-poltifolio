import {Response}  from "express";

export function tokenmessage(res: Response, status: number,token:string,data:any): void {
    res.status(status).json({
        token:token,
        datas:data
    });
}