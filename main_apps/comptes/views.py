from django.shortcuts import render

# Create your views here.
def login_view(request):
    return render(request, 'comptes/login.html')

def register(request):
    return render(request, 'comptes/register.html')

def logout(request):
    return render(request, 'comptes/logout.html')