import Email from "../model/email.js";

const saveSentEmails=(req,res)=>{
    try {
        const email = new Email(req.body);
        email.save();

        res.status(200).json("email sent successfull");
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export default saveSentEmails;