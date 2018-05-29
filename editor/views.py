from rest_framework import generics
from django.http import HttpResponse


def index(request):
    return HttpResponse("hey")
