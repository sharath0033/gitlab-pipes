import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Location } from 'history';
import '../../assets/styles/tailwind.css';
import './Dashboard.scss';

interface IProps extends RouteComponentProps<any> {
  token: string,
  location: ILocationState
}
interface ILocationState extends Location<any> {
  token: string,
  apiUrl: string
}

const DashboardComponent: React.FC<IProps> = ({ location }: IProps) => {
  const TOKEN = location.state.token;
  const API_URL = location.state.apiUrl;

  return (
    <div className="dashboard-section">
      <div>Dashboard</div>
      <div>{TOKEN}</div>
      <div>{API_URL}</div>
    </div>
  );
};

export default withRouter(DashboardComponent);