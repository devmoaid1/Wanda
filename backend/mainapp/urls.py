from rest_framework import routers
from .api import *


router = routers.DefaultRouter()

router.register('api/customers', CustomerViewSet, 'customers')
router.register('api/dealerships', DealershipViewSet, 'dealerships')
router.register('api/cars', CarViewSet, 'cars')
router.register('api/bookings', BookingViewSet, 'cars')

urlpatterns = router.urls
