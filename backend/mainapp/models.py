from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
# Create your models here.


class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)

        # Customer.is_staff = False

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


class Customer(AbstractBaseUser, PermissionsMixin):

    name = models.CharField(max_length=250)
    username = models.CharField(max_length=50, unique=True)
    email = models.EmailField(max_length=250,)
    phone = models.CharField(max_length=250)
    address = models.CharField(max_length=250)
    # pic = models.ImageField(null=True, blank=True)
    bookings = models.ManyToManyField(Booking)

    def __str__(self):
        return self.name

    objects = UserAccountManager()
    is_staff = models.BooleanField(('staff status'), default=False)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['name', 'email', 'phone', 'address']
