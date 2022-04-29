import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {collection, onSnapshot, query, where, doc, getDoc} from "firebase/firestore";
import {db} from "../firebase";

function Product() {
    const {id} = useParams();
    const [product, setProduct] = React.useState(null);
    let unsub;
    useEffect(() => {
        (async () => {
            const docRef = doc(db, "articles", id);
            const docSnap = await getDoc(docRef);
            setProduct(docSnap.data());
        })();
    }, []);
    console.log(product);
    return (
        <div>
            <h1>Chi tiet bai viet</h1>
            {product && <div>
                <h2>title: {product.title}</h2>
                <p>content :{product.content}</p>
            </div>
            }
        </div>
    );
}

export default Product;