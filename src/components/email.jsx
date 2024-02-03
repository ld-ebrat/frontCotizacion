import React from 'react'

export default function Email({ product, total }) {
    return (
        <>
            <table style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>Producto</th>
                        <th style={{ textAlign: "center" }}>Detalles</th>
                        <th style={{ textAlign: "center" }}>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map(element => {
                            return (
                                <tr>
                                    <td style={{ textAlign: "center" }}>{element.name}</td>
                                    <td style={{ textAlign: "center" }}>{element.details}</td>
                                    <td style={{ textAlign: "center" }}>{element.price}</td>
                                </tr>
                            )
                        })

                    }
                    <tr>
                        <td style={{ columnSpan: "span 2", gridColumn: "span 2", textAlign: "center"}}>Total</td>
                        <td style={{ textAlign: "center" }}>{total}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
