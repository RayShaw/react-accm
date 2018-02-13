import React, { Component } from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import ListTable from '../components/system/ListTable';
import AddForm from '../components/system/AddForm';

class System extends Component {
  constructor() {
    super(...arguments);
    this.state = { data: null };
  }

  componentDidMount() {
    // const cityCode = 101010100;
    // const apiUrl = `/data/cityinfo/${cityCode}.html`;
    // fetch(apiUrl).then((response) => {
    //   console.log(apiUrl);
    //   if (response.status !== 200) {
    //     throw new Error('Fail to get response with status ' + response.status);
    //   }

    //   response.json().then((responseJson) => {
    //     console.log(responseJson.weatherinfo);
    //     this.setState({ weather: responseJson.weatherinfo });
    //   }).catch((error) => {
    //     console.log(error);
    //     this.setState({ weather: null });
    //   });
    // }).catch((error) => {
    //   console.log(error);
    //   this.setState({ weather: null });
    // });

    const apiUrl = '/ACCMAdminWS/member/login';

    let formData = new FormData();
    formData.append("password", "Super@1234");
    formData.append("userName", "superAdmin");

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('loginType', 'CTM');
    headers.append('loginType', 'CTM');

    fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        loginType: 'CTM',
        userId: 'dev',
        token: '34c6fceca75e456f25e7e99531e2425c6c1de443',
      },
      method: "POST",
      body: formData
    }).then((response) => {
      console.log(apiUrl);
      // if (response.status !== 200) {
      // throw new Error('Fail to get response with status ' + response.status);
      // }
    }).catch((error) => {
      console.log(error);
    });

    //   response.json().then((responseJson) => {
    //     console.log(responseJson.weatherinfo);
    //     this.setState({ weather: responseJson.weatherinfo });
    //   }).catch((error) => {
    //     console.log(error);
    //     this.setState({ weather: null });
    //   });
    // }).catch((error) => {
    //   console.log(error);
    //   this.setState({ weather: null });
    // });


    // let formData = new FormData();
    // formData.append("password", "Super@1234");
    // formData.append("userName", "superAdmin");
    // fetch("/ACCMAdminWS/member/login", {
    //   method: "POST",
    //   body: formData
    // }).then((response) => {
    //   console.log(response);
    // }).catch((error) => {
    //   console.log('error:', error);
    // });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <h2 className="sub-header">System</h2>
              <AddForm />
              <br />
              <ListTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default System;