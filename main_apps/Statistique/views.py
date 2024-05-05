from django.shortcuts import render

# Create your views here.
def Statistique_View(request):
    return render(request, 'Statistique/Statistique.html')