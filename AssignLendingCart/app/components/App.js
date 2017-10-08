import React from 'react';
import EmployeeDialog from './employeeDialog';


class App extends React.Component{

    constructor(){
        super();
        this.closeEmployeeDialog = this.closeEmployeeDialog.bind(this);
        this.openEmployeeDialog = this.openEmployeeDialog.bind(this)
        this.state = {
            showEmployeeDialog: false
        }
    }

    openEmployeeDialog(){
        this.setState({
            showEmployeeDialog: true
        });
    }

    closeEmployeeDialog(){
        this.setState({
            showEmployeeDialog: false
        });
    }

    render(){
        return(
            <div>
                <button className="button" onClick={this.openEmployeeDialog}>Open</button>
                {
                    this.state.showEmployeeDialog && <EmployeeDialog closeEmployeeDialog={this.closeEmployeeDialog}/>
                }
            </div>
        )
    }
}
export default App;
