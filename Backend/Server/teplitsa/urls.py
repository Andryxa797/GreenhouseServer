from django.urls import path, include

from teplitsa.views import SensorDataListView, SensorDataCreateView, ManagedSystemsListView, ManagedSystemsCreateView, \
    CommandToManageCreateView, CommandToManageRetrieveAPIView

urlpatterns = [
    path("sensor-data/", SensorDataListView.as_view(), name="sensor-data-list"),
    path("sensor-data/create/", SensorDataCreateView.as_view(), name="sensor-data-list"),
    path("managed-systems/", ManagedSystemsListView.as_view(), name="sensor-data-list"),
    path("managed-systems/create/", ManagedSystemsCreateView.as_view(), name="managed-systems-create"),
    path("command-manage/create/", CommandToManageCreateView.as_view(), name="command-manage-create"),
    path("command-manage/", CommandToManageRetrieveAPIView.as_view(), name="command-manage-last"),
]
