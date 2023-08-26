const express = require("express");
const app = express();
app.use(express.json());

const productsData = require("./productsData.js")

app.get("/", (req, res) => {
    res.json({
        message : "Hello world!",
        success : true
    })
})

app.get("/api/products", (req, res) => {
    res.json(productsData);
})

app.get("/api/products/:id", (req, res) => {
    const {id} = req.params;
    const singleProduct = productsData.find((product) => product.id === +id);

    if(singleProduct) {
        res.json(singleProduct);
    } else {
        res.status(404).json({
            message : "product not found",
            success: false
        });
    }
})

app.listen(4000, () => {
    console.log("server running on port 4000");
})