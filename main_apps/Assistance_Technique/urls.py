from django.urls import path
from . import views

app_name = "Assistance_Technique"

urlpatterns = [
    path('', views.Assistant_Technique_views, name='Assistant_Technique'),
]