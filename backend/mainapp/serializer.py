from rest_framework import serializers
from .models import Booking, Car, Customer, Dealership


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:

        model = Customer
        fields = '__all__'


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'


class DealershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dealership
        fields = '__all__'


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'
