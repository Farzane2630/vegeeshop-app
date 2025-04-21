import React, { useCallback, useMemo, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Grid from "@mui/material/Grid";
import ProductItem from "../../components/ProductItem/ProductItem";
import CustomPagination from "../../Utils/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../Redux/Reducers/products";
import { addToCart } from "../../Redux/Reducers/cartItems";
import { addTolist } from "../../Redux/Reducers/Wishlist";
import { v4 as uuidv4 } from "uuid";
import showSuccessToast from "../../Utils/Toast/successToast";
import showErrorToast from "../../Utils/Toast/errorToast";
// style
import "swiper/css";
import "./_Products.scss";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const categories = useSelector((state) => state.products.categories);
  const selectedCategory = useSelector((state) => state.products.selectedCategory);
  const cartItems = useSelector(state => state.cart)
  const wishlist = useSelector(state => state.wishlist)

  //cartItems
  const addToCartHandler = useCallback((product) => {
    if (cartItems?.length > 1 && cartItems.includes(product)) {
      showErrorToast("You have added this Item before!")
    } else {
      showSuccessToast("Item added to cart")
      const updatedProductObject = {
        id: uuidv4(),
        quantity: 1,
        ...product,
      };

      dispatch(addToCart(updatedProductObject));
    }
  }, [cartItems, dispatch])

  //wishlist
  const wishlistHandler = useCallback((productID) => {
    const favoriteItem = products.find((product) => product.id === productID);
    if (wishlist.includes(favoriteItem)) {
      showErrorToast("You have added this Item before!")
    } else {
      showSuccessToast("Item has been added to your wishlist.")
    }
    dispatch(addTolist(favoriteItem));
  }, [products, wishlist, dispatch])


  // filtered Products
  const filterProductsHandel = useCallback((category) => {
    dispatch(selectCategory(category));
  }, [dispatch])


  // Problem: The filteredProducts array is recalculated on every render, even if the products or selectedCategory hasn't changed.
  //Solution: Use useMemo to memoize the filtered products.
  const filteredProducts = useMemo(() => {
    return selectedCategory && selectedCategory !== "All"
      ? products.filter((product) => product.category === selectedCategory)
      : products;
  }, [products, selectedCategory])

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsCountPerPage = 8;
  const shownItems = useMemo(() => {
    const indexOfLastItem = currentPage * itemsCountPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsCountPerPage;
    return filteredProducts.slice(indexOfFirstItem, indexOfLastItem)
  }, [filteredProducts, currentPage, itemsCountPerPage])

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Header indexPage={false} pageTitle="PRODUCTS" />

      <ul className="filter">
        {categories.map((category) => (
          <li
            key={category.id}
            className="filter-item"
            onClick={() => filterProductsHandel(category.title)}
          >
            {category.title}
          </li>
        ))}
      </ul>

      <Grid container className="products-wrapper">
        {shownItems.map((product) => (
          <Grid key={product.id} item sx={12} sm={6} md={3} p={3}>
            <ProductItem
              addToWishlist={() => wishlistHandler(product.id)}
              addToCart={() => addToCartHandler(product)}
              {...product}
            />
          </Grid>
        ))}
      </Grid>
      <CustomPagination
        items={filteredProducts}
        itemsCount={itemsCountPerPage}
        onPageChange={handlePageChange}
      />
      <Footer />
    </>
  );
}
