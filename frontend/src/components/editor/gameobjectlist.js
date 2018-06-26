// Generated by https://pagedraw.io/pages/9927
import React from 'react';
import './gameobjectlist.css';
import axios from 'axios'


function render() {
    return <div className="gameobjectlist-gameobjectlist-6">
        <div className="gameobjectlist-0">
            <div className="gameobjectlist-rectangle_4-6">
                <div className="gameobjectlist-0-0-0">
                    <div className="gameobjectlist-rectangle_4">
                        <div className="gameobjectlist-0-0-0-0-0">
                            <div className="gameobjectlist-gameobjectlist-2">
                                Game Object List
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gameobjectlist-rectangle_3" /> 
        </div>
        <div className="gameobjectlist-1">
            <div className="gameobjectlist-rectangle-5">
                <div className="gameobjectlist-1-0-0">
                    {/*TODO:o botao está aqui*/}
                    <div className="gameobjectlist-rectangle_2" onClick={()=>{
                          axios.get('http://127.0.0.1:8000/api/projects/')
                              .then(response => window.alert(JSON.stringify(response)))

                        }}>
                        <div className="gameobjectlist-1-0-0-0-0">
                            <div className="gameobjectlist-1-0-0-0-0-0">
                                <div className="gameobjectlist-1-0-0-0-0-0-0">
                                    <div className="gameobjectlist-line_3" /> 
                                </div>
                            </div>
                            <div className="gameobjectlist-line_2" /> 
                            <div className="gameobjectlist-1-0-0-0-0-2">
                                <div className="gameobjectlist-1-0-0-0-0-2-0">
                                    <div className="gameobjectlist-line_3-8" /> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gameobjectlist-rectangle_2-4">
                        <div className="gameobjectlist-1-0-0-1-0">
                            <div className="gameobjectlist-line_3-9" /> 
                            <div className="gameobjectlist-line_3-6" /> 
                        </div>
                    </div>
                    <div className="gameobjectlist-rectangle_2-3">
                        <div className="gameobjectlist-1-0-0-2-0">
                            <div className="gameobjectlist-text-6">Search...</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}
