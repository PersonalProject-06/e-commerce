import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link"
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import { Card, Grid, CardActionArea, CardMedia, CardContent,Typography, CardActions ,Button} from "@material-ui/core";
import data from "../utils/data";
const Home = () => {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data?.products?.map(
            ({
              name,
              category,
              image,
              price,
              brand,
              rating,
              numReviews,
              countInStock,
              description,
              slug
            }) => (
              <Grid item md={4} key={name}>

                <Card>
                  <NextLink href={`/product/${slug}`} passHref>
                     <CardActionArea>
                    <CardMedia component={"img"} image={image} title={name} alt={name}></CardMedia>
                    <CardContent>
                      <Typography>{name}</Typography>
                    </CardContent>
                  </CardActionArea>
                  </NextLink>
                  <CardActions>
                    <Typography>${price}</Typography>
                    <Button size={"small"} color={"primary"}>Add to cart</Button>
                  </CardActions>
                
                 
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </div>
    </Layout>
  );
};

export default Home;
