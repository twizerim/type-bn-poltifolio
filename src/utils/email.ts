
import nodemailer from "nodemailer"

async function sendEmail(userInfo:string,blogData:string){

    const transpoter=nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        secure:true,
        auth:{
            user:process.env.Email,
            pass:process.env.PASSWORD
        }
    })

    const mailOptions={
        from:process.env.Email,
        to:userInfo,
        subject:"checke email",
        text:"hello all member you are allowed to my blog"
    }
}