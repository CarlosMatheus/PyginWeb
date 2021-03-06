// Generated by https://pagedraw.io/pages/9927
import React from 'react';
import List_item from './list_item';
import './gameobjectlist.css';
import './styles.css'

function render() {
    return <div className="gameobjectlist-gameobjectlist-6">
        <div className="gameobjectlist-0">
            <div className="gameobjectlist-rectangle_3">
                <div className="gameobjectlist-0-0-0">
                    <div className="gameobjectlist-rectangle_2">
                        <div className="gameobjectlist-0-0-0-0-0">
                            <div className="gameobjectlist-rectangle_4">
                                <div className="gameobjectlist-0-0-0-0-0-0-0">
                                    <a href="/home/" className="gameobjectlist-0-0-0-0-0-0-0-0">
                                        <div className="gameobjectlist-gameobjectlist-3">
                                            Settings
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="gameobjectlist-rectangle_4-5">
                                <div className="gameobjectlist-0-0-0-0-0-1-0">
                                    <div onClick={this.props.handleClick} className="gameobjectlist-gameobjectlist-4">
                                        Projects
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gameobjectlist-0-0-0-1"/>
                </div>
            </div>
        </div>
        <div className="gameobjectlist-1">
            <div className="gameobjectlist-rectangle_20">
                <div className="gameobjectlist-1-0-0">
                    <div className="gameobjectlist-rectangle_3-7">
                        <div className="gameobjectlist-1-0-0-0-0">
                            <div className="gameobjectlist-rectangle_4-0">
                                <div className="gameobjectlist-1-0-0-0-0-0-0">
                                    <div className="gameobjectlist-1-0-0-0-0-0-0-0">
                                        <div className="gameobjectlist-1-0-0-0-0-0-0-0-0">
                                            <div className="gameobjectlist-rectangle_4-8"/>
                                        </div>
                                    </div>
                                    <div className="gameobjectlist-1-0-0-0-0-0-0-1">
                                        <div className="gameobjectlist-1-0-0-0-0-0-0-1-0">
                                            <div className="gameobjectlist-gameobjectlist-2">
                                                Game Object List
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gameobjectlist-1-0-0-0-0-0-0-2">
                                        <div className="gameobjectlist-1-0-0-0-0-0-0-2-0">
                                            <div className="gameobjectlist-rectangle_4-1"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gameobjectlist-1-0-1">
                    <div className="gameobjectlist-rectangle-3">
                        <div className="gameobjectlist-1-0-1-0-0">
                            <div className="gameobjectlist-rectangle_2-8">
                                <div className="gameobjectlist-1-0-1-0-0-0-0">
                                    <div className="gameobjectlist-rectangle_1"/>
                                    <div className="gameobjectlist-1-0-1-0-0-0-0-1">
                                        <div className="gameobjectlist-1-0-1-0-0-0-0-1-0">
                                            <div className="gameobjectlist-text-5">
                                                <div className="dropdown">
                                                    <div className="gameobjectlist-text-6" id="dropdownMenuButton"
                                                         data-toggle="dropdown"
                                                         aria-haspopup="true" aria-expanded="false">
                                                        Create
                                                    </div>
                                                    <div className="dropdown-menu my-dropdown"
                                                         aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="#"
                                                           onClick={() => this.props.create_game_object('Rectangle')}>Rectangle</a>
                                                        <a className="dropdown-item" href="#"
                                                           onClick={() => this.props.create_game_object('Circle')}>Circle</a>
                                                        <a className="dropdown-item" href="#"
                                                           onClick={() => this.props.create_game_object('Polygon')}>Polygon</a>
                                                        <a className="dropdown-item" href="#"
                                                           onClick={() => this.props.create_game_object('Sprite')}>Sprite</a>
                                                        <a className="dropdown-item" href="#"
                                                           onClick={() => this.props.create_game_object('Text')}>Text</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gameobjectlist-1-0-1-0-0-0-0-2">
                                        <div className="gameobjectlist-1-0-1-0-0-0-0-2-0">
                                            <div className="gameobjectlist-triangle-0">
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 4"
                                                     className="gameobjectlist-1-0-1-0-0-0-0-2-0-0-0">
                                                    <polygon points="0 4 4 0 4 4"
                                                             className="gameobjectlist-1-0-1-0-0-0-0-2-0-0-0-0"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gameobjectlist-rectangle_12"/>
                                </div>
                            </div>
                            <div className="gameobjectlist-1-0-1-0-0-1">
                                <div className="gameobjectlist-1-0-1-0-0-1-0">
                                    <div className="gameobjectlist-rectangle_2-84">
                                        <div className="gameobjectlist-1-0-1-0-0-1-0-0-0">
                                            <div className="gameobjectlist-text-3">Search...</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gameobjectlist-1-0-2">
                    <div className="gameobjectlist-rectangle-2"/>
                </div>
            </div>
        </div>
        {
            this.props.game_objects.map((game_object) => {
                return (
                    <div
                        key={game_object}
                        onClick={() => {this.props.updateGameObjectSelection(this.props.game_objects.indexOf(game_object))}}
                        className="gameobjectlist-item">
                        <div className="gameobjectlist-list_item_instance">
                            <List_item name={game_object.name}/>
                        </div>
                    </div>
                )
            })
        }
    </div>;
};

export default function (props) {
    return render.apply({props: props});
}
