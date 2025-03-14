from django.urls import path  # ✅ Add this import
from .views import DepartmentListCreateView, DepartmentDetailView

urlpatterns = [
    path('departments/', DepartmentListCreateView.as_view(), name='department-list-create'),
    path('departments/<int:pk>/', DepartmentDetailView.as_view(), name='department-detail'),
]
