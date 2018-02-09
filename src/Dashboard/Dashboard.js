import React, {Component} from 'react';
import DashboardPanel from '../Components/DashboardPanel';


class Dashboard extends Component{

    render(){
        return(
        <div id="page-wrapper">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Dashboard</h1>
                </div>
            </div>
            <div className="row">
                <DashboardPanel/>
            </div>
        </div>
        );
    }
}

export default Dashboard;