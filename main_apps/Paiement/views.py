from django.shortcuts import render

# Create your views here.
def Paiement_View(request):
    return render(request, 'Paiement/paiement.html')