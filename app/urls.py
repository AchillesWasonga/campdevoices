from django.shortcuts import render, redirect
from django.urls import path
from . import views
from django.contrib.auth.views import LogoutView

urlpatterns = [
    path('', views.home, name='home'),
    path('login/', views.login_view, name='login'),  # Combine login and register here
    path('logout/', LogoutView.as_view(next_page='home'), name='logout'),
    path('feedback/', views.feedback, name='feedback'),
    path('programs/', views.programs, name='programs'),
    path('about/', views.about, name='about'),
    path('articles/', views.articles, name='articles'),
    path('partners/', views.partners, name='partners'),
    path('team/', views.team, name='team'),
    path('testimonials/', views.testimonials, name='testimonials'),
    # Additional paths can be added here as needed
]

