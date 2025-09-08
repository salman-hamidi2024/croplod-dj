from django.shortcuts import render

def new_bot(request):
    return render(request, "newbot.html")