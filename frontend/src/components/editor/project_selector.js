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
        super(props);
        this.state = {
            projectName: "New Project",
            projectId: 0,
        }

    }

    createProject(name) {
        axios.defaults.xsrfCookieName = 'csrftoken';
        axios.defaults.xsrfHeaderName = 'X-CSRFToken';
        this.state.projectId = this.props.getIndex()
        axios.post(
            "http://127.0.0.1:8000/api/",
            {
                "id": this.state.projectId,
                "name": name,
                "creation_date": "2018-06-15T01:01:00Z",
                "user": 1,
            });
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.props.onClick();
                    this.createProject(this.state.projectName);
                    this.props.changeCurrentProject(this.state.projectName, this.state.projectId);
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
            indexes: [],
            items: []
        };
    }

    getNextIndex(){
        let indexes = this.state.indexes;
        indexes.sort();
        for (let i = 0; i < indexes.length+1; i++){
            if (indexes[i] != i)
                return i;
        }
    }

    getList() {
        for (var i = 0; i < 2; i++)
            axios.get('http://127.0.0.1:8000/api/projects/')
                .then(response => this.setState({
                        indexes: response.data.map((proj) => proj.id),
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
        this.props.changeCurrentProject('New Project', 0);
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
                        onClick={() => {
                            this.props.onClose()
                        }}
                        changeCurrentProject={this.props.changeCurrentProject}
                        updateList={() => {
                            this.getList()
                        }}
                        getIndex={()=>this.getNextIndex()}
                    />
                </div>
            </ Popup>
        )
    }
}

export default ProjectSelector