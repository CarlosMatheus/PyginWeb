from game_engine.basic_objects.basic_rectangle import BasicRectangle
from game_engine.components.polygon_collider import PolygonCollider
from game_engine.components.physics import Physics


class Rectangle(BasicRectangle):

    def __init__(self, position, dimension, material, layer=0):
        super(Rectangle, self).__init__(position, dimension, material, layer=layer)
        self.dimension = dimension
        self.physics = Physics(self, mass=10, gravity=50)
