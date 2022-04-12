import { useMemo } from "react";
import { ProductItem } from "./ProductItem";
import { List, ListRowRenderer } from 'react-virtualized';

interface SearchResultsProps {
    results: Array <{
        id: number;
        price: number;
        title: string;
        priceFormatted: string;
    }>;
    totalPrice: number;
    onAddToWishList: (id: number) => void;
}

export function SearchResults({ results, onAddToWishList, totalPrice }: SearchResultsProps) {
    // const totalPrice = useMemo(() => {
    //     return results.reduce((total, product) => {
    //         return total + product.price;
    //     }, 0)
    // }, [results])

    const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
        return (
            <div key={ key } style={style}>
                <ProductItem 
                    product={results[index]}
                    onAddToWishList={onAddToWishList} 
                />
            </div>
        )
    }

    return (
        <div>
            <h2>{totalPrice}</h2>

            {/* { results.map(product => {
                return (
                    <ProductItem
                      key={product.id}
                      product={product}
                      onAddToWishList={onAddToWishList} 
                    />
                )
            }) } */}

            <List 
                height={300}
                rowHeight={30}
                width={900}
                overscanRowCount={5}
                rowCount={results.length}
                rowRenderer={rowRenderer}
            />
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

/* 
React-virtualized

Biblioteca de virtualização.
Pode ser utilizada para um melhor delivery no caso de apresentação de muitos dados.

A do exemplo, carrega apenas 10 itens em tela, (mais 5 para cima e 5 para baixo, se houver), e,
coonforme vai dando o scroll, vai carregando mais itens

*/