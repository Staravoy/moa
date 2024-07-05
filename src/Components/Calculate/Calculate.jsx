import React, { Component } from 'react';
import './Calculate.css';

class Calculate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            distance: '',
            division: '',
            isCheckedUp: true,
            isCheckedDown: false,
            isCheckedRight: true,
            isCheckedLeft: false,
            oneMOA: 2.9089,
            errorUpDownSm: 0,
            errorLeftRightSm: 0,
        };
    }

    corectCalculate = (error, distance, oneMOA, division) => {
        if (!distance || !division) {
            return 0;
        }
        return (error / (distance / 100 * oneMOA)) * division;
    };

    handleDistanceChange = (event) => {
        this.setState({ distance: event.target.value });
    };

    handleDivisionChange = (event) => {
        this.setState({ division: event.target.value });
    };

    errorUpDownSm = (event) => {
        this.setState({ errorUpDownSm: event.target.value });
    };

    errorLeftRightSm = (event) => {
        this.setState({ errorLeftRightSm: event.target.value });
    };

    handleCheckboxChangeUp = (event) => {
        this.setState({ 
            isCheckedUp: event.target.checked,
            isCheckedDown: false,
        });
    };

    handleCheckboxChangeDown = (event) => {
        this.setState({ 
            isCheckedDown: event.target.checked,
            isCheckedUp: false,
        });
    };

    handleCheckboxChangeRight = (event) => {
        this.setState({ 
            isCheckedRight: event.target.checked,
            isCheckedLeft: false,
        });
    };

    handleCheckboxChangeLeft = (event) => {
        this.setState({ 
            isCheckedLeft: event.target.checked,
            isCheckedRight: false,
        });
    };

    render() {
        const verticalCorrection = this.corectCalculate(
            this.state.errorUpDownSm,
            this.state.distance,
            this.state.oneMOA,
            this.state.division
        );

        const horizontalCorrection = this.corectCalculate(
            this.state.errorLeftRightSm,
            this.state.distance,
            this.state.oneMOA,
            this.state.division
        );

        return (
            <div>
                <h1 className="title">РОЗРАХУНОК ПОПРАВОК ПО СТВ <br /> на мішені</h1>
                <div className='entry_container'>
                    <div className='enterMeter'>
                        <h1>Дістанція до мішені в метрах:</h1>
                        <input
                            className='enterPlace'
                            type="text"
                            value={this.state.distance}
                            onChange={this.handleDistanceChange}
                            placeholder='100'
                        />
                    </div>
                </div>
                
                <div className='entry_container'>
                    <div className='enterDivision'>
                        <h1>Ціна ділення оптичного прицілу 1/</h1>
                        <input
                            className='enterPlace'
                            type="text"
                            value={this.state.division}
                            onChange={this.handleDivisionChange}
                            placeholder='4'
                        />
                    </div>
                </div>

                <table className="custom-table">
                    <thead>
                        <tr>
                            <th className='titleTable'>По вертикалі</th>
                            <th className='titleTable'>По горизонталі</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label>
                                    <h3 className="chekTitle">Відхилення вгору</h3>
                                    <input
                                        type="checkbox"
                                        checked={this.state.isCheckedUp}
                                        onChange={this.handleCheckboxChangeUp}
                                    />
                                    <span className={this.state.isCheckedUp ? 'checked' : 'unchecked'}></span>
                                </label>
                            </td>
                            <td>
                                <label>
                                    <h3 className="chekTitle">Відхилення праворуч</h3>
                                    <input
                                        type="checkbox"
                                        checked={this.state.isCheckedRight}
                                        onChange={this.handleCheckboxChangeRight}
                                    />
                                    <span className={this.state.isCheckedRight ? 'checked' : 'unchecked'}></span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    <h3 className="chekTitle">Відхилення донизу</h3>
                                    <input
                                        type="checkbox"
                                        checked={this.state.isCheckedDown}
                                        onChange={this.handleCheckboxChangeDown}
                                    />
                                    <span className={this.state.isCheckedDown ? 'checked' : 'unchecked'}></span>
                                </label>
                            </td>
                            <td>
                                <label>
                                    <h3 className="chekTitle">Відхилення Ліворуч</h3>
                                    <input
                                        type="checkbox"
                                        checked={this.state.isCheckedLeft}
                                        onChange={this.handleCheckboxChangeLeft}
                                    />
                                    <span className={this.state.isCheckedLeft ? 'checked' : 'unchecked'}></span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className='enterPlace'
                                    type="text"
                                    name="up_down_sm"
                                    id="up_down_sm"
                                    value={this.state.errorUpDownSm}
                                    onChange={this.errorUpDownSm}
                                    placeholder='0'/>
                                см.
                            </td>
                            <td>
                                <input
                                    className='enterPlace'
                                    type="text"
                                    name="left_right_sm"
                                    id="left_right_sm"
                                    value={this.state.errorLeftRightSm}
                                    onChange={this.errorLeftRightSm}
                                    placeholder='0'/>
                                см.
                            </td>
                        </tr>
                        <tr>
                            <td className="direction-cell">
                                <p className="direction-text">Поправка: {Math.round(verticalCorrection)} кліків {this.state.isCheckedUp ? 'ДОНИЗУ' : 'ВГОРУ'}</p>
                            </td>
                            <td className="direction-cell">
                                <p className="direction-text">Поправка: {Math.round(horizontalCorrection)} кліків {this.state.isCheckedRight ? 'ЛІВОРУЧ' : 'ПРАВОРУЧ'}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Calculate;
