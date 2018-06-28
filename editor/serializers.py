from rest_framework import serializers
from editor import models


"""Project serializers"""


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'name',
            'creation_date',
            'user',
        )

        model = models.Project


"""Scene serializer"""


class SceneSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'name',
            'project',
        )

        model = models.Scene


class SceneGetSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'name',
            'project',
        )

        model = models.Scene


"""Game object serializers"""


class GameObjectSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'name',
            'type',
            'scene',
        )

        model = models.GameObject


class GameObjectGetSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'name',
            'type',
            'scene',
        )

        model = models.GameObject
