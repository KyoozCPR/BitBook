from django.shortcuts import render
from .forms import TerminiForm
from .models import Termini
# Create your views here.


def index(request):
    if request.method == "POST":
        form = TerminiForm(request.POST)
        if form.is_valid():
            
            searched = Termini.objects.filter(name__icontains=form.cleaned_data["name"])
        return render(request, 'result.html', {"form": form, 'termini': searched, "name": form.cleaned_data["name"]})
        

    else:
        form = TerminiForm
        return render(request, 'result.html', {"form": form})