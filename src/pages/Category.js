import React ,{useEffect , useState} from 'react';
import { db } from "../firebase";
import {
    collection,
    onSnapshot,
} from "firebase/firestore";
import { Link } from "react-router-dom";

function Category(props) {
    const [categories, setCategories] = useState([]);
    let unsub = null;
    useEffect(() => {
        (async () => {
            const collectionRef = collection(db, "categories");
            unsub = onSnapshot(collectionRef, (snapShot) => {
                const localCategories = [];
                snapShot.forEach((doc) => {
                    localCategories.push({ id: doc.id, name: doc.data().name });
                });
                setCategories(localCategories);
            });
        })();
    }, []);
    return (
        <div>
            <h1>Danh muc</h1>
            {categories.map((category) => (
                <Link className="block" to={`/list-product/${category.id}`} key={category.id}>
                    {category.name}
                </Link>
            ))}
        </div>
    );
}

export default Category;