import EmailDBmodel from "../model/emailModel.js";
import DraftDBmodel from "../model/draftModel.js"

export const saveSentEmails=(req,res)=>{
    try {
        const email = new EmailDBmodel(req.body);
        email.save();
        res.status(200).json("email sent successfull");
    } 
    catch (error) {
        console.log(error)
    }
}
export const movetobin= async (req,res)=>{
    try {
        await EmailDBmodel.updateMany({_id:{$in: req.body}},{$set:{starred:false,type:"bin",inbox:false}});
        res.status(200).json("email sent successfull");
    } 
    catch (error) {
        console.log(error)
    }
}

export const saveDraft=(req,res)=>{
    try {
        const email = new DraftDBmodel(req.body);
        email.save();
        res.status(200).json("email sent successfull");
    } 
    catch (error) {
        console.log(error)
    }
}

export const getEmails= async(request,response)=>{
    try {
        let emails;
        if(request.params.type==="sent"){
         emails=await EmailDBmodel.find({type: request.params.type}).sort({ date: -1 });
        }
        if(request.params.type==="draft"){
            emails=await DraftDBmodel.find({type: request.params.type}).sort({ date: -1 });
        }
        if(request.params.type==="bin"){
            emails=await EmailDBmodel.find({type: request.params.type}).sort({ date: -1 });
        }
        if(request.params.type==="starred"){
            emails=await EmailDBmodel.find({starred:true}).sort({ date: -1 });
        }
        if(request.params.type==="inbox"){
            emails=await EmailDBmodel.find({inbox:true}).sort({ date: -1 });
        }  
        response.status(200).json(emails)
    } catch (error) {
        response.status(500).json(error)
    }
}
