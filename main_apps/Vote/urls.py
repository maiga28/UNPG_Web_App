from django.urls import path
from . import views

app_name = "Vote"
urlpatterns = [
    path('', views.Vote_View, name='vote_urls')
]