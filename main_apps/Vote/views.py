from django.shortcuts import render

# Create your views here.
def Vote_View(request):
    return render(request, 'Vote/vote.html')