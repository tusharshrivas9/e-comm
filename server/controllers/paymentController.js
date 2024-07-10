const stripe = require("stripe")("sk_test_51PZCUMRu7RWcdTVnnnndDoAgllTeBNKTYv4alPGoZLwV6c5VivN2A8S7Qt08uwQof4DbfB5PvFwEQP0TavxluhTZ00XmTNahAJ")

const stripePay = async (req,res)=>{

    const {products} = req.body

    console.log(products);

    const lineitems = products.map((pro,indx)=>({
         price_data:{
            currency:"inr",
            product_data:{
                name:pro.name
            },
            unit_amount:pro.cost * 100,
        },
        quantity:pro.qty
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineitems,
        mode:"payment",
        success_url:"http://localhost:3000/sucess",
        cancel_url:"http://localhost:3000/cancel" 
    })
    res.json({id:session.id}) 
     }

module.exports = stripePay ; 


// const stripe = require("stripe")("sk_test_51PZCUMRu7RWcdTVnnnndDoAgllTeBNKTYv4alPGoZLwV6c5VivN2A8S7Qt08uwQof4DbfB5PvFwEQP0TavxluhTZ00XmTNahAJ");

// const stripePay = async (req, res) => {
//   const { products } = req.body; // Destructure products from req.body

//   if (!Array.isArray(products)) {
//     return res.status(400).json({ error: "Invalid products data" });
//   }

//   try {
//     const lineitems = products.map((pro, indx) => ({
//       price_data: {
//         currency: "inr",
//         product_data: {
//           name: pro.name,
//         },
//         unit_amount: pro.cost * 100, // Change 'price' to 'cost' to match the client-side
//       },
//       quantity: pro.qty,
//     }));

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: lineitems,
//       mode: "payment",
//       success_url: "http://localhost:3000/success",
//       cancel_url: "http://localhost:3000/cancel",
//     });

//     res.json({ id: session.id });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// module.exports = stripePay;
