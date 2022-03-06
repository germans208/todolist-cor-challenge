import { Grid } from '@material-ui/core';
import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import Item from '../Item';

const List = ({ list, removeItem }) => {

    const onClickRemove = useCallback((item) => {
        removeItem(item);
    }, [removeItem])

    return (

        <Grid container>
            {list && list.map(i =>
                <Item
                    {...i}
                    key={i.item}
                    onClickRemove={onClickRemove}>
                </Item>
            )}
        </Grid>
    );
}

const mapStateToProps = (state) => {
    //obtenemos solamente lo que necesitamos, inyecta una props nueva al List
    return {
        list: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        removeItem: (value) => {
            dispatch({ type: 'REMOVE_ITEM', payload: value })
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
//High order components, Permite conectarte con el STORE, es una funcion que toma parametros
//Se basa en el concepto de programacion funcional, el currying