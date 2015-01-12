#!/bin/bash

cwd=$(pwd)

#config
passwd
Write failed: Broken pipe
florian@florian-ubuntu:~$ 

#install
rm /var/lib/dpkg/status
touch /var/lib/dpkg/status
apt-get update

#prepare meteor install
#install nodejs
wget http://archive.raspbian.org/raspbian/pool/main/e/eglibc/multiarch-support_2.13-38%2brpi2%2bdeb7u6_armhf.deb
dpkg -i --force-depends multiarch-support_2.13-38+rpi2+deb7u6_armhf.deb
apt-get -f install

#install mongodb
cd
wget http://raspbian-france.fr/download/mongodb-rpi_20140207.zip
adduser --firstuid 100 --ingroup nogroup --shell /etc/false --disabled-password --gecos "" --no-create-home mongodb
unzip mongodb-rpi_20140207.zip
cp -R mongodb-rpi/mongo /opt
chmod +x /opt/mongo/bin/*
mkdir /var/log/mongodb
chown mongodb:nogroup /var/log/mongodb
mkdir /var/lib/mongodb
chown mongodb:nogroup /var/lib/mongodb
cp mongodb-rpi/debian/init.d /etc/init.d/mongod
cp mongodb-rpi/debian/mongodb.conf /etc/
ln -s /opt/mongo/bin/mongod /usr/bin/mongod
chmod u+x /etc/init.d/mongod
update-rc.d mongod defaults /etc/init.d/mongod start

#install meteor port for ARM
#if meteor officialy support ARM don't use this port
wget http://node-arm.herokuapp.com/node_latest_armhf.deb
sudo dpkg -i node_latest_armhf.deb
apt-get install python make g++ curl
mkdir /opt/meteor
cd /opt
git clone https://github.com/IGx89/meteor.git
cd meteor/scripts
./generate-dev-bundle.sh
cd ..
./meteor
echo 'PATH="$PATH:/opt/meteor"' >> /etc/profile


cd $cwd
su pi
