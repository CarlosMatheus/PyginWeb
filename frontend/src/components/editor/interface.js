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

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: 'No Project Selected',
            game_objects: [],
            selected_scene: 0,
            scenes: [new SceneGame('Scene_1')],
            game_object_count: {
                'Rectangle': 0, 'Circle': 0, 'Polygon': 0, 'Sprite': 0, 'Text': 0,
                'Generic': 0
            },
            files: [],
            file_count: {
                'Controller': 0, 'Animation': 0
            }
        }
    }

    createGameObject(name) {
        const game_objects = this.state.game_objects;
        const game_object_count = this.state.game_object_count;
        game_object_count[name]++;
        game_objects.push(new GameObject(name + "_" + game_object_count[name]));
        this.setState({
            game_objects: game_objects,
            game_object_count: game_object_count,
        });
    }

    createFile(name) {
        const files = this.state.files;
        const file_count = this.state.file_count;
        file_count[name]++;
        files.push(name + "_" + file_count[name]);
        this.setState({
            files: files,
            file_count: file_count,
        });
    }

    createScene() {
        const scenes = this.state.scenes;
        scenes.push(new SceneGame("Scene_" + (scenes.length+1)));
        this.setState({
            scenes: scenes
        });
    }

    changeScene(index){
        this.setState({
            selected_scene: index,
        })
    }

    render() {
        return (
            <div className="main-body">
                <div className="container-fluid">
                    <ProjectSelector/>
                    <div className="row">
                        <div className="interface-interface-5">
                            <div className="interface-0">
                                <div className="col">
                                    <div className="main-component-half-1">
                                        <Gameobjectlist game_objects={this.state.game_objects}
                                                        create_game_object={(name) => this.createGameObject(name)}
                                        />
                                    </div>
                                    <div className="main-component-half-2">
                                        <Fileexplorer game_objects={this.state.game_objects}
                                                      create_game_object={(name) => this.createGameObject(name)}
                                                      files={this.state.files}
                                                      create_file={(name) => this.createFile(name)}
                                                      scenes={this.state.scenes}
                                                      create_scene={(name) => this.createScene(name)}
                                                      change_scene={(index)=> this.changeScene(index)}
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="main-component">
                                        <Scene current_scene={this.state.scenes[this.state.selected_scene]}/>
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
