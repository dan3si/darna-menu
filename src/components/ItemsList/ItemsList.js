import Item from '../Item'
import Category from '../Category'
import CategoryHeader from '../CategoryHeader'
import { Route } from "react-router-dom";

const ItemsList = ({ items }) => {
    switch (items.type) {
        case 'categories':
            return (
                <>
                    <Route path={items.path} exact>
                        <CategoryHeader header={items.header} subHeader={items.subHeader} />
                    </Route> 
                    {items.data.map(
                        item => (
                            <Route path={items.path} exact>
                                <Category
                                    name={item.name}
                                    picture={item.picture}
                                    link={item.linkTo}
                                />
                            </Route> 
                        )
                    )}
                
                    {items.data.map(item => <ItemsList items={item.items} />)}
                </>
            )

        case 'items':
            return (
                <>
                    <Route path={items.path} exact>
                        <CategoryHeader header={items.header} subHeader={items.subHeader} />
                    </Route> 
                    <Route path={items.path} exact>
                        {items.data.map(
                            item => (
                                <Item
                                    name={item.name}
                                    picture={item.picture}
                                    price={item.price}
                                    available={item.available}
                                />
                            )
                        )}
                    </Route> 
                </>
            )
    }
}

export default ItemsList
