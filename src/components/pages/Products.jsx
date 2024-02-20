import { useEffect, useState } from "react"
import useFecth from "../../hooks/useFecth"
import Loader from "../atoms/Loader"
import ProductCard from "../molecules/ProductCard"

const Products = () => {

    const {data,error,loading} = useFecth(`public/products`)
    const [result , setResult] = useState([])

    useEffect( () => {
        if(data) setResult(data)
    },[data])

    const handletProduct = (e) => {
       
        const filterValue = e.target.value.toLocaleLowerCase()

        setResult(
            data.filter( p => JSON.stringify(p).toLocaleLowerCase().includes(filterValue))
        )
    }

    if(loading) return <Loader/>
    if(error) return <div>{error?.message}</div>

    return (  
        <section className="py-16 max-w-256 m-auto">
            <h1 className="text-3xl mb-6">Explora nuestros Productos</h1>
            <input type="text" placeholder="Buscar Producto" onChange={handletProduct}/>
            <div className="grid grid-cols-4 gap-6">
                {
                    result.map( (product) =>
                        (
                            <ProductCard key={product.id} product={product} />
                        ))
                }
            </div>
        </section>  
    )
}

export default Products