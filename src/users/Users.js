import React, { Component } from 'react'

class Userlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      guys: [],
      status: 'ok'
    }
    this.url = 'https://randomuser.me/api/?results=10'
  }

  componentWillMount() {
    fetch(this.url).then(response => { return response.json() }).then(data => {
      this.setState({
        guys: data.results
      })
    }).catch( _ => {
      this.setState({
        status: 'error'
      })
    })
  }

  render() {
    console.log(this.state.guys)
    const howMany = this.state.guys.length != 0 ? this.state.guys.length : 'None'

    return (
      <div className="users">
        <h1>{howMany} users</h1>
        <p>Here is a list of {howMany} users.</p>
          <div className="columns">
          {this.state.guys.map(a => {
            return (
              <div className="column col-lg-6">
                <div className="card">
                  <div className="card-image">
                    <img src={a.picture.large} className="img-responsive"/>
                  </div>
                  <div className="card-header">
                    <div className="card-title h5">{a.name.title} {a.name.first} {a.name.last} ({a.gender})</div>
                    <div className="card-subtitle text-gray">Registered: {a.registered}</div>
                  </div>
                  <div className="card-body">
                    Address: {a.location.address} {a.location.postcode} {a.location.city} {a.location.state} {a.nat}
                  </div>
                  <div className="card-footer">
                    <strong>Mobile Phone:</strong> {a.cell}<br/>
                    <strong>Email:</strong> {a.email}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Userlist
