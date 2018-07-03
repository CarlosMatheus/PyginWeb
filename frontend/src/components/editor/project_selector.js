import React from 'react';
import Popup from 'reactjs-popup'
import axios from 'axios'
import './popup.css'
import './project_selector.css';
const project_url = 'https://pyginweb.herokuapp.com';

//Project item
function Project(props) {
    return (
        <div className="popup-1">
            <div className="popup-1-0" />
            <div className="popup-rectangle_31">
                <div className="popup-1-1-0">
                    <div className="popup-rectangle_36" onClick={() => {props.onClickSelect(props.name, props.id);}}>
                        <div className="popup-1-1-0-0-0">
                            <div className="popup-text_2-3">{props.name}</div>
                        </div>
                    </div>
                    <div className="popup-1-1-0-1">
                        <div className="popup-1-1-0-1-0">
                            <div className="popup-rectangle_30" onClick={() => props.onClickDelete()}>
                                <div className="popup-1-1-0-1-0-0-0">
                                    <div className="popup-image_5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popup-1-2" />
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
            project_url + "/api/",
            {
                "name": name,
                "creation_date": "2018-06-15T01:01:00Z",
                "user": 1,
            });
    }

    render() {
        return (
            <div className="popup-4">
                <div className="popup-rectangle_33">
                    <div className="popup-4-0-0">
                        <div className="popup-4-0-0-0" />
                        <div className="popup-rectangle_34">
                            <div className="popup-4-0-0-1-0">
                                <input type="text" placeholder="New project's name" className="popup-text_input_4" onChange={(evt) => {
                                    this.state.projectName = evt.target.value
                                }}/>
                                <div className="popup-4-0-0-1-0-1">
                                    <div className="popup-4-0-0-1-0-1-0">
                                        <div className="popup-rectangle_32" onClick={() => {
                                            this.createProject(this.state.projectName);
                                            this.props.changeCurrentProject(this.state.projectName, this.state.projectId, true);
                                            this.props.onClose();
                                            this.props.updateList();
                                        }}>
                                            <div className="popup-4-0-0-1-0-1-0-0-0">
                                                <div className="popup-text_2-1">Create</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="popup-4-0-0-2" />
                    </div>
                </div>
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
            axios.get(project_url + '/api/projects/')
                .then(response => this.setState({
                        indexes: response.data.map((proj) => proj.id),
                        items: response.data.map((proj) => proj.name)
                    })
                )
    }

    componentDidMount() {
        this.getList();
    }

    deleteProject(id) {
        axios.defaults.xsrfCookieName = 'csrftoken';
        axios.defaults.xsrfHeaderName = 'X-CSRFToken';
        axios.delete(project_url+'/api/projects/destroy/' + id + '/');
        this.getList();
        this.props.changeCurrentProject('New Project', 0);
    }

    render() {
        return (
            <Popup open={this.props.open} onClose={this.props.onClose}>
                <div className="popup-popup-3">
                    <div className="popup-0">
                        <div className="popup-rectangle_2">
                            <div className="popup-0-0-0">
                                <div className="popup-0-0-0-0" />
                                <div className="popup-rectangle_3">
                                    <div className="popup-0-0-0-1-0">
                                        <div className="popup-text_2">Projects</div>
                                    </div>
                                    <div className="popup-0-0-0-1-1">
                                        <div className="popup-line_3" />
                                    </div>
                                </div>
                                <div className="popup-0-0-0-2" />
                            </div>
                        </div>
                    </div>
                    {
                        this.state.indexes.map((item) => {
                            return (
                                <Project key={item} name={this.state.items[this.state.indexes.indexOf(item)]}
                                         id = {item}
                                         onClickDelete={() => this.deleteProject(item)}
                                         onClickSelect={(name, id) => {this.props.changeCurrentProject(name, id);
                                         this.props.onClose();
                                         }}
                                />
                            )
                        })
                    }
                    <CreateProject
                        onClose={() => this.props.onClose()}
                        changeCurrentProject={(newProj, projId, isNewProj) => this.props.changeCurrentProject(newProj, projId, isNewProj)}
                        updateList={() => this.getList()}
                        getIndex={()=>this.getNextIndex()}
                    />
                </div>
            </ Popup>
        )
    }
}

export default ProjectSelector