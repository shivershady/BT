import React, {useEffect, useState} from 'react';
import {db} from "../firebase";
import {
    collection,
    onSnapshot,
    query,
    where,
} from "firebase/firestore";
import {Link, useParams} from "react-router-dom";

function ListProduct() {
    const {id} = useParams();
    const [listProduct, setListProduct] = useState([]);
    let unsub = null;
    useEffect(() => {
        (async () => {
            const collectionRef = collection(db, "articles");
            const q = query(collectionRef, where("categoryId", "==", id));
            unsub = onSnapshot(q, (snapShot) => {
                const localProdcuts = [];
                console.log("co su thay doi du lieu");
                snapShot.forEach((doc) => {
                    localProdcuts.push({ id: doc.id, title: doc.data().title});
                });
                setListProduct(localProdcuts);
            });
        })();
    }, []);
    return (
        <div>
            <h1>Danh sach san pham</h1>
            {listProduct.map((item, index) => {
                return (
                    <div key={index}>
                        <Link to={`/product/${item.id}`}>{item.title}</Link>
                    </div>
                )
            })}
        </div>
    );
}

export default ListProduct;
