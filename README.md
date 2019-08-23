
Para instalar en la partida de la máquina:

sudo cp mail-server.service /etc/systemd/system/
sudo systemctl enable mail-server.service

Probar el script
sudo systemctl start mail-server.service

