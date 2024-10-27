from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import AuthenticationForm
from .templates.app.forms import UserRegisterForm
from django.shortcuts import render

def home(request):
    return render(request, 'app/home.html')

def login_view(request):
    return render(request, 'app/login.html')

def feedback(request):
    return render(request, 'app/feedback.html')

def programs(request):
    return render(request, 'app/programs.html')

def about(request):
    return render(request, 'app/about.html')

def articles(request):
    return render(request, 'app/articles.html')

def partners(request):
    return render(request, 'app/partners.html')

def team(request):
    return render(request, 'app/team.html')

def testimonials(request):
    return render(request, 'app/testimonials.html')


def login_view(request):
    if request.method == 'POST':
        if 'register' in request.POST:
            # Registration form handling
            register_form = UserRegisterForm(request.POST)
            login_form = AuthenticationForm()
            if register_form.is_valid():
                user = register_form.save()
                login(request, user)
                return redirect('home')
        elif 'login' in request.POST:
            # Login form handling
            login_form = AuthenticationForm(request, data=request.POST)
            register_form = UserRegisterForm()
            if login_form.is_valid():
                username = login_form.cleaned_data.get('username')
                password = login_form.cleaned_data.get('password')
                user = authenticate(username=username, password=password)
                if user is not None:
                    login(request, user)
                    return redirect('home')
    else:
        register_form = UserRegisterForm()
        login_form = AuthenticationForm()
    
    context = {
        'register_form': register_form,
        'login_form': login_form,
    }
    return render(request, 'app/login.html', context)
