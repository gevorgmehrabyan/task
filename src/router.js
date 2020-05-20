import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Service from './redux/service';
import {ROLES} from "./utils/constants";
import { ROLE } from './utils/constants';

/**Auth*/
import Home from './containers/home';
import Login from './containers/login';
import AdminLogin from './containers/adminLogin';
import CandidateRegistration from './containers/candidateRegistration';
import EmployerRegistration from './containers/employerRegistration';
import ForgotPassword from './containers/forgot';
import ResetPassword from './containers/reset';

/**Candidate*/
import CandidateCalendar from './containers/candidate/calendar';
import CandidateProfile from './containers/candidate/profile';
import CandidateInterviews from './containers/candidate/interviews';
import CandidateCompany from './containers/candidate/company';

/**Employer*/
import EmployerProfile from './containers/employer/profile';
import EmployerSettings from './containers/employer/settings';
import EmployerInterviews from './containers/employer/interviews';

/**Admin*/
import AdminCompanies from './containers/admin/companies';
import AdminCandidates from './containers/admin/candidates';
import AdminActivities from './containers/admin/activities';
import AdminEvents from './containers/admin/events';


const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    Service.isLoggedIn() ?
      <Redirect to={{
        pathname: '/',
        state: {from: props.location}
      }}/>
      :
      <Component {...props} />
  )}/>
);

const PrivateAdminRoute = ({component: Component, ...rest}) => {
  const role = parseInt(localStorage.getItem(ROLE));
  const allow = Service.isLoggedIn() && role === ROLES.ADMIN;
  return (
    <Route {...rest} render={(props) => (
      allow ? <Component {...props} />
        : <Redirect to={{
          pathname: '/admin',
          state: {from: props.location}
        }}/>
    )}/>
  )
};

const PrivateCandidateRoute = ({component: Component, ...rest}) => {
  const role = parseInt(localStorage.getItem(ROLE));
  const allow = Service.isLoggedIn() && role === ROLES.CANDIDATE;
  return (
    <Route {...rest} render={(props) => (
      allow ? <Component {...props} />
        : <Redirect to={{
          pathname: '/candidate',
          state: {from: props.location}
        }}/>
    )}/>
  )
};

const PrivateEmployerRoute = ({component: Component, ...rest}) => {
  const role = parseInt(localStorage.getItem(ROLE));
  const allow = Service.isLoggedIn() && role === ROLES.CANDIDATE;
  return (
    <Route {...rest} render={(props) => (
      allow ? <Component {...props} />
        : <Redirect to={{
          pathname: '/employer',
          state: {from: props.location}
        }}/>
    )}/>
  )
};

const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/login/admin" component={AdminLogin} />
        <PrivateRoute exact path="/registration/candidate" component={CandidateRegistration} />
        <PrivateRoute exact path="/registration/employer" component={EmployerRegistration} />

        <PrivateCandidateRoute exact path="/calendar" component={CandidateCalendar} />
        <PrivateCandidateRoute exact path="/profile" component={CandidateProfile} />
        <PrivateCandidateRoute exact path="/interviews" component={CandidateInterviews} />
        <PrivateCandidateRoute exact path="/companies" component={CandidateCompany} />

        <PrivateEmployerRoute exact path="/profile" component={EmployerProfile} />
        <PrivateEmployerRoute exact path="/settings" component={EmployerSettings} />
        <PrivateEmployerRoute exact path="/interviews" component={EmployerInterviews} />

        <PrivateAdminRoute exact path="/companies" component={AdminCompanies} />
        <PrivateAdminRoute exact path="/candidates" component={AdminCandidates} />
        <PrivateAdminRoute exact path="/activities" component={AdminActivities} />
        <PrivateAdminRoute exact path="/events" component={AdminEvents} />

        <Route exact path="/" component={Home} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/reset-password" component={ResetPassword} />
      </Switch>
    </BrowserRouter>
  )
};

export default Router;
