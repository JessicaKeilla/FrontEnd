class Product {
    constructor({ id, companyId, reviewIds, name, description }, reviews) {
        this.id = id;
        this.companyId = companyId;
        this.name = name;
        this.description = description;
        this.reviews = reviews;
    }
}
export default Product;