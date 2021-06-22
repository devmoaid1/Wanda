

from rest_framework import serializers
from .models import *


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ('status',
                  'id',
                  'car',
                  'created_by',
                  'dealership',
                  )
        date = serializers.DateField(format=None, input_formats=None)


class DealershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dealership
        fields = '__all__'


class ReportSerializer(serializers.ModelSerializer):
    class Meta:

        model = Report
        fields = '__all__'
