import React from "react";
import { useRouter } from "next/router";
import data from "../../utils/data";
import Layout from "../../components/Layout.js";
import NextLink from "next/link";
import { Link ,Grid ,List,ListItem} from "@material-ui/core";
import useStyles from "../../utils/styles"
import Image from "next/image"
import {Rating} from '@material-ui/lab'
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import {
 
  IconButton,
} from "@material-ui/core";
const Product = () => {
  const classes =useStyles(); 
   const router = useRouter();

  const { slug } = router.query;
  const product = data?.products?.find((prod) => prod.slug === slug);
  if (!product) {
    return <div>Product not found</div>;
  } else {
    return (
      <Layout title={product.name}>
        <div className={classes.section}>
          <NextLink href="/" passHref>
            <Link>  <IconButton
          
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <ArrowBackOutlinedIcon  />
                
                </IconButton>
                back to products
             
             </Link>
          </NextLink>
        </div>
        <Grid container spacing={1} >
         <Grid item md={6} xs={12}>
           <Image src={product.image}  alt={product.name} width={640} height={640} layout="responsive"/>
         </Grid>
         <Grid item md={3} xs={12}>
           <List>
             <ListItem>
               Category: {product.category}
             </ListItem>
             <ListItem>
               Brand: {product.brand}
             </ListItem>
             <ListItem>
               Rating: <Rating name="read-only" value={product.rating} readOnly precision={0.5} /> ({product.numReviews} reviews)
             </ListItem>
             
           </List>
         </Grid>
        </Grid>
      </Layout>
    );
  }
};

export default Product;
