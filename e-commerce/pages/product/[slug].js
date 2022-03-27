import React from "react";
import { useRouter } from "next/router";
import data from "../../utils/data";
import Layout from "../../components/Layout.js";
import NextLink from "next/link";
import {
  Link,
  Grid,
  List,
  ListItem,
  Button,
  Typography,
  Card,
} from "@material-ui/core";
import useStyles from "../../utils/styles";
import Image from "next/image";
import { Rating } from "@material-ui/lab";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import { IconButton } from "@material-ui/core";
const Product = () => {
  const classes = useStyles();
  const router = useRouter();

  const { slug } = router.query;
  const product = data?.products?.find((prod) => prod.slug === slug);
  if (!product) {
    return <div>Product not found</div>;
  } else {
    return (
      <Layout title={product.name} description={product.description}>
        <div className={classes.section}>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.center} >
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <ArrowBackOutlinedIcon />
                </IconButton>
                back to products
              </Typography>
            </Link>
          </NextLink>
        </div>
        <Grid container spacing={1}>
          <Grid item md={6} xs={12}>
            <Image
              src={product.image}
              alt={product.name}
              width={640}
              height={640}
              layout="responsive"
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <List>
              <ListItem>
                <Typography variant={"h1"}> {product.name}</Typography>
              </ListItem>
              <ListItem>
                <Typography> Category: {product.category}</Typography>
              </ListItem>
              <ListItem>
                <Typography> Brand: {product.brand} </Typography>
              </ListItem>
              <ListItem>
                <Typography className={classes.center}>
                  {" "}
                  Rating:{" "}
                  <Rating
                    name="read-only"
                    value={product.rating}
                    readOnly
                    precision={0.1}
                  />
                  ({product.numReviews} reviews)
                </Typography>
              </ListItem>
              <ListItem>
                <Typography> Description: {product.description} </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography>Price:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>${product.price}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Status:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      {product.countInStock > 0 ? (
                        <Typography color={"secondary"}>{"In Stock"}</Typography>
                      ) : (
                        <Typography style={{color:"red"}}>
                          {"Unavailable"}
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Button fullWidth color={"primary"} variant={"contained"}>
                    Add to cart{" "}
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    );
  }
};

export default Product;
