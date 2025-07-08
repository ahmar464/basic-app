from django.urls import path
from .views import greeting_view

urlpatterns = [
    path('greeting/', greeting_view),
]
