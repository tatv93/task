import React, {Component} from 'react';
import ItemsList from '../com-items-list';
import {CONS_LIST, PROS_LIST} from '../../static/data-items';
require('./style.css');

export default class Layout extends Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <h2>Should I eat at McDonalds ?</h2>
                </div>
                <div className="content">
                    <div>
                        <ItemsList listName={'PROS'} data={PROS_LIST}/>
                    </div>
                    <div>
                        <ItemsList listName={'CONS'} data={CONS_LIST}/>
                    </div>
                </div>
            </div>
        );
    }
}