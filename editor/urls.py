from django.urls import path

from . import views

urlpatterns = [
    # Paths for project
    path('', views.ListProjects.as_view()),
    path('projects/', views.DetailProjects.as_view()),
    path('projects/destroy/<name>/', views.DestroyProjects.as_view()),

    # Paths for scene
    path('scenes/<project>/', views.ListScenes.as_view()),
]