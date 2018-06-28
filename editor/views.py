from django.shortcuts import get_object_or_404
from rest_framework import generics
from .models import *
from .serializers import *
from django.http import HttpResponse
import datetime
import os
from editor.models import Project

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

def generate_files(project_id):
    project = Project.objects.get(id=0)
    scenes = project.scene_set.all()

    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

    download = os.path.join(BASE_DIR, 'download')
    subdirectories = os.path.join(download, 'subdirectories')

    animations = os.path.join(subdirectories, 'animations')
    if not os.path.exists(animations):
        os.makedirs(animations)

    assets = os.path.join(subdirectories, 'assets')
    if not os.path.exists(assets):
        os.makedirs(assets)

    game_objects = os.path.join(subdirectories, 'game_objects')
    if not os.path.exists(game_objects):
        os.makedirs(game_objects)

    scenes = os.path.join(subdirectories, 'scenes')
    if not os.path.exists(scenes):
        os.makedirs(scenes)

    scripts = os.path.join(subdirectories, 'scripts')
    if not os.path.exists(scripts):
        os.makedirs(scripts)





