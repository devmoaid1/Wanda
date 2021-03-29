from rest_framework import routers
from .api import CarViewSet, DealershipViewSet, CustomerViewSet


router = routers.DefaultRouter()

router.register('api/customers', CustomerViewSet, 'customers')
router.register('api/dealerships', DealershipViewSet, 'dealerships')
router.register('api/cars', CarViewSet, 'cars')

urlpatterns = router.urls
