#!/bin/bash
set -e

# Substitui '__PORT__' no arquivo de configuração do Nginx pela variável PORT
sed -i "s/__PORT__/$PORT/g" /etc/nginx/conf.d/*.conf

# Inicia o Nginx
exec nginx -g 'daemon off;'