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


class Transform(models.Model):
    id = models.IntegerField(primary_key=True)
    positionx = models.DecimalField(decimal_places=2, max_digits=20)
    positiony = models.DecimalField(decimal_places=2, max_digits=20)
    positionz = models.DecimalField(decimal_places=2, max_digits=20)
    rotation = models.DecimalField(decimal_places=2, max_digits=20)
    scalex = models.DecimalField(decimal_places=2, max_digits=20)
    scaley = models.DecimalField(decimal_places=2, max_digits=20)
    gameobject = models.ForeignKey(GameObject, on_delete=models.CASCADE)



