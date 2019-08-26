from django.urls                import path
from django.conf                import settings
from django.conf.urls           import url
from django.conf.urls.static    import static
from mysite.vistas              import gooz
from mysite.vistas              import electroMec

urlpatterns = [


    path('',                                    gooz.home),
    path('electroMec/',                         electroMec.home),


]+static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
