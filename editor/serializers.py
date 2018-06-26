from rest_framework import serializers
from editor import models


class SceneSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'name',
            'creation_date',
            'user',
        )

        model = models.Scene
