from django.shortcuts import render

# Create your views here.

def Communication_View(request):
    return render(request, 'Communication/Communication.html')
