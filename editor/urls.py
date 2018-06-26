from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListProjects.as_view()),
    path('projects/', views.DetailProjects.as_view()),
]