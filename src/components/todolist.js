import React, {Component} from 'react';
import TodoItems from './todoitems';
import "../styles/TodoList.css";

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }


    addItem(e) {
        if (this._inputElement.value !== "") {
            const newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";

            e.preventDefault();
            console.log("Add Item", this.state.items);
        }
    }

    deleteItem(key) {
        console.log("is this being fired?");
        const filteredItems = this.state.items.filter(item => (item.key !== key));
        console.log(filteredItems);

        this.setState = ({
            items: filteredItems
        })
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                            placeholder="enter task">
                        </input>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <TodoItems
                    entries={this.state.items}
                    delete={this.deleteItem}
                />
            </div>
        );
    }
}


export default TodoList;
