export const getCategoryTitle = (product) => {
    let categoryTitle = "";
    switch (product.categoryId) {
        case 1:
          categoryTitle = "Annuals";
          break;
        case 2:
          categoryTitle = "Nursery";
          break;
        case 3:
          categoryTitle = "Garden Art";
          break;
        case 4:
          categoryTitle = "Plant Care";
          break;
        case 5:
          categoryTitle = "Seasonal";
          break;
        default:
          categoryTitle = "Loading...";
      }
      return categoryTitle
}