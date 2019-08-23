### Simple http server to handle contact forms that send email

It's too simple and in production will require an aditional security layer to avoid misuse. 

Mail server sencillo programado en nodeejs con express, requiere recibe su configuración de un archivo .env.


Para instalarlo en la partida de una máquina linux con systemd:  

sudo cp mail-server.service /etc/systemd/system/   
sudo systemctl enable mail-server.service  

Probar el script  
sudo systemctl start mail-server.service  

Clone and do npm install, the server.js program has a shebang: has been converted in a script ran by node directly.  
