from django.urls import path

from . import views

urlpatterns = [
    # Paths for project
    path('', views.ListProjects.as_view()),
    path('projects/', views.DetailProjects.as_view()),
    path('projects/destroy/<id>/', views.DestroyProjects.as_view()),

    # Paths for scene
    path('scenes/', views.CreateScene.as_view()),
    path('scenes/<project>/', views.ListScenes.as_view()),
    path('scenes/destroy/<id>/', views.DestroyScene.as_view()),

    # Paths for game object
    path('gameobjects/', views.CreateGameObject.as_view()),
    path('gameobjects/<scene>/', views.ListGameObjects.as_view()),
    path('gameobjects/destroy/<id>/', views.DestroyGameObject.as_view()),

    # Path to download
    path('download/', views.Download),

    # Paths to transform
    path('transforms/', views.CreateTransform.as_view()),
    path('transforms/<gameobject>/', views.ListTransforms.as_view()),
    path('transforms/destroy/<id>/', views.DestroyTransform.as_view()),

]
