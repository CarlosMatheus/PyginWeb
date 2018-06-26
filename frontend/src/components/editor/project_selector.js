import React from 'react';
import Popup from 'reactjs-popup'
import axios from 'axios'
import './project_selector.css';

function Project(props) {
    return (
        <div>{props.name}
            <button onClick={() => {
                props.onClickSelect();
                window.alert('click')
            }}>ola
            </button>

        </div>
    )
}

class CreateProject extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projecName: "No Name",
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
                    CreateProject.createProject(this.state.projecName)
                }}>
                    Add Project
                </button>
                <input type="text" onChange={(evt) => {
                    this.state.projecName = evt.target.value
                }}>{}</input>
            </div>
        )
    }
}

class ProjectSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            items: []
        };
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/projects/')
            .then(response => this.setState({
                    open: true,
                    items: response.data.map((proj) => proj.name)
                })
            )
    }

    openModal = () => {
        this.setState({open: true});
    };
    closeModal = () => {
        this.setState({open: false});
    };

    render() {
        if (this.state.open) {
            return (
                <Popup open={this.openModal}>
                    <div className="modal">
                        {
                            this.state.items.map((item) => {
                                return (
                                    <Project name={item} onClickSelect={() => this.closeModal()}/>
                                )
                            })
                        }
                        <button onClick={() => {
                            this.closeModal();
                            window.alert(this.state.open)
                        }}> fecha
                        </button>
                        <CreateProject onClick={() => {
                            this.closeModal()
                        }}/>
                    </div>
                </Popup>
            )
        }
        else return null
    }
}

export default ProjectSelector