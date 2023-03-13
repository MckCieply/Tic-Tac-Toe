from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def rpscissors(response):
    return render(response, "rpscissors/rockpaperscissors.html")
