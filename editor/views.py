from django.shortcuts import get_object_or_404
from rest_framework import generics
from .models import *
from .serializers import *
import datetime

"""Views for project"""


class ListProjects(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def perform_create(self, serializer):
        toAdd = ""
        if len(Scene.objects.filter(name=self.request.data['name'])) > 0:
            toAdd="*"
        serializer.save(user=self.request.user, creation_date=datetime.datetime.now()
                        , name=self.request.data['name']+toAdd)


class DetailProjects(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get_queryset(self):
        user = self.request.user
        return Project.objects.filter(user=user)


class DestroyProjects(generics.DestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    lookup_field = "id"

    def get_queryset(self):
        user = self.request.user
        return Project.objects.filter(user=user)


"""Views for scene"""


class CreateScene(generics.CreateAPIView):
    queryset = Scene.objects.all()
    serializer_class = SceneSerializer


class ListScenes(generics.ListAPIView):
    queryset = Scene.objects.all()
    serializer_class = SceneGetSerializer
    lookup_field = 'project'

    def get_queryset(self):
        return Scene.objects.filter(project=self.kwargs['project'])


class DestroyScene(generics.DestroyAPIView):
    queryset = Scene.objects.all()
    serializer_class = SceneGetSerializer
    lookup_field = "id"


"""Views for game object"""


class CreateGameObject(generics.CreateAPIView):
    queryset = GameObject.objects.all()
    serializer_class = GameObjectSerializer


class ListGameObjects(generics.ListAPIView):
    queryset = GameObject.objects.all()
    serializer_class = GameObjectGetSerializer
    lookup_field = 'scene'

    def get_queryset(self):
        return GameObject.objects.filter(scene=self.kwargs['scene'])


class DestroyGameObject(generics.DestroyAPIView):
    queryset = GameObject.objects.all()
    serializer_class = GameObjectSerializer
    lookup_field = "id"