from django.urls import path
from . import views

app_name = "Statistique"
urlpatterns = [
    path('', views.Statistique_View, name='statistique')
]