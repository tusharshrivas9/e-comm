// const cloudinary = require("../cloudinary/cloudinary")
// const addproduct = require("../model/addproduct")



// const cloud = async (req,res)=>{

//     const {name,price,image} = req.body

//     try {
//         if (!name,!price,!image) {
//             res.status(400),json({msg:"all fields are required"})
//         }
//         if (image) {
//           const uploadRes =  await cloudinary.uploader.upload(image,{
//                 upload_preset:"ml_default"
//             })
//             await addproduct.create({
//                 name,price,image:uploadRes
//             })
//         }

//         res.status(200).send("image uploaded")
//     } catch (error) {
//         console.log(error,"error");
//     }

// }

// const finds = async (req,res)=>{

//     try {
//         const product = await addproduct.find()

//         res.status(200).json({msg:product})
//     } catch (error) {
//        console.log(error,"error in finds"); 
//     }
// }


// module.exports = {cloud,finds}

const cloudinary = require("../cloudinary/cloudinary")
const addproduct = require("../model/addproduct")

const cloud =  async (req, res) => {
    const { name, cost, photo } = req.body

    try {
        if (!name || !cost || !photo) {
            return res.status(400).json({ msg: "All fields are required" })
        }

        const uploadRes = await cloudinary.uploader.upload(photo, {  
            upload_preset: "ml_default"
        })

        const newProduct = await addproduct.create({
            name,
            cost,
            photo: uploadRes.url // Storing the URL of the uploaded image
        })

        res.status(200).json({ msg: "Image uploaded", product: newProduct })
    } catch (error) {
        console.log(error, "error")
        res.status(500).json({ msg: "Internal Server Error" })
    }
}

const finds = async (req, res) => {
    try {
        const products = await addproduct.find()
        res.status(200).json({ products })
    } catch (error) {
        console.log(error, "error in finds")
        res.status(500).json({ msg: "Internal Server Error" })
    }
}

const deleteProduct = async(req,res)=>{
    try {
        const {_id} = req.params

        const delProduct = await addproduct.findByIdAndDelete(_id)

        if (!delProduct) {
            return res.status(400).json({msg:"product not found"})
        }
        res.json({msg:"product  deleted"})
    } catch (error) {
        console.log(error,"error in delete products");
    }
}

module.exports = { cloud, finds,deleteProduct }
