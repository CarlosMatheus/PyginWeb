import React from 'react';
import Popup from 'reactjs-popup'
import axios from 'axios'
import './project_selector.css';

//Project item
function Project(props) {
    return (
        <div>{props.name}
            <button onClick={() => props.onClickSelect()}>
                Delete
            </button>

        </div>
    )
}

//Create project
class CreateProject extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projectName: "New Project",
        }

    }

    static createProject(name) {
        axios.defaults.xsrfCookieName = 'csrftoken';
        axios.defaults.xsrfHeaderName = 'X-CSRFToken';
        axios.post(
            "http://127.0.0.1:8000/api/",
            {
                "name": name,
                "creation_date": "2018-06-15T01:01:00Z",
                "user": 1,
            })
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.props.onClick();
                    CreateProject.createProject(this.state.projectName);
                    this.props.changeCurrentProject(this.state.projectName);
                    this.props.updateList();
                }}>
                    Add Project
                </button>
                <input type="text" onChange={(evt) => {
                    this.state.projectName = evt.target.value
                }}>{}</input>
            </div>
        )
    }
}

//Create popup
class ProjectSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    getList() {
        for (var i = 0; i < 2; i++)
            axios.get('http://127.0.0.1:8000/api/projects/')
                .then(response => this.setState({
                        items: response.data.map((proj) => proj.name)
                    })
                )
    }

    componentDidMount() {
        this.getList();
    }

    deleteProject(name) {
        axios.defaults.xsrfCookieName = 'csrftoken';
        axios.defaults.xsrfHeaderName = 'X-CSRFToken';
        axios.delete('http://127.0.0.1:8000/api/projects/destroy/' + name + '/');
        this.getList();
        this.props.changeCurrentProject('New Project');
    }

    render() {
        return (
            <Popup open={this.props.open} onClose={this.props.onClose}>
                <div className="modal">
                    {
                        this.state.items.map((item) => {
                            return (
                                <Project key={item} name={item}
                                         onClickSelect={() => this.deleteProject(item)}
                                />
                            )
                        })
                    }
                    <CreateProject
                        onClick={() => {this.props.onClose()}}
                        changeCurrentProject={this.props.changeCurrentProject}
                        updateList={() => {this.getList()}}
                    />
                </div>
            </ Popup>
        )
    }
}

export default ProjectSelector