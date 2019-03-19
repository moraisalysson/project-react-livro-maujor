from django.shortcuts import render
from .models import Course

def index(request):
    courses = Course.objects.all()
    template_name = 'courses/index.html'
    return render(request, template_name, {'courses': courses})