import React, {Component} from 'react';

 export class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>plan urlopów</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>imię</td>
                            <td>nazwisko</td>
                            <td>od</td>
                            <td>do</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

