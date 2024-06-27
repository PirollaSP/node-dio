// todas as funçoes que lidam com produtos
const productType = {
    version: "digital",
    tax: "x1",
};

//hidden const
const apiURL = {
    url: "www.google.com/api",
}


async function getFullName(codeID, productName) {
    console.log("productX " +  codeID + " -- " + productName);
    await doBreackLine();
}


//hiden function
async function doBreackLine () {
    console.log("\n");
}

async function getProductLab(productName) {
    console.log("Product " + productName);
}

module.exports = {
    getFullName,
    getProductLab,
    productType,
};