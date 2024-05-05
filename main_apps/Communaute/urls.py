from django.urls import path
from . import views

app_name = "Communaute"

urlpatterns = [
    
    path('', views.Communaute_View, name='communaute'),
    
]
