import React from "react";
import { Box, Container } from "@mui/system";
import Grid from '@mui/material/Grid';
import Navbar from "./Navbar";
import "../component/style.css";
import Menu from "./MenuApi";
import { Button } from "@mui/material";
// import Popup from "./Popup";
// import Popup from "./Popup";
function Product() {


    return (
        <>
            <Box
                component="div"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
                className="navbar"
            >
                <Navbar />
                {/* <Popup/> */}
            </Box>
            {/* {menuData.cartItem.map((curEle, i) => { */}
            {
                Menu.map((product) => {
                    return (
                        <Box component="div"
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                            mt="5rem"
                        >

                            <Container maxWidth="xl">
                                <Grid container>
                                    <Grid item xs={5} className="product-left">
                                        <img src="/images/todo.svg" alt="product" />
                                    </Grid>
                                    <Grid item xs={7}>
                                        <div id="product">
                                            <div className="product_details">
                                                <h2>{product.name}</h2>
                                                <h3>{product.price}</h3>

                                                <div className="about">
                                                    <p>Availability :<span>In stock</span></p>
                                                    <p>Product Code : <span>{product.id}</span></p>
                                                </div>

                                                <p>{product.description}</p>
                                                <div className="cta">
                                                    <Button variant="contained">Add to cart</Button>
                                                </div>
                                            </div>
                                        </div>


                                    </Grid>
                                </Grid>
                            </Container>

                        </Box>

                    )
                })
            }

        </>
    );
}

export default Product;
