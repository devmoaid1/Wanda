from django.db import models

# Create your models here.


class Car(models.Model):
    name = models.CharField(max_length=50)
    brand = models.CharField(max_length=100)
    price = models.FloatField()
    color = models.CharField(max_length=100)
    year = models.IntegerField()
    quantity = models.PositiveIntegerField()


class Booking(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    car = models.ForeignKey(Car, on_delete=models.CASCADE, null=True)


class Customer(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    bookings = models.ManyToManyField(Booking)


class Dealership(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    cars = models.ManyToManyField(Car)
