from django.urls import path
from . import views

app_name = 'comptes'

urlpatterns = [
    path('', views.login_view, name='login'),
    path('register/', views.register, name='register'),
    path('logout/', views.logout, name='logout'),         
    
]