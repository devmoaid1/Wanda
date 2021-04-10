from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Car(models.Model):

    picture = models.URLField(max_length=200)
    name = models.CharField(max_length=50)
    Manfacture = models.CharField(max_length=100)
    price = models.FloatField()
    color = models.CharField(max_length=100)
    year = models.IntegerField()
    description = models.TextField()
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return self.name


class Booking(models.Model):

    date = models.DateTimeField(auto_now_add=True)
    cars = models.OneToOneField(Car, on_delete=models.CASCADE)


class Dealership(models.Model):

    name = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    phone = models.CharField(max_length=50)
    cars = models.ManyToManyField(Car)


class Customer(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    bookings = models.ManyToManyField(Booking)
    owner = models.ForeignKey(
        User, related_name="customer", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name
