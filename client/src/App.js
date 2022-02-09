import "./App.css"
import axios from "axios"
import React, { Component } from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      description: "",
      startDate: "",
      hours: "",
      minute: "",
    }
    this.changeDate = this.changeDate.bind(this)
    this.changeDescription = this.changeDescription.bind(this)
    this.changeHours = this.changeHours.bind(this)
    this.changeMinute = this.changeMinute.bind(this)
    this.changeTitle = this.changeTitle.bind(this)
    this.createCourse = this.createCourse.bind(this)
  }
  changeDate(event) {
    this.setState({
      startDate: event.target.value,
    })
  }
  changeMinute(event) {
    this.setState({
      minute: event.target.value,
    })
  }
  changeHours(event) {
    this.setState({
      hours: event.target.value,
    })
  }
  changeDescription(event) {
    this.setState({
      description: event.target.value,
    })
  }
  changeTitle(event) {
    this.setState({
      title: event.target.value,
    })
  }
  async createCourse(event) {
    event.preventDefault()
    //fetch('http://localhost:4000/api/register')
    const course = {
      title: this.state.title,
      startDate: this.state.startDate,
      description: this.state.description,
      hours: this.state.hours,
      minute: this.state.minute,
    }
  }
  render() {
    return (
      <div>
        <h1>Create Course</h1>
        <form onSubmit={this.createCourse}>
          <input
            value={this.state.title}
            onChange={this.changeTitle}
            type="text"
            placeholder="Title"
          />
          <br />
          <input
            value={this.state.description}
            onChange={this.changeDescription}
            type="text"
            placeholder="Description"
          />
          <br />
          <input
            value={this.state.startDate}
            onChange={this.changeDate}
            type="text"
            placeholder="Start Date"
          />
          <br />
          <input
            value={this.state.hours}
            onChange={this.changeHours}
            type="text"
            placeholder="Hours"
          />
          <br />
          <input
            value={this.state.minute}
            onChange={this.changeMinute}
            type="text"
            placeholder="Minute"
          />
          <br />
          <input
            type="submit"
            className="btn btn-success btn-block"
            value="Submit"
          />
        </form>
      </div>
    )
  }
}

// async function App() {
//   const [title, setTitle] = useState("")
//   const [description, setDescription] = useState("")
//   const [startDate, setDate] = useState("")
//   const [hours, setHours] = useState("")
//   const [minute, setMinute] = useState("")

//   return (
//     <div>
//       <h1>Create Course</h1>
//       <form onSubmit={registerCourse}>
//         <input
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           type="text"
//           placeholder="Title"
//         />
//         <br />
//         <input
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           type="text"
//           placeholder="Description"
//         />
//         <br />
//         <input
//           value={startDate}
//           onChange={(e) => setDate(e.target.value)}
//           type="text"
//           placeholder="Start Date"
//         />
//         <br />
//         <input
//           value={hours}
//           onChange={(e) => setHours(e.target.value)}
//           type="text"
//           placeholder="Hours"
//         />
//         <br />
//         <input
//           value={minute}
//           onChange={(e) => setMinute(e.target.value)}
//           type="text"
//           placeholder="Minute"
//         />
//         <br />
//       </form>
//     </div>
//   )
// }

export default App
