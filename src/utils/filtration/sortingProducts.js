const sortingProducts = (products, typeOfSort) => {
    let sortedProducts = [...products];

    switch (typeOfSort) {
        case "new":
            sortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            break;
        case "old":
            sortedProducts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            break;
        case "priceDown":
            sortedProducts.sort((a, b) => {
                const aPrice = a.discont_price ? a.discont_price : a.price;
                const bPrice = b.discont_price ? b.discont_price : b.price;
                return bPrice - aPrice;
            });
            break;
        case "priceUp":
            sortedProducts.sort((a, b) => {
                const aPrice = a.discont_price ? a.discont_price : a.price;
                const bPrice = b.discont_price ? b.discont_price : b.price;
                return aPrice - bPrice;
            });
            break;
        case "AZ":
            sortedProducts.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
            break;
        default:
            break;
    }
    return sortedProducts;
};

export default sortingProducts