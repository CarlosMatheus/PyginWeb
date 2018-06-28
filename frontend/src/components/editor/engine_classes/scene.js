class SceneGame {
    constructor(name) {
        this.name = name;
        this.game_objects = [];
        this.game_object_count = {
            'Rectangle': 0, 'Circle': 0, 'Polygon': 0, 'Sprite': 0, 'Text': 0,
            'Generic': 0
        };
    }
}

export default SceneGame