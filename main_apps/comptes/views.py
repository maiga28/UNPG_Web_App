from django.shortcuts import render

# Create your views here.
def login_view(request):
    return render(request, 'comptes/signin.html')

def register(request):
    return render(request, 'comptes/signup.html')

def logout(request):
    return render(request, 'comptes/logout.html')