
from rest_framework import routers
from .api import *
from django.conf.urls import include, url

router = routers.DefaultRouter()

router.register('api/cars', CarViewSet, 'cars')
router.register('api/bookings', BookingViewSet, 'cars')
router.register('api/dealerships', DealershipViewSet, 'dealerships')


# router.register('api/customers', CustomerViewSet, 'customers')

urlpatterns = router.urls
urlpatterns += [
    url(r'^api/v1/', include('djoser.urls')),
    url(r'^api/v1/', include('djoser.urls.authtoken')),
]
