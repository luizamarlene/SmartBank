import React from 'react';
import  Item  from '../Item/index';
import { Itens } from './styles';
import ImageFilter from '../ImageFilter';

export default (props) => {
 return (
        <Itens>
            <ImageFilter type={props.type}/>
           {/*  {ImageFilter(props)} */}
            <Item {...props} />
            <span>{props.date}</span>
            
        </Itens>
           
 );
}