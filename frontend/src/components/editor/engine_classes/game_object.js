import Component from './component'

class GameObject {
    constructor(name, hasTransform=true){
        this.name = name;
        this.components = [];
        if (hasTransform)
            this.components.push(new Component('Transform'));
    }
}

export default GameObject