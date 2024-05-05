from django.urls import path
from . import views

app_name = 'gestions'

urlpatterns = [
    path('', views.main_dash, name='home'),
    path('membre/', views.membre, name='membre'),
]
