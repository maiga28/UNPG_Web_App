from django.shortcuts import render

# Create your views here.
def Comptabilite_View(request):
    return render(request, 'Comptabilite/Comptabilite.html')