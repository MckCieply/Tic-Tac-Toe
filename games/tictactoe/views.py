from django.shortcuts import render,redirect
from django.http import HttpResponse

# Create your views here.
def tictactoe(response):
    return render(response, "tictactoe/tictactoe.html")