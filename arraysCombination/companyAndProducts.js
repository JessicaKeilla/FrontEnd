import { getProducts, getUsers, getCompanies, getReviews } from './api.js';
import User from './classes/User.js';
import Review from './classes/Review.js';
import Product from './classes/Product.js';
import Company from './classes/Company.js';

// Funcao de dados
const buildDataStructure = async () => {
    const [usersData, reviewsData, productsData, companiesData] = await Promise.all([
        getUsers(),
        getReviews(),
        getProducts(),
        getCompanies()
    ]);

    const users = usersData.map(user => new User(user));
     console.log(users);
    // Pedidos
    const reviews = reviewsData.map(review => {
        const user = users.find(u => u.id === review.userId);
        return new Review(review.id, review.text, user);
    });
     console.log(reviews);

    // Produto
    const products = productsData.map(product => {
        const productReviews = product.reviewIds.map(id => reviews.find(r => r.id === id));
        return new Product(product.id, product.name, product.description, productReviews);
    });
     console.log(products);

    // Empresa
    const companies = companiesData.map(company => {
        const companyProducts = products.filter(p => p.companyId === company.id);
        return new Company(company.id, company.name, company.created, company.country, companyProducts);
    });
    console.log(companies);
};

buildDataStructure();