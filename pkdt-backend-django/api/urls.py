from django.urls import include, path
from rest_framework import routers
from . import views

routers = routers.DefaultRouter()
routers.register(r'products', views.ProductViewSet)
routers.register(r'product', views.ProductDetailViewSet)
routers.register(r'categories', views.CategoryViewSet)
routers.register(r'suppliers', views.SupplierViewSet)
routers.register(r'guests', views.GuestViewSet)

urlpatterns = [
    path('', include(routers.urls)),
]
