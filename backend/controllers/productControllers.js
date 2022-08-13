
exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "This route will show all products on Database",
        code: "Hello world"
    });
}

console.log("hello world")