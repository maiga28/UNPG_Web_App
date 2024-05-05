from django.urls import path
from . import views

app_name = "Communication"
urlpatterns = [
    path('', views.Communication_View, name='Communication'),
]