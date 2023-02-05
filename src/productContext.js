import React, { useState, useContext, useEffect } from "react";

export const Context = React.createContext("productContext");

const ProductContext = ({ children }) => {
    const [allproducts, setAllProducts] = useState([]);
    const [allcategories, setAllcategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');
    const [searchquery, setSearchQuery] = useState('');
    const [categorizedproduct, setcategorizedProduct] = useState([])
    const [slideToggle, setSlideToggle] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const response = await fetch(`https://fakestoreapi.com/products?limit=6`);
                const products = await response.json();
                setAllProducts(products);
                setLoading(false)
            } catch (e) {
                console.error(e);
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/categories`);
                const categories = await response.json();
                setAllcategories(categories);
            } catch (e) {
                console.error(e);
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const response = await fetch(`https://fakestoreapi.com/products/category/${currentCategory}`);
                const categoriesproducts = await response.json();
                setcategorizedProduct(categoriesproducts);
                setLoading(false)
            } catch (e) {
                console.error(e);
            }
        })()
    }, [currentCategory])

    const handlesearchChange = (e) => {
        setSearchQuery(e.target.value)
    }


    let contextValue = {
        allproducts,
        allcategories,
        currentCategory,
        searchquery,
        setCurrentCategory,
        categorizedproduct,
        setSearchQuery,
        handlesearchChange,
        slideToggle,
        setSlideToggle,
        loading
    };

    return (
        <>
            <Context.Provider value={contextValue}>
                {children}
            </Context.Provider>
        </>
    );

}

export default ProductContext;

export const useProducts = () => useContext(Context)