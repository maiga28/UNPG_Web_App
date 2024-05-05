from django.shortcuts import render

# Create your views here.
def Communaute_View(request):
    return render(request, 'Communaute/communaute.html')