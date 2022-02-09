import "./App.css"
import axios from "axios"
import React, { Component } from "react"
import Display from "./components/Display"

class App extends Component {

  state = {
    title: "",
    description: "",
    startDate: "",
    hours: "",
    minute: "",
    posts: []
  }

  componentDidMount =() =>{
    this.getCourses();
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  createCourse = (event) => {
    event.preventDefault();

    const courseRegistered = {
      title: this.state.title,
      description: this.state.description,
      startDate: this.state.startDate,
      hours: this.state.hours,
      minute: this.state.minute
    };

    axios.post('http://localhost:4000/app/course', courseRegistered)
    .then(response => console.log(response.data))

    this.resetUserInputs();
    
  };

  resetUserInputs = () => {
    this.setState({
      title: '',
      description: '',
      startDate: '',
      hours: '',
      minute: ''
    });
  };

  getCourses = () =>{
    axios.get('http://localhost:4000/app/')
    .then((response) => {
      const data = response.data;
      this.setState({ posts: data });
      console.log('Data has been received!!!');
    })
  }

  displayBlogPost = (posts) => {

    if (!posts.length) return null;


    return posts.map((post, index) => (
      <div key={index} className="blog-post__display">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
  };


  render() {
    return (
      <>
        <div className="container">
        <div>
          <h1>Create Course</h1>
          <form onSubmit={this.createCourse}>
              <input
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                type="text"
                placeholder="Title"
              />
              <br />
              <input
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                type="text"
                placeholder="Description"
              />
              <br />
              <input
                name="startDate"
                value={this.state.startDate}
                onChange={this.handleChange}
                type="text"
                placeholder="Start Date"
              />
              <br />
              <input
                name="hours"
                value={this.state.hours}
                onChange={this.handleChange}
                type="text"
                placeholder="Hours"
              />
              <br />
              <input
                name="minute"
                value={this.state.minute}
                onChange={this.handleChange}
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
            <div className="course-post">
              {this.displayBlogPost(this.state.posts)}
            </div>

          <Display />
        </div>
      </>
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
//}

export default App
