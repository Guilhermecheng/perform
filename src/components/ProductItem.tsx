import { memo } from 'react';

interface ProductItemProps {
    product: {
        id: number;
        price: number;
        title: string;
    }
    onAddToWishList: (id: number) => void;
}

export function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
    return (
        <div>
            { product.title } - <strong>{ product.price }</strong>
            <button onClick={() => onAddToWishList(product.id)} >Add to Wishlist</button>
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
});

/* 
    Sempre que um componente pai sofre atualização, todos os filhos sofrem também..

    funçao memo: ao ser atualizado, o react compara o componente ProductItemComponent, e, ao ver que o mesmo
    não foi alterado, não cria uma nova versão do comp. => faz apenas um shallow compar (comparação rasa)

    segundo parâmetro: funcão que indica condição que satizfaz o "nao atualizar"

    quando utilizar:
    1 - pure functional components
    2 - renders too often
    3 - re-renders with same props
    4 - medium to big size
*/