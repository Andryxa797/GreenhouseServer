from django.contrib import admin

from teplitsa.models import SensorData, ManagedSystems, Photo, CommandToManage, Events


class SensorDataAdmin(admin.ModelAdmin):
    list_display = ('owner', 'created_at')


class ManagedSystemsAdmin(admin.ModelAdmin):
    list_display = ('owner', 'created_at')


class PhotoAdmin(admin.ModelAdmin):
    list_display = ('owner', 'created_at')


class CommandToManageAdmin(admin.ModelAdmin):
    list_display = ('owner', 'created_at')


class EventsAdmin(admin.ModelAdmin):
    list_display = ('is_new_event', 'automatic_mode')


admin.site.register(SensorData, SensorDataAdmin)
admin.site.register(ManagedSystems, ManagedSystemsAdmin)
admin.site.register(Photo, PhotoAdmin)
admin.site.register(CommandToManage, CommandToManageAdmin)
admin.site.register(Events, EventsAdmin)
