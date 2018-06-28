from django.shortcuts import get_object_or_404
from rest_framework import generics
from .models import *
from .serializers import *
from django.http import HttpResponse
import datetime
import os

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


"""Download return"""

import zipfile

def zipdir(path, ziph):
    # ziph is zipfile handle
    for root, dirs, files in os.walk(path):
        for file in files:
            ziph.write(os.path.join(root, file))


def Download(request):
    file_path = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    zipf = zipfile.ZipFile('./download/Python.zip', 'w', zipfile.ZIP_DEFLATED)
    zipdir(file_path+'/download/subdirectories', zipf)
    zipf.close()
    with open(file_path+'/download/Python.zip','rb') as f:
        FilePointer = f.read()

    response = HttpResponse(FilePointer, content_type='application/zip')
    response['Content-Disposition'] = 'attachment; filename=GameFiles.zip'
    return response


"""Views for transform"""


class CreateTransform(generics.CreateAPIView):
    queryset = Transform.objects.all()
    serializer_class = TransformSerializer


class ListTransforms(generics.ListAPIView):
    queryset = Transform.objects.all()
    serializer_class = TransformSerializer
    lookup_field = 'gameobject'

    def get_queryset(self):
        return Transform.objects.filter(scene=self.kwargs['gameobject'])


class DestroyTransform(generics.DestroyAPIView):
    queryset = Transform.objects.all()
    serializer_class = TransformSerializer
    lookup_field = "id"