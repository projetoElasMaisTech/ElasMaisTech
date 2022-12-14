"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from core.views import home, login_user, logout_user, user_submit, courses, practice, library, jobs, connected
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', login_user),
    path('user_submit', user_submit),
    path('home/', home),
    path('home/logout_user', logout_user, name="logout_user"),
    path('reset_password/', auth_views.PasswordResetView.as_view(template_name="password_recovery.html"), name="reset_password"),
    path('reset/<uidb64>/<token>', auth_views.PasswordResetConfirmView.as_view(template_name="password_reset_confirm.html"), name="password_reset_confirm"),
    path('password_reset/done/', auth_views.PasswordResetDoneView.as_view(template_name="password_reset_done.html"), name="password_reset_done"),
    path('reset_password_complete/', auth_views.PasswordResetCompleteView.as_view(template_name="password_reset_complete.html"), name="password_reset_complete"),
    path('password_reset_email/', auth_views.PasswordResetView.as_view(template_name="password_reset_emal.html"), name="password_reset_emal"),
    path('home/courses/', courses, name="courses"),
    path('home/practice/', practice, name="practice"),
    path('home/library/', library, name="library"),
    path('home/jobs/', jobs, name="jobs"),
    path('home/connected/', connected, name="connected")
] 

