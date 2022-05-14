#!/bin/bash

gnome-terminal -- /bin/sh -c "./LinuxRunBackend.sh; exec bash"
gnome-terminal -- /bin/sh -c "./LinuxRunFrontend.sh; exec bash"
