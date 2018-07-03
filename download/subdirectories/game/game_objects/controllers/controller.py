from random import randint as rand
from game_engine.scene import Scene
from game_engine.game_object import GameObject
from game_engine.input import Input
from game_engine.color import Color
from game_engine.time import Time
from game_engine.basic_objects.text import Text
from game_engine.material import Material
from pygame.math import Vector2
from game.scripts.constants import Constants
from game.game_objects.mesh_objects.rectangle import Rectangle


class Controller(GameObject):

    def start(self):
        """
        NormalBehavior start method
        will be called when the object is instantiate on scene
        """
        Rectangle(Vector2(225,225), Vector2(57,50), Material(color=Color.white))

