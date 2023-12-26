
from django.contrib import admin
from django.urls import path,re_path
from . import views
urlpatterns = [
    path('admin/', admin.site.urls),
    re_path('login',views.login_user),
    re_path('signup',views.signup_user),
    re_path('signup_avocat',views.signup_avocat)
]
