from game.scenes.scene01 import Scene01


class ScenesControllerScript:

    @classmethod
    def get_scenes(cls):
        """
        :return: the scene list with the references to the scenes classes
        """
        return [Scene01]
