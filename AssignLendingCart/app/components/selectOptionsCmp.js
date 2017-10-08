/**
 * Created by deepanshushukla on 27/01/17.
 */
import React from 'react';
const  { DOM: { input } } = React;
var classNames = require('classnames');
class SelectOptions extends React.Component{
    constructor(props) {
        super(props);
        this.handleSearchs = this.handleSearchs.bind(this);
        this.state = {
            optionClass: 'hidden',
            currentValue: this.props.value ||  this.props.placeholder,
            activeOption:0,
            searchValue:'',
            filtered:this.props.list
        };
    }
    componentWillMount(){
       // console.log('mount called')
    }
    handleSearchs (event){
        let currentData;
        if(!event.target.value || (event.target.value && this.state.searchValue &&  event.target.value.length == this.state.searchValue.length-1)){
            currentData = this.props.list.filter(getFilteredData);
        }else{
            currentData = this.state.filtered.filter(getFilteredData);
        }
        function getFilteredData(item) {
            let  itemValue =item.value || item.branchName || item;
                return itemValue.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1;
        }
        this.setState({filtered: currentData,searchValue: event.target.value});
    }

    toggleOptions(){
        let css =this.state.optionClass=='hidden'?'shown':'hidden';
        this.setState({optionClass: css,searchValue: '',filtered: this.props.list});
        if(css == 'shown'  && this.searchinput){
            setTimeout(()=>{this.searchinput.focus();},0);
        }
    }

    hideOnBodyClick(e){
        // if(!hasClass(e.target,'option')){
        //     if(this.state.optionClass =='shown'){
        //         this.setState({optionClass: 'hidden'});
        //         this.setState({searchValue: '',filtered: this.props.list});
        //     }
        // }
    }
    componentDidMount(){
        document.body.addEventListener("click",this.hideOnBodyClick.bind(this) , false);
    }
    componentWillUnmount(){
        document.body.removeEventListener("click",this.hideOnBodyClick.bind(),false);
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            currentValue: nextProps.value ||  nextProps.placeholder,
            activeOption:0,
            searchValue:'',
            filtered:nextProps.list});
    }
    selectOption(item,index){
        this.setState({activeOption: index,optionClass: 'hidden'});
        this.setState({currentValue: item.value || item.branchName || item});
        this.props.handleClick(item);
    }
    getLIItems(item ,index){
        let optionClass = classNames({
            'option': true,
            'option--active': this.state.activeOption==index,
        });
        return <li key={index} value={item} onClick={()=>this.selectOption(item,index)} className={optionClass}>{item}</li>;

    }
    render(){
        let selectClass =this.props.meta && this.props.meta.touched && this.props.meta.error?'select select_error':
            this.props.meta && this.props.meta.touched && this.props.meta.valid?'select select_valid':'select';
        return (
            <div className="customselect"  onClick={()=>this.toggleOptions('para')}>
                <div className={selectClass}  >
                    <span className="customselect__value">{this.state.currentValue}</span>
                    {this.props.showSearch && <input autoComplete="off" autoCorrect="off" spellCheck="off" className={`search__input ${this.state.optionClass}`} ref={(input) => this.searchinput = input} type ="text" value={this.state.searchValue} onChange={this.handleSearchs}/> }
                    {(this.state.filtered && this.state.filtered.length) ? (
                        <ul ref="options" className={this.state.optionClass}>
                            {this.state.filtered.map(this.getLIItems.bind(this))}
                        </ul>)
                        : ''
                    }
                </div>

            </div>
        );
    }
}

export default SelectOptions;
