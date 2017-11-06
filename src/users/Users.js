import React, { Component } from 'react'

function capitalize(st) {
  /* 
   * just for a little bit of clean display...
   * FROM: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-9.php
  */
  return st.replace(/\w\S*/g, (txt => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  }))
}

class Userlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      guys: [],
      status: 'ok',
      loading: true
    }
    this.url = `https://randomuser.me/api/?results=${this.props.qty}`
  }

  componentWillMount() {
    this.setState({
      loading: true
    })
  }

  componentDidMount() {
    fetch(this.url)
      .then(response => { return response.json() })
      .then(data => {
        this.setState({
          guys: data.results,
          loading: false
        })
      }).catch( _ => {
        this.setState({
          status: 'error'
        })
      })
  }

  render() {
    console.log(this.state.guys, this.state.loading)
    const howMany = this.state.guys.length !== 0 ? this.state.guys.length : 'None'
    const {loading} = this.state

    if (loading) {
      return (
        <div className="loading-lg"></div>
      )
    }

    return (
      <div className="users">
        <h1>{howMany} users</h1>
        <p>Here is a list of {howMany} users.</p>
          <div className="columns">
          {this.state.guys.map((a,i) => {
            const firstname = capitalize(a.name.first)
            const lastname = capitalize(a.name.last)
            const keyName = `user-${i + 1}`
            const altTag = `${a.name.first}-${a.name.last}`
            const titleTag = `${firstname} ${lastname}`
            return (
              <div className="column col-lg-6" key={keyName} id={keyName}>
                <div className="card">
                  <div className="card-image">
                    <img src={a.picture.large} className="img-responsive" alt={altTag} title={titleTag} />
                  </div>
                  <div className="card-header">
                    <div className="card-title h5">{a.name.title} {firstname} {lastname}</div>
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
