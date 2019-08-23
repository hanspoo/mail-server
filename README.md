### Simple http server to handle contact forms that send email

It's too simple and in production will require an aditional security layer to avoid misuse. 

Mail server sencillo programado en nodeejs con express, requiere recibe su configuración de un archivo .env.

Clone and do npm install. 
The server.js program has a shebang: has been converted in a script ran by node directly. 

git clone git@github.com:hanspoo/mail-server.git  
yarn install  

create a file named .env file like this: 
 
FROM=xxx@xxxx.cl  
TO=yyy@yyy.cl  
HOST=mail.xxx.cl  
USER=xxx.xxx@xxx.cl  
PASS=*******  
HTTP_PORT=9999  

Then
./server.js

Para instalarlo en la partida de una máquina linux con systemd:  

sudo cp mail-server.service /etc/systemd/system/   
sudo systemctl enable mail-server.service  

Probar el script  
sudo systemctl start mail-server.service  

