### exams/urls.py
from django.urls import path
from .views import ExamListCreateView, ExamDetailView

urlpatterns = [
    path('exams/', ExamListCreateView.as_view(), name='exam-list-create'),
    path('exams/<int:pk>/', ExamDetailView.as_view(), name='exam-detail'),
]