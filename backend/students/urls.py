from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StudentViewSet

router = DefaultRouter()
router.register(r'', StudentViewSet)  # ✅ No extra "students"

urlpatterns = [
    path('', include(router.urls)),  # ✅ Works with /api/students/
]
