from django.urls import path, include

from teplitsa.views import SensorDataListView, SensorDataCreateView, PhotoListView, PhotoCreateView, \
    CommandToManageCreateView, CommandToManageRetrieveAPIView, ManagedSystemsListView, ManagedSystemsCreateView

urlpatterns = [
    path("sensor-data/", SensorDataListView.as_view(), name="sensor-data-list"),
    path("sensor-data/create/", SensorDataCreateView.as_view(), name="sensor-data-list"),
    path("managed-systems/", ManagedSystemsListView.as_view(), name="sensor-data-list"),
    path("managed-systems/create/", ManagedSystemsCreateView.as_view(), name="managed-systems-create"),
    path("photo/", PhotoListView.as_view(), name="photo-list"),
    path("photo/create/", PhotoCreateView.as_view(), name="photo-create"),
    path("command-manage/create/", CommandToManageCreateView.as_view(), name="command-manage-create"),
    path("command-manage/", CommandToManageRetrieveAPIView.as_view(), name="command-manage-last"),
]
