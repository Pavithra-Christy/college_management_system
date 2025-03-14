from django.urls import path  # ✅ Add this import
from .views import EnrollmentListCreateView, EnrollmentDetailView

urlpatterns = [
    path('enrollment/', EnrollmentListCreateView.as_view(), name='enrollment-list-create'),
    path('enrollment/<int:pk>/', EnrollmentDetailView.as_view(), name='enrollment-detail'),
]
