from django.db import models
from django.contrib.auth.models import User


class Project(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=200)
    creation_date = models.DateTimeField('date published')
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Scene(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=200)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)


class GameObject(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=200)
    type = models.CharField(max_length=200)
    scene = models.ForeignKey(Scene, on_delete=models.CASCADE)


