# PyginWeb

PyginWeb is an online scenario editor for Pygin to facilitate the development of games in Python. It was developed using React, DJango and SQLite. The latest version is running [here.](https://pyginweb.herokuapp.com/)

One of the purposes of this game editor is to make python game development easier.
This engine includes support for collisions, meshes, materials, game objects and scenes.
The elements used are very similar to the ones used in the engine [Unity](https://unity3d.com/ "Unity Official Website").

## Installation

First, you must install the Pygame package.

```
$ pip install pygame-engine
```

Now you must install the web development dependencies. To do this, you must first clone this repository. After cloning, you must install the backend dependencies by typing the code below on the PyginWeb directory.

```
$ pip install -r requirements.txt
```

Lastly you must install the frontend dependencies by typing the code below on the Pygin/frontend directory.

```
$ npm install
```

## Running Servers

To be able to develop you must run the frontend and backend servers. To run them do the following:

```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

```
cd frontend
npm start
```

Now you are free to test the webapp by opening 127.0.0.1:8000 on your browser!

## Notes about documentation and contributing

If any substantial change is made, please, help out with the documentation using the [wiki](https://github.com/CarlosMatheus/Balance/wiki).

## About

This project aims to make the process of game development using python easier. To understand a little bit more about how the code is structured visit the [wiki](https://github.com/CarlosMatheus/Engine/wiki).

## License

This project is licensed under the MIT License - see the [licence](LICENCE.md) file for details.

## Acknowledgments

* **Professor Edgar Toshiro Yano** - [Curriculum](http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4798593T1&idiomaExibicao=2)
