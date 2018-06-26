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

class ProjectSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            items: []
        };
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/projects/')
            .then(response => this.setState({
                    open: false,
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
        return (
            <Popup
                open={this.openModal}
                closeOnDocumentClick
                onClose={this.closeModal}
            >
                <div className="modal">
                    {
                        this.state.items.map((item) => {
                            return (
                                <Project name={item} onClickSelect={() => this.closeModal()}/>
                            )
                        })
                    }
                </div>
            </Popup>
        )
    }
}

export default ProjectSelector