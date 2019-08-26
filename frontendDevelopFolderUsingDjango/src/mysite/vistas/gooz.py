from django.http import Http404
from django.shortcuts import render

def home(request):
    if request.method == 'GET':
        return render(request, 'gooz/Home.html', locals())
    else:
        raise Http404()
