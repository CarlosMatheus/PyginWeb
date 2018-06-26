from django.shortcuts import get_object_or_404
from rest_framework import generics
from .models import Scene
from .serializers import SceneSerializer
import datetime


class ListScenes(generics.ListCreateAPIView):
    queryset = Scene.objects.all()
    serializer_class = SceneSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user, creation_date=datetime.datetime.now())
        print(str(self.request))


class DetailScene(generics.ListAPIView):
    queryset = Scene.objects.all()
    serializer_class = SceneSerializer

    def get_queryset(self):
        user = self.request.user
        return Scene.objects.filter(user=user)