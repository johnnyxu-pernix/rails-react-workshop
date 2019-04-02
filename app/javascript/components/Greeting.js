import React from "react"

class Greeting extends React.Component {
  state = {
    name: 'Johnny'
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  render() {
    const {to} = this.props
    const {name} = this.state

    return (
      <div>
        <input value={name} onChange={this.onNameChange} />
        <h1>{to} & {name}</h1>
      </div>
    )
  }
}

export default Greeting
