import { useCallback, useMemo } from "react";
import ProductItem from "../ProductItem/ProductItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/Reducers/cartItems";
import { addTolist } from "../../Redux/Reducers/Wishlist";
import showSuccessToast from "../../Utils/Toast/successToast";
import showErrorToast from "../../Utils/Toast/errorToast";
// style
import "./_Products.scss";


export default function Products() {
  const dispatch = useDispatch();
  // here%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  const { products, cartItems, wishlist } = useSelector((state) => ({
    products: state.products.products,
    cartItems: state.cart,
    wishlist: state.wishlist
  }));

  // for better readability and to avoid recalculating it on every render
  const featuredProducts = useMemo(() => products.slice(0, 8), [products]);

  // Helper function to check if an item exists in a list
  const findAndCheckDuplicate = (list, products, productID) => {
    const item = products.find((product) => product.id === productID);
    const isDuplicate = list.includes(item);
    return { item, isDuplicate };
  };

  //cartItems
  const addToCartHandler = useCallback((productID) => {
    const { item, isDuplicate } = findAndCheckDuplicate(cartItems, products, productID);
    if (isDuplicate) {
      showErrorToast("You have added this Item before!")
    } else {
      dispatch(addToCart(item));
      showSuccessToast("Item added to cart")
    }
  }, [cartItems, products, dispatch]);

  // wishlist
  const wishlistHandler = useCallback((productID) => {
    const { item, isDuplicate } = findAndCheckDuplicate(wishlist, products, productID);
    if (isDuplicate) {
      showErrorToast("You have added this Item before!")
    } else {
      dispatch(addTolist(item));
      showSuccessToast("Item added to wishlist")
    }
  }, [wishlist, products, dispatch])



  if (!products || products.length === 0) {
    return <p>No Products available!</p>
  }

  return (
    <Box>
      <em className="landing-section-title">Featured Products</em>
      <p className="landing-section-subtitle">Our Products</p>
      <p className="landing-section-details">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </p>
      <Grid container className="products-grid-container">
        {featuredProducts.map((product) => (
          <Grid key={product.id} item sx={12} sm={6} md={3} p={3}>
            <ProductItem
              addToWishlist={() => wishlistHandler(product.id)}
              addToCart={() => addToCartHandler(product.id)}
              {...product}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
