
import { getProducts, getUsers, getCompanies, getReviews } from './api.js';
import User from './classes/User.js';
import Review from './classes/Review.js';
import Product from './classes/Product.js';
import Company from './classes/Company.js';


// Основная функция обработки данных
const buildDataStructure = async () => {
    const [usersData, reviewsData, productsData, companiesData] = await Promise.all([
        getUsers(),
        getReviews(),
        getProducts(),
        getCompanies()
    ]);

    // Создание объектов пользователей
    const users = usersData.map(user => new User(user));


    // Создание объектов отзывов
    const reviews = reviewsData.map(review => {
        const user = users.find(u => u.id === review.userId);
        return new Review(review.id, review.text, user);
    });


    // Создание объектов продуктов
    const products = productsData.map(product => {
        const productReviews = product.reviewIds.map(id => reviews.find(r => r.id === id));
        return new Product(product.id, product.name, product.description, productReviews);
    });

    // Создание объектов компаний
    const companies = companiesData.map(company => {
        const companyProducts = products.filter(p => p.companyId === company.id);
        return new Company(company.id, company.name, company.created, company.country, companyProducts);
    });

    // Вывод объединённой структуры данных
    console.log(companies);
};

buildDataStructure();