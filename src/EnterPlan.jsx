import React, {Component} from 'react';

// export const EnterPlan = () => (
//     <div>
//         <h1>Enter your holiday plan</h1>
//         <span>podaj datę</span>
//     </div>
// );

export class EnterPlan extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: '',
            surname:'',
            start: null,
            end: null,
            info:''
        }
    }

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    };

    handleChangeSurname = (e) => {
        this.setState({
            surname: e.target.value
        })
    };

    handleChangeStart = (e) => {
        this.setState({
            start: e.target.value
        })
    };

    handleChangeEnd = (e) => {
        this.setState({
            end: e.target.value
        })
    };

    handleSubmit = (e) => {
       e.preventDefault();

        const currentDate = new Date();
        console.log(currentDate.toString());

        if(this.state.name ==='') {
            this.setState({info: 'Podaj imię'});
            return;
        }
        else if(this.state.surname ==='') {
            this.setState({info: 'Podaj nazwisko'});
            return;
        }
        else if(this.state.start === null) {
            this.setState({info: 'Podaj datę rozpoczęcia urlopu'});
            return;
        }
        else if(this.state.end === null) {
            this.setState({info: 'Podaj datę zakończenia urlopu'});
            return;
        }
        else if(this.state.start <= currentDate) {
            this.setState({info: 'Nie można podać przeszłej daty'});
            return;
        }
    };

    render() {
        return <div>
            <h1>Enter your holiday plan</h1>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="podaj imię" value={this.state.name} onChange={this.handleChangeName}/>
                <input type="text" placeholder="podaj nazwisko" value={this.state.surname} onChange={this.handleChangeSurname}/>
                <h2>Podaj daty</h2>
                <span>OD</span>
                <input type="date" value={this.state.start} onChange={this.handleChangeStart} />
                <span>DO</span>
                <input type="date" value={this.state.end} onChange={this.handleChangeEnd}/>
                <button type="submit">ZAPLANUJ</button>
                <h3 style={{color:"red"}}>{this.state.info}</h3>
            </form>
        </div>
    }
}