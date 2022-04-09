import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    results: Array <{
        id: number;
        price: number;
        title: string;
    }>
    onAddToWishList: (id: number) => void;
}

export function SearchResults({ results, onAddToWishList }: SearchResultsProps) {
    const totalPrice = useMemo(() => {
        return results.reduce((total, product) => {
            return total + product.price;
        }, 0)
    }, [results])

    return (
        <div>
            <h2>{totalPrice}</h2>

            { results.map(product => {
                return (
                    <ProductItem
                      key={product.id}
                      product={product}
                      onAddToWishList={onAddToWishList} 
                    />
                )
            }) }
        </div>
    )
}

/* useMemo

    useMemo faz com que função só seja chamada se houver alteraçao na variável de dependência
    Sem a função, sempre que SearchResults for chamado, totalPrice sempre será recalculada
    Utilizada para salvar um valor

    Utilizada quando:
    1 - Cálculos pesados
    2 - Igualdade referencial (quando a gente repassa aquela info ä um componente filho)
*/

/* useCallback

    Parecido com useMemo, mas para funções
*/