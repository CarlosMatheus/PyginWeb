from django.urls import path

from . import views

urlpatterns = [
    # Paths for project
    path('', views.ListProjects.as_view()),
    path('projects/', views.DetailProjects.as_view()),
    path('projects/destroy/<id>/', views.DestroyProjects.as_view()),

    # Paths for scene
    path('scenes/', views.ListScenes.as_view()),
]