
from rest_framework import viewsets, permissions
from .models import *
from .serializer import *


class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
   # permission_classes = [permissions.AllowAny]
    serializer_class = CarSerializer


class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = BookingSerializer


class DealershipViewSet(viewsets.ModelViewSet):
    queryset = Dealership.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = DealershipSerializer


class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CustomerSerializer
