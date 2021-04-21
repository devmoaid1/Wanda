

from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    # path('', include('frontend.urls')),
    path('', include('mainapp.urls'),),
    path('api/', include('djoser.urls'),),
    path('api/', include('djoser.urls.authtoken'),)

    # path('api-auth/', include('rest_framework.urls')),
    # path('rest-auth/', include('rest_auth.urls')),
    # path('rest-auth/registration/', include('rest_auth.registration.urls')),


]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# urlpatterns += [url(r'^api/v1/', include('djoser.urls')),
#                 url(r'^api/v1/', include('djoser.urls.authtoken')), ]
