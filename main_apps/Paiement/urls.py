from django.urls import path
from . import views

app_name = "Paiement"
urlpatterns = [
    path('', views.Paiement_View, name='paiement')
]