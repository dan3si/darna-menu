import Item from '../Item'
import Category from '../Category'
import CategoryHeader from '../CategoryHeader'
import { Route } from "react-router-dom";

import { toKebabCase } from '../../utils/functions'
import React from 'react';

const ItemsList = ({ category, path }) => {
    return (
        <>
            <Route path={path} exact>
                <CategoryHeader header={category.name} />
            </Route>

            {category.items.map(
                item => {
                    if (item.available === false) {
                        return null
                    }

                    return (
                        <React.Fragment key={item.name}>
                            <Route path={path} exact>
                                {category.contentType === 'categories' && (
                                    <Category
                                        name={item.name}
                                        picture={item.picture}
                                        link={`${path}/${toKebabCase(item.name)}`}
                                    />
                                )}
                                
                                {category.contentType === 'items' && (
                                    <Item
                                        name={item.name}
                                        picture={item.picture}
                                        price={item.price}
                                    />
                                )}
                            </Route>

                            {category.contentType === 'categories' && (
                                <ItemsList category={item} path={`${path}/${toKebabCase(item.name)}`} />
                            )}
                        </React.Fragment>
                    )
                }
            )}
        </>
    )
    
}

export default ItemsList
