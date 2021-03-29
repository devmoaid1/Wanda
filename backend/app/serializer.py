from rest_framework import serializers
from app.models import Car,Customer,Dealership


class CustomerSerializer(serializers.ModelSerializers):
    class Meta:
        model=Customer
        fields = '__all__'
        
        
class CarSerializer(serializers.ModelSerializers):
    class Meta:
        model=Car
        fields = '__all__'
        
class DealershipSerializer(serializers.ModelSerializers):
    class Meta:
        model=Dealership
        fields = '__all__'
        
        
        