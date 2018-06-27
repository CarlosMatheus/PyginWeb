from rest_framework import serializers
from editor import models


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'name',
            'creation_date',
            'user',
        )

        model = models.Project


class SceneSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'name',
            'project',
        )

        model = models.Scene