from django.shortcuts import render

# Create your views here.

def main_dash(request):
    
    return render(request,'gestions/home.html')