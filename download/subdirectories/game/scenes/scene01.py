from game_engine.scene import Scene
from game.game_objects.controllers.controller import Controller


class Scene01(Scene):

    def __init__(self):
        """
        Create the list of mesh_objects and call the superclass constructor passing the list
        """
        self.init_game_objects_controllers_reference_list = [Controller]
        super().__init__(self.init_game_objects_controllers_reference_list)
