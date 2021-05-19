
from rest_framework import routers
from .api import *
from django.conf.urls import include, url

router = routers.DefaultRouter()

router.register('api/cars', CarViewSet, 'cars')
router.register('api/bookings', BookingViewSet, 'bookings')
router.register('api/dealerships', DealershipViewSet, 'dealerships')


router.register('api/reports', ReportViewSet, 'reports')

urlpatterns = router.urls
