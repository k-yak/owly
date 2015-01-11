#!/bin/bash

#config
passwd

#install
sudo rm /var/lib/dpkg/status
sudo touch /var/lib/dpkg/status
sudo apt-get update
