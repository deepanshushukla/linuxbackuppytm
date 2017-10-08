/**
 * Created by deepanshushukla on 3/10/17.
 */
import React from 'react';
import SelectOption from './selectOptionsCmp';

class EmployeeDialog extends React.Component{

    constructor(){
        super();
        this.data = [
            {team: 'Engineering', employees: ['Lawana Fan', 'Larry Rainer', 'Rahul Malik', 'Leah Shumway']},
            {team: 'Executive', employees: ['Rohan Gupta', 'Ronda Dean', 'Robby Maharaj']},
            {team: 'Finance', employees: ['Caleb Brown', 'Carol Smithson', 'Carl Sorensen']},
            {team: 'Sales', employees: ['Ankit Jain', 'Anjali Maulingkar']}
        ];
        this.teamArr = this.data.map(obj => (obj.team));
        this.state = {
            selectedTeam: "",
            selectedTeamEmployees: [],
            selectedEmployee: ""
        }
    }

    teamSelect(team){
        let selectedTeamEmployees = [];

        for(let i=0;i<this.data.length;i++){
            if(this.data[i].team === team){
                selectedTeamEmployees = this.data[i].employees;
            }
        }
        this.setState({
            selectedTeam: team,
            selectedEmployee: "",
            selectedTeamEmployees: selectedTeamEmployees
        });
    }

    employeeSelect(employee){
        this.setState({
            selectedEmployee: employee
        });
    }

    render(){
        return(

            <div className="modalparent">
                <div className="blackbackground"></div>
                <div className="employeeDialog">
                    <span className="closeModalCross" onClick={this.props.closeEmployeeDialog}>x</span>
                    <h2>Select an Employee</h2>
                    <label><input type="checkbox" name="checkbox" value="value" /> Send welcome email to employee</label>

                    <p className="heading">Select a team in Organisation</p>
                    <SelectOption list={this.teamArr}
                                  placeholder={"Select Team"}
                                  value={this.state.selectedTeam}
                                  showSearch ={true}
                                  handleClick={this.teamSelect.bind(this)}/>
                    <p className="heading">Select an Employee</p>
                    <SelectOption list={this.state.selectedTeamEmployees}
                                  placeholder={"Select Employee"}
                                  value={this.state.selectedEmployee}
                                  showSearch ={true}
                                  handleClick={this.employeeSelect.bind(this)}/>
                    <div className="dialogFooter">
                        <button className="button cancelButton" onClick={this.props.closeEmployeeDialog}>Cancel</button>
                        <button className="button submitButton" onClick={this.props.closeEmployeeDialog}>Ok</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployeeDialog;