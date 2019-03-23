from django.shortcuts import render, get_object_or_404
from .models import Course
from .forms import ContactCourse


def index(request):
    courses = Course.objects.all()

    return render(request, 'courses/index.html', {'courses': courses})

def details(request, slug):
    course = get_object_or_404(Course, slug=slug)

    if request.method == 'POST':
        form = ContactCourse(request.POST)

        if form.is_valid():
            form.send_mail(course)
    else:
        form = ContactCourse()

    return render(request, 'courses/details.html', {'course': course, 'form': form})
