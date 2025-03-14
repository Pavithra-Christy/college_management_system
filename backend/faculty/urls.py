from django.urls import path
from .views import FacultyListCreateView, FacultyDetailView

urlpatterns = [
    path('faculty/', FacultyListCreateView.as_view(), name='faculty-list-create'),
    path('faculty/<int:pk>/', FacultyDetailView.as_view(), name='faculty-detail'),
]
