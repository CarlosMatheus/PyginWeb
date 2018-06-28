// Generated by https://pagedraw.io/pages/9927
import React from 'react';
import Gameobjectlist from './gameobjectlist';
import Fileexplorer from './fileexplorer';
import Scene from './scene';
import Inspector from './inspector';
import './interface.css';
import ProjectSelector from './project_selector'
import GameObject from './engine_classes/game_object'
import SceneGame from './engine_classes/scene'
import axios from 'axios'
import File from './engine_classes/file'

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectorIsOpen: true,
            project: 'New Project',
            isNewProj: true,
            project_id: 0,
            scenes: [],
            selected_scene: 0,
            selected_game_object: -1,
            game_object_count: {
                'Rectangle': 0, 'Circle': 0, 'Polygon': 0, 'Sprite': 0, 'Text': 0,
                'Generic': 0
            },
            files: [],
            selected_file: 0,
            file_count: {
                'Controller': 0, 'Animation': 0
            }
        }
    }

    setTitle() {
        if (this.state.selectorIsOpen)
            document.title = "Select Project";
        else document.title = this.state.project;
    }

    changeCurrentProject(newProj, projId, isNewProj = false) {
        this.setState({
            project: newProj,
            project_id: projId,
            isNewProj: isNewProj
        })
    }

    openSelector() {
        this.setState({
            selectorIsOpen: true
        })
    }

    closeSelector() {
        if (this.state.isNewProj) {
            this.setState({
                isNewProj: false,
                selectorIsOpen: false,
                scenes: [],
                selected_scene: 0,
                selected_game_object: -1,
                game_object_count: {
                    'Rectangle': 0, 'Circle': 0, 'Polygon': 0, 'Sprite': 0, 'Text': 0,
                    'Generic': 0
                },
                files: [],
                selected_file: -1,
                file_count: {
                    'Controller': 0, 'Animation': 0
                }
            })
        } else {
            this.updateScenes();
        }
    }

    updateGameObjectSelection(index) {
        this.setState({
            selected_game_object: index
        })
    }

    updateFileSelection(index) {
        this.setState({
            selected_file: index
        })
    }

    createGameObject(name) {
        var scene = this.state.scenes[this.state.selected_scene];
        const game_object_count = this.state.game_object_count
        var object_name = name + "_" + game_object_count[name];
        game_object_count[name]++;
        this.setState({
            game_object_count: game_object_count,
        })
        this.updateGameObjectSelection(scene.game_objects.length - 1);
        this.createFile(object_name, object_name, true);

        axios.defaults.xsrfCookieName = 'csrftoken';
        axios.defaults.xsrfHeaderName = 'X-CSRFToken';
        axios.post(
            "http://127.0.0.1:8000/api/gameobjects/",
            {
                "name": object_name,
                "type" : object_name,
                "scene": scene.id,
            }).then(() => this.changeScene(this.state.selected_scene))
    }

    createFile(name, type = name, isTrueName = false) {
        const files = this.state.files;
        const file_count = this.state.file_count;
        if (isTrueName)
            files.push(new File(name));
        else {
            file_count[name]++;
            files.push(new File(name + "_" + file_count[name]));
        }
        this.updateFileSelection(files.length - 1);
        this.setState({
            files: files,
            file_count: file_count,
        });
    }

    createScene() {
        const scenes = this.state.scenes;
        let scene_name = "Scene_" + (scenes.length + 1);

        axios.defaults.xsrfCookieName = 'csrftoken';
        axios.defaults.xsrfHeaderName = 'X-CSRFToken';
        axios.post(
            "http://127.0.0.1:8000/api/scenes/",
            {
                "name": scene_name,
                "project": this.state.project_id,
            }).then(() => this.updateScenes())
    }

    updateScenes() {
        var files = this.state.files;
        var i = files.length
        while (i--)
            if (files[i].type == 'Scene')
                files.splice(i, 1);

        axios.get('http://127.0.0.1:8000/api/scenes/' + this.state.project_id + '/')
            .then(response => {
                    files.push(response.data.map((scene) => new File(scene.name, 'Scene')));
                    this.setState({
                        scenes: response.data.map((scene) => new SceneGame(scene.name, scene.id)),
                        selectorIsOpen: false,
                        selected_scene: 0,
                        selected_game_object: -1,
                        files: files,
                    });
                }
            ).then(()=>this.updateGameObjects(this.state.scenes[this.state.selected_scene]));
    }

    changeScene(index) {
        this.setState({
            selected_scene: index,
        });
        this.updateGameObjects(this.state.scenes[index]);
    }

    updateGameObjects(scene) {
        axios.get('http://127.0.0.1:8000/api/gameobjects/' + scene.id + '/')
            .then(response => {
                    scene.game_objects = response.data.map((gameobject) => new GameObject(gameobject.name));
                }
            ).then(()=>this.setState(this.state));
    }

    render() {
        this.setTitle();
        return (
            <div className="main-body">
                <div className="container-fluid">
                    <ProjectSelector
                        open={this.state.selectorIsOpen}
                        onClose={() => this.closeSelector()}
                        changeCurrentProject={(newProj, projId, isNewProj) => this.changeCurrentProject(newProj, projId, isNewProj)}
                    />
                    <div className="row">
                        <div className="interface-interface-5">
                            <div className="interface-0">
                                <div className="col">
                                    <div className="main-component-half-1">
                                        <Gameobjectlist game_objects={this.state.scenes.length > 0 ? this.state.scenes[this.state.selected_scene].game_objects : []}
                                                        create_game_object={(name) => this.createGameObject(name)}
                                                        handleClick={() => this.openSelector()}
                                                        updateGameObjectSelection={(index) => this.updateGameObjectSelection(index)}
                                        />
                                    </div>
                                    <div className="main-component-half-2">
                                        <Fileexplorer create_game_object={(name) => this.createGameObject(name)}
                                                      files={this.state.files}
                                                      create_file={(name) => this.createFile(name)}
                                                      scenes={this.state.scenes}
                                                      create_scene={(name) => this.createScene(name)}
                                                      change_scene={(index) => this.changeScene(index)}
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="main-component">
                                        <Scene
                                            current_scene={this.state.scenes.length > 0 ? this.state.scenes[this.state.selected_scene] : null}/>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="main-component">
                                        <Inspector/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Editor
