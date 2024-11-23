import { Router } from "express";

const router = new Router;

router.get('/',(req,res)=>{
    res.send("server is successfully running ") 
})

export default router;