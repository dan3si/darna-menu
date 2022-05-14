import Item from '../Item'
import Category from '../Category'
import CategoryHeader from '../CategoryHeader'
import { Route } from "react-router-dom";

import { toKebabCase } from '../../utils/functions'
import React from 'react';

const ItemsList = ({ category, path }) => {
    switch (category.contentType) {
        case 'categories':
            return (
                <>
                    <Route path={path} exact>
                        <CategoryHeader header={category.name} />
                    </Route>

                    {category.items.map(
                        item => (
                            <React.Fragment key={item.name}>
                                <Route path={path} exact>
                                    <Category
                                        name={item.name}
                                        picture={item.picture}
                                        link={`${path}/${toKebabCase(item.name)}`}
                                    />
                                </Route>

                                <ItemsList category={item} path={`${path}/${toKebabCase(item.name)}`}/>
                            </React.Fragment>
                        )
                    )}
                </>
            )

        case 'items':
            return (
                <>
                    <Route path={path} exact>
                        <CategoryHeader header={category.name} />
                    </Route>

                    {category.items.map(
                        item => (
                            <React.Fragment key={item.name}>
                                <Route path={path} exact>
                                    <Item
                                        name={item.name}
                                        picture={item.picture}
                                        price={item.price}
                                        available={item.available}
                                    />
                                </Route>
                            </React.Fragment>
                        )
                    )}
                </>
            )

        default:
            return null
    }
    
}

export default ItemsList
