from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
# Create your models here.


class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, username='', pic='', phone='', address='', name=''):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, pic=pic, phone=phone,
                          address=address, name=name, username=username)

        user.set_password(password)
        user.save()

        return user


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


class Customer(AbstractBaseUser):

    name = models.CharField(max_length=50)
    username = models.CharField(max_length=50)
    email = models.EmailField(max_length=100, unique=True)
    phone = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    pic = models.ImageField(null=True, blank=True)
    bookings = models.ManyToManyField(Booking)

    def __str__(self):
        return self.name

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'phone', 'address', 'pic']
