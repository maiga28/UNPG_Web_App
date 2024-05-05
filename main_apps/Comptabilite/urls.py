from django.urls import path
from . import views

app_name = "Comptabilite"
urlpatterns = [
    path('', views.Comptabilite_View, name='Comptabilite')
]