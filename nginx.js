server {
        listen 80;

        root /home/ubuntu/;
        
        server_name myfates.com www.myfates.com 13.52.147.39;

        index index.html index.htm index.nginx-debian.html;

        location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        }

        location /api/ {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        }
}

server {
    if ($host = www.myfates.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = myfates.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


        listen 80 default_server;
        listen [::]:80 default_server;

        server_name myfates.com www.myfates.com 13.52.147.39;
        return 404; # managed by Certbot

}