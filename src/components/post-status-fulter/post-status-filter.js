import React from 'react';
import './post-status-filter.css';


export default class PostStatusFilter extends React.Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'All posts'},
            {name: 'like', label: 'Liked'},
        ]
    }
   render() {
       const buttons = this.buttons.map(({name, label}) => {
           const {filter, onFilterSelect} = this.props;
           const active = filter === name;
           const clasz = active ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button key={name}
                 type="button" 
                 className={`btn ${clasz}`}
                 onClick={() => onFilterSelect(name)}>
                 {label}
                 </button>
            )
       });
    return (
        <div className="btn-group">
           {buttons}
        </div>
    )
   }
}
