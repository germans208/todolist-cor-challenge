import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import Item from './Item';

const List = ({ list, filtered, filteredItems, removeItem, editItem }) => {

    const onClickRemove = useCallback((item) => {
        removeItem(item);
    }, [removeItem])

    const onClickEdit = useCallback((item) => {
        editItem(item);
    }, [editItem])


    console.log(filtered)
    if (filtered) {
        return (
            <Grid container>
                {filteredItems && filteredItems.map(item =>
                    <Item
                        {...item}
                        key={item.id}
                        onClickRemove={onClickRemove}
                        onClickEdit={onClickEdit}>
                    </Item>
                )}
            </Grid>
        );
    } else {
        return (
            <Grid container>
                {list && list.map(item =>
                    <Item
                        {...item}
                        key={item.id}
                        onClickRemove={onClickRemove}
                        onClickEdit={onClickEdit}>
                    </Item>
                )}
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    //obtenemos solamente lo que necesitamos, inyecta una props nueva al List
    return {
        list: state.items,
        filtered: state.filtered,
        filteredItems: state.filteredItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        removeItem: (value) => {
            dispatch({ type: 'REMOVE_ITEM', payload: value })
        },
        editItem: (value) => {
            dispatch({ type: 'EDIT_ITEM', payload: value })
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
//High order components, Permite conectarte con el STORE, es una funcion que toma parametros
//Se basa en el concepto de programacion funcional, el currying