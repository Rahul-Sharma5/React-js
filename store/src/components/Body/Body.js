import './Body.css';

import poster1 from '../../image/poster1.jpg';
import poster2 from '../../image/poster2.jpg';
import Footer from '../Footers/Footer';
import { useState, useEffect } from 'react';

const Body = () => {


    const [products, setProduct] = useState([])

    const data = async () => {
        const fetchData = await fetch('https://fakestoreapi.com/products')
        setProduct(await fetchData.json());
    }

    useEffect(() => {
        data();
    }, [])


    return (
        <>
            <div className="container">

                {console.log(products)
                }

                <div className="row">
                    <div className="col-8" style={{ objectFit: 'fill' }}>
                        <img src={poster1} alt="img" />
                    </div>

                    <div className="col-4" style={{ objectFit: 'fill' }}>
                        <img src={poster2} alt="img" />
                    </div>
                </div>

                {/*<div className="row">
                    <div className="col" style={{ backgroundColor: "#010210" }}>.col</div>
                    <div className="col" style={{ backgroundColor: "#017610" }}>.col</div>
                    <div className="col" style={{ backgroundColor: "#010201" }}>.col</div>
                    <div className="col" style={{ backgroundColor: "#121290" }}>.col</div>
                </div>*/}

                <div className="flex-grow-3 overflow-y-lg-auto">
                    <main className="py-6">
                        <div className="container-fluid">
                            <div className="row g-6 mb-2">

                                <div>
                                    <div class="row align-items-center" style={{ backgroundColor: "#fffff1" }}>
                                        <div class="d-block mt-2 mb-2 align-items-center">
                                            <h1 class="h2 mb-0 ls-tight">Product Name</h1>
                                        </div>
                                    </div>
                                </div>

                                {products.map((data) => {
                                    return (
                                        <div className="col-xl-3 col-sm-6 col-12 mt-4">
                                            <div className="card">
                                                <div className="px-2 pt-2 position-relative">
                                                    <img alt="..." style={{ width: '80px', height: '80px' }} src={data.image} className="card-img" />
                                                </div>

                                                <div className="card-body">
                                                    <h3 className="text-base text-muted font-semibold mb-3">Product name</h3>
                                                    <span className="d-block h3 mb-3">Rs: {data.price * 100}</span>
                                                        <butto onClick={() => { console.log(data) }} className="button-37 " role="button">Button 37</butto>     
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </main>
                </div>

            </div>

            <Footer></Footer>
        </>
    )
}

export default Body;