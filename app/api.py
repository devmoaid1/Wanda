from rest_framework import viewsets, permissions
from app.models import Car, Customer, Dealership
from .serializer import CustomerSerializer, CarSerializer, DealershipSerializer


class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CustomerSerializer


class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CarSerializer


class DealershipViewSet(viewsets.ModelViewSet):
    queryset = Dealership.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = DealershipSerializer
