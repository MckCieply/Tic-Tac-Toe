from . import views
from django.urls import path

urlpatterns = [
    path('game', views.rpscissors, name="rpscissors")
]