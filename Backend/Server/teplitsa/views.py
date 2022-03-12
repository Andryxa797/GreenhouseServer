from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, get_object_or_404

from teplitsa.models import SensorData, ManagedSystems, CommandToManage, Photo
from teplitsa.permissions import ReadOnly, IsOwner, IsAuthenticated
from teplitsa.serializers import PhotoSerializerList, PhotoSerializerCreate, ManagedSystemsSerializerList, \
    ManagedSystemsSerializerCreate, CommandToManageSerializerCreate, SensorDataSerializerList, \
    SensorDataSerializerCreate


class SensorDataListView(ListAPIView):
    """
    Просмотр данных с датчиков
    """
    queryset = SensorData.objects.all().order_by('-pk')
    serializer_class = SensorDataSerializerList
    permission_classes = [ReadOnly]


class SensorDataCreateView(CreateAPIView):
    """
    Создание записи с показаниями
    """
    queryset = SensorData
    serializer_class = SensorDataSerializerCreate
    permission_classes = [IsOwner]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ManagedSystemsListView(ListAPIView):
    """
    Просмотр всех данных состояния систем управления теплицей
    """
    serializer_class = ManagedSystemsSerializerList
    queryset = ManagedSystems.objects.all().order_by('-pk')
    permission_classes = [ReadOnly]


class ManagedSystemsCreateView(CreateAPIView):
    """
    Создание записи с данными состояния систем управления теплицей
    """
    queryset = ManagedSystems
    serializer_class = ManagedSystemsSerializerCreate
    permission_classes = [IsOwner]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class PhotoListView(ListAPIView):
    """
    Просмотр всех данных состояния систем управления теплицей
    """
    serializer_class = PhotoSerializerList
    queryset = Photo.objects.all().order_by('-pk')
    permission_classes = [ReadOnly]


class PhotoCreateView(CreateAPIView):
    """
    Создание записи с данными состояния систем управления теплицей
    """
    queryset = Photo
    serializer_class = PhotoSerializerCreate
    permission_classes = [IsOwner]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CommandToManageCreateView(CreateAPIView):
    """
    Создание команды для управления
    """
    queryset = CommandToManage
    serializer_class = CommandToManageSerializerCreate
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CommandToManageRetrieveAPIView(RetrieveAPIView):
    """
    Просмотр последней команды для управления
    """
    queryset = CommandToManage.objects.all()
    serializer_class = CommandToManageSerializerCreate
    permission_classes = [IsAuthenticated]
    pagination_class = None

    def get_object(self):
        obj = self.get_queryset().last()
        return obj
