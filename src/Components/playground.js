import React, { useState } from "react";

const productData = [
    { id: 1, label: "product1", description: "description1" },
    { id: 2, label: "product2", description: "description2" },
    { id: 3, label: "product3", description: "description3" },
    { id: 4, label: "product4", description: "description4" },
    { id: 5, label: "product5", description: "description5" },
    { id: 6, label: "product6", description: "description6" },
    { id: 7, label: "product7", description: "description7" },
];

const Products = () => {
    const [showModal, setShowModal] = useState(false);
    const [activeObject, setActiveObject] = useState(null);
    console.log(showModal)

    function getClass(index) {
        return index === activeObject?.id ? "active" : "inactive";
    }

    // here className can not be "inactive" since Modal always shows activeObject
    const Modal = ({ object: { label, description } }) => (
        <div id="productModal" className="active">
            This is modal
            <h2>{label}</h2>
            <span className="description">{description}</span>
            <button onClick={() => setShowModal(false)}>Close me</button>
        </div>
    );

    return (
        <>
            <ul className="list-menu">
                {productData.map(({ id, label, description }) => (
                    <li
                        key={id}
                        onClick={() => {
                            setActiveObject({ id, label, description });
                            setShowModal(true);
                        }}
                        className={getClass(id)}
                    >
                        <h2>{label}</h2>
                    </li>
                ))}
            </ul>
            {showModal ? <Modal object={activeObject} /> : null}
        </>
    );
};

export default Products;