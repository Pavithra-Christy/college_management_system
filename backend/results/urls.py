from django.urls import path  # ✅ Add this import
from .views import ResultListCreateView, ResultDetailView

urlpatterns = [
    path('results/', ResultListCreateView.as_view(), name='result-list-create'),
    path('results/<int:pk>/', ResultDetailView.as_view(), name='result-detail'),
]
