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


class Customer(AbstractBaseUser, PermissionsMixin):

    name = models.CharField(max_length=250)
    username = models.CharField(max_length=50, unique=True)
    email = models.EmailField(max_length=250,)
    phone = models.CharField(max_length=250)
    address = models.CharField(max_length=250)
    # pic = models.ImageField(null=True, blank=True)
    # bookings = models.ManyToManyField(Booking)

    def __str__(self):
        return self.name

    objects = UserAccountManager()
    is_staff = models.BooleanField(('staff status'), default=False)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['name', 'email', 'phone', 'address']


class Car(models.Model):

    picture = models.URLField(max_length=200)
    picture2 = models.URLField(max_length=200)
    name = models.CharField(max_length=50)
    Manfacture = models.CharField(max_length=100)
    price = models.FloatField()
    color = models.CharField(max_length=100)
    year = models.IntegerField()
    description = models.TextField()
    description2 = models.TextField()
    co2 = models.CharField(max_length=250)
    fuel = models.CharField(max_length=250)
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return self.name


class Dealership(models.Model):

    name = models.CharField(max_length=250)
    pic = models.CharField(max_length=250)
    address = models.CharField(max_length=250)
    phone = models.CharField(max_length=50)
    stock = models.PositiveIntegerField()
    cars = models.ManyToManyField(Car)

    def __str__(self):
        return self.name


class Booking(models.Model):
    pending = 'pending'
    active = 'active'

    denied = 'denied'

    status_choices = ((pending, "pending"),
                      (active, "active"), (denied, "denied"))
    date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(
        max_length=10, choices=status_choices, default="pending")
    car = models.OneToOneField(Car, on_delete=models.CASCADE)
    dealership = models.OneToOneField(Dealership, on_delete=models.CASCADE)
    created_by = models.ForeignKey(Customer, on_delete=models.CASCADE)
