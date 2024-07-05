import { Component } from "react";
import './checkbox.css';

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCheckedUp: true,
            isCheckedDown: false,
            upDown: "Up",
            santimetr: 0
        };
    }

    handleCheckboxChangeUp = (event) => {
        this.setState({ 
            isCheckedUp: event.target.checked,
            isCheckedDown: false,
            upDown: event.target.checked ? "Down" : this.state.upDown
        });
    };

    handleCheckboxChangeDown = (event) => {
        this.setState({ 
            isCheckedDown: event.target.checked,
            isCheckedUp: false,
            upDown: event.target.checked ? "Up" : this.state.upDown
        });
    };

    render() {
        return (
            <div>
                <label>
                    <h3 className="chekTitle">Вгору</h3>
                    <input
                        type="checkbox"
                        checked={this.state.isCheckedUp}
                        onChange={this.handleCheckboxChangeUp}
                    />
                    <span className={this.state.isCheckedUp ? 'checked' : 'unchecked'}></span>
                </label>

                <label>
                    <h3 className="chekTitle">Вниз</h3>
                    <input
                        type="checkbox"
                        checked={this.state.isCheckedDown}
                        onChange={this.handleCheckboxChangeDown}
                    />
                    <span className={this.state.isCheckedDown ? 'checked' : 'unchecked'}></span>
                </label>

                <div>
                    <p>Поправка склала 97 кліків {this.state.upDown}</p>
                </div>                
            </div>
        );
    }
}

export default Checkbox;
