const express=require("express");
const app=express();
const cors=require("cors");
const port= process.env.PORT || 4050;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World")
})




const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = "mongodb+srv://nivedhacse08:Nethran31@cluster0.9e7dg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const prodcollect=client.db("hersheys").collection("Chocalte")
    app.post("/product",async(req,res)=>{
      const data = req.body;
      const result = await prodcollect.insertOne(data);
      res.send(result);
    });
    app.get("/allproducts",async(req,res)=>{
    const Chocalte=prodcollect.find();
    const result=await Chocalte.toArray();
    res.send(result);
    });
    app.get("/product/:id",async(req,res)=>{
    const id=req.params.id;
    const filter={_id:new ObjectId(id)};
    const result=await prodcollect.findOne(filter);
    res.send(result);
    });
    app.patch("/product/:id",async(req,res)=>{
    const id=req.params.id;
    const filter={_id:new ObjectId(id)};
    const update=req.body;
    const updateDoc={$set:{...update}};
    const option={upsert:true};
    const result=await prodcollect.updateOne(filter,updateDoc,option);
    res.send(result);
    });
    app.delete("/product/:id",async(req,res)=>{
    const id= req.params.id;
    const filter={_id:new ObjectId(id)};
    const result=await prodcollect.deleteOne(filter);
    res.status(200)
    .json({success:true,message:"data deleted successfully",result})
    });
    const prodcollect1=client.db("hersheys").collection("Cakes")
    app.post("/cproduct",async(req,res)=>{
      const data = req.body;
      const result = await prodcollect1.insertOne(data);
      res.send(result);
    });
    app.get("/callproducts",async(req,res)=>{
      const Cakes=prodcollect1.find();
      const result=await Cakes.toArray();
      res.send(result);
      });
      app.patch("/cproduct/:id",async(req,res)=>{
        const id=req.params.id;
        const filter={_id:new ObjectId(id)};
        const update=req.body;
        const updateDoc={$set:{...update}};
        const option={upsert:true};
        const result=await prodcollect1.updateOne(filter,updateDoc,option);
        res.send(result);
        });
        app.delete("/cproduct/:id",async(req,res)=>{
          const id= req.params.id;
          const filter={_id:new ObjectId(id)};
          const result=await prodcollect1.deleteOne(filter);
          res.status(200)
          .json({success:true,message:"data deleted successfully",result})
          });
    const prodcollect2=client.db("hersheys").collection("Gifts")
    app.post("/gproduct",async(req,res)=>{
      const data = req.body;
      const result = await prodcollect2.insertOne(data);
      res.send(result);
    });
    app.get("/gallproducts",async(req,res)=>{
      const Gifts=prodcollect2.find();
      const result=await Gifts.toArray();
      res.send(result);
      });
      app.patch("/gproduct/:id",async(req,res)=>{
        const id=req.params.id;
        const filter={_id:new ObjectId(id)};
        const update=req.body;
        const updateDoc={$set:{...update}};
        const option={upsert:true};
        const result=await prodcollect2.updateOne(filter,updateDoc,option);
        res.send(result);
        });
        app.delete("/gproduct/:id",async(req,res)=>{
          const id= req.params.id;
          const filter={_id:new ObjectId(id)};
          const result=await prodcollect2.deleteOne(filter);
          res.status(200)
          .json({success:true,message:"data deleted successfully",result})
          });
      const prodcollect3=client.db("hersheys").collection("Sweets")
          app.post("/sproduct",async(req,res)=>{
            const data = req.body;
            const result = await prodcollect3.insertOne(data);
            res.send(result);
          });
          app.get("/sallproducts",async(req,res)=>{
            const Sweets=prodcollect3.find();
            const result=await Sweets.toArray();
            res.send(result);
            });
            app.patch("/sproduct/:id",async(req,res)=>{
              const id=req.params.id;
              const filter={_id:new ObjectId(id)};
              const update=req.body;
              const updateDoc={$set:{...update}};
              const option={upsert:true};
              const result=await prodcollect3.updateOne(filter,updateDoc,option);
              res.send(result);
              });
              app.delete("/sproduct/:id",async(req,res)=>{
                const id= req.params.id;
                const filter={_id:new ObjectId(id)};
                const result=await prodcollect3.deleteOne(filter);
                res.status(200)
                .json({success:true,message:"data deleted successfully",result})
                });
      



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port,()=>{
console.log(`Server running on ${port}`);

})

