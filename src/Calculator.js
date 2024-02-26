import React, { Component } from 'react'

export default class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            screenText: ``,
        };
    }
    render() {
        return (
            <>
                <div className="calc">
                    <div className="result">{this.state.screenText}</div>
                    <div className="calculator">
                        <div className="header">
                            <button onClick={() => this.setState({ screenText: this.state.screenText + 'AC ' })} className="color">AC</button>
                            <button onClick={() => this.setState({ screenText: this.state.screenText + 'DEL ' })} className="color">DEL</button>
                            <button onClick={() => this.setState({ screenText: this.state.screenText + '% ' })} className="color">%</button>
                            <button onClick={() => this.setState({ screenText: this.state.screenText + '/ ' })} className="color">/</button>
                        </div>
                        <div>
                            <button onClick={() => this.setState({ screenText: this.state.screenText + '7 ' })}>7</button>
                            <button onClick={() => this.setState({ screenText: this.state.screenText + '8 ' })}>8</button>
                            <button onClick={() => this.setState({ screenText: this.state.screenText + '9 ' })}>9</button>
                            <button onClick={() => this.setState({ screenText: this.state.screenText + '* ' })} className="color">*</button>
                        </div>
                        <div>
                            <button onClick={() => this.setState({ screenText: this.state.screenText + '4 ' })}>4</button>
                            <button onClick={() => this.setState({ screenText: this.state.screenText + '5 ' })}>5</button>
                            <button onClick={() => this.setState({ screenText: this.state.screenText + '6 ' })}>6</button>
                            <button onClick={() => this.setState({ screenText: this.state.screenText + '- ' })} className="color">-</button>
                        </div>
                        <div>
                            <button onClick={() => this.setState({ screenText: this.state.screenText + '1 ' })}>1</button>
                            <button onClick={() => this.setState({ screenText: this.state.screenText + '2 ' })}>2</button>
                            <button onClick={() => this.setState({ screenText: this.state.screenText + '3 ' })}>3</button>
                            <button onClick={() => this.setState({ screenText: this.state.screenText + '+ ' })} className="color">+</button>
                        </div>
                        <div>
                            <button onClick={() => this.setState({ screenText: this.state.screenText + '0 ' })}>0</button>
                            <button onClick={() => this.setState({ screenText: this.state.screenText + '00 ' })}>00</button>
                            <button onClick={() => this.setState({ screenText: this.state.screenText + '. ' })}>.</button>
                            <button onClick={() => this.setState({ screenText: this.state.screenText + '= ' })} className="color">=</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
