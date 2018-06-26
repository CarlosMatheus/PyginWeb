from django.shortcuts import get_object_or_404
from rest_framework import generics
from .models import Scene, Project
from .serializers import SceneSerializer, ProjectSerializer
import datetime


class ListProjects(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user, creation_date=datetime.datetime.now())


class DetailProjects(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get_queryset(self):
        user = self.request.user
        return Scene.objects.filter(user=user)


class ListScenes(generics.ListCreateAPIView):
    queryset = Scene.objects.all()
    serializer_class = SceneSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user, creation_date=datetime.datetime.now())


class DetailScene(generics.ListAPIView):
    queryset = Scene.objects.all()
    serializer_class = SceneSerializer

    def get_queryset(self):
        user = self.request.user
        return Scene.objects.filter(user=user)