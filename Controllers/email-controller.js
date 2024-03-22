import EmailDBmodel from "../model/emailModel.js";
import DraftDBmodel from "../model/draftModel.js"

export const saveSentEmails=(req,res)=>{
    try {
        const email = new EmailDBmodel(req.body);
        email.save();
        res.status(200).json("email sent successfully");
    } 
    catch (error) {
        res.status(500).json(error)
    }
}
export const Starmark=async(req,res)=>{
    try{       
          await EmailDBmodel.updateOne(
            { _id: { $in: req.body } },
            [{$set:{starred:{$eq:[false,"$starred"]}}}]
        );
          res.status(200).json("done")
    }
    catch(error){
        res.status(500).json(error)
    }
}
export const movetobin= async (req,res)=>{
    try {
        console.log(req.params.param)
        if(req.params.param==="inbox" || req.params.param==="starred" || req.params.param==="sent" ){
            await EmailDBmodel.updateMany({_id:{$in: req.body}},{$set:{inbox:false, type:"bin", starred:false}});
            res.status(200).json("email(s) deleted successfully");
        }
        if(req.params.param==="bin"){
            await EmailDBmodel.deleteMany({_id:{$in:req.body}})
            res.status(200).json("email(s) deleted successfully");
        }
        if(req.params.param==="draft"){
            await DraftDBmodel.deleteMany({_id:{$in:req.body}})
            res.status(200).json("email(s) deleted successfully");
        }
    } 
    catch (error) {
        res.status(500).json(error)
        console.log(error)

    }
}

export const saveDraft=(req,res)=>{
    try {
        const email = new DraftDBmodel(req.body);
        email.save();
        res.status(200).json("email saved as draft");
    } 
    catch (error) {
        res.status(500).json(error)

    }
}

export const getEmails= async(request,response)=>{
    try {
        let emails;
        if(request.params.type==="sent"){
         emails=await EmailDBmodel.find({type:"sent"}).sort({ date: -1 });
        }
        if(request.params.type==="all mail"){
            emails=await EmailDBmodel.find({}).sort({ date: -1 });
           }
        if(request.params.type==="draft"){
        emails=await DraftDBmodel.find({type: "draft"}).sort({ date: -1 });
        }
        if(request.params.type==="bin"){
            emails=await EmailDBmodel.find({type: "bin"}).sort({ date: -1 });
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
