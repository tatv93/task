import React, {Component} from 'react';
require('./style.css');

export default class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false,
            value: this.props.data.title
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({value: nextProps.value});
    }

    handleItemClick() {
        this.setState({
            isEdit: true
        });
    }

    handleInputBlur(event) {
        this.setState({
            isEdit: false
        });
        !event.target.value && this.props.removeItem(this.props.data);
    }

    handleInputChange(event) {
        this.setState({value: event.target.value});
        this.props.data.title = event.target.value;
    }

    render() {
        return (
            <div className="item"
                 onClick={
                     () => {
                         this.handleItemClick()
                     }
                 }>

                <div className="textNode"
                     style={{display: this.state.isEdit ? 'none' : 'block'}}>
                    {this.props.data.title}
                </div>

                <div className="inputNode"
                     style={{display: this.state.isEdit ? 'block' : 'none'}}>

                    <input type="text" value={this.state.value}
                           onKeyPress={
                               (e) => {
                                   e.key == 'Enter' && this.handleInputBlur(e)
                               }
                           }
                           onBlur={
                               (e) => this.handleInputBlur(e)
                           }
                           onChange={
                               (e) => this.handleInputChange(e)
                           }
                    />

                </div>
            </div>
        );
    }
}