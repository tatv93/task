import React, {Component} from 'react';
import Item from '../com-item';
require('./style.css');

export default class ItemsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data || [],
            will_added: {}
        };
    }

    mapItems() {
        return this.state.data.map((item, index) => {
            return (
                <div className="_cb" key={item.id}>
                    <div className="_fl">{index + 1} .&nbsp;</div>
                    <div className="_fl">
                        <Item data={item} removeItem={this.removeItem.bind(this)}/>
                    </div>
                </div>
            );
        });
    }

    removeItem(item) {
        this.setState({
            data: this.state.data.filter((i) => {
                return i !== item;
            })
        });
    }

    addItem(item) {
        if (!item.title) return;
        item.id = this.state.data[this.state.data.length - 1].id + 1;
        this.setState({
            data: this.state.data.concat(item),
            will_added: {title: ''}
        });
    }

    handleInputChange(event) {
        this.setState({will_added: {title: event.target.value}});
    }

    render() {
        return (
            <div>
                <div className="listName">
                    <h4>{this.props.listName}</h4>
                </div>
                <div className="itemsListBlock">
                    {this.mapItems()}
                    <div className="inputNode">
                        <span>{this.state.data.length + 1} .&nbsp;</span>
                        <input type="text"
                               value={this.state.will_added.title}
                               onChange={
                                   (e) => this.handleInputChange(e)
                               }
                        />
                        <button onClick={() => this.addItem(this.state.will_added)}>ADD</button>
                    </div>
                </div>
            </div>
        );
    }
}