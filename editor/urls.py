from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListScenes.as_view()),
    path('projects/', views.DetailScene.as_view()),
]